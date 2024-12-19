const db = require('../config/db.config');

exports.borrowBook = async (req, res) => {
    try {
        const { userId, bookId, returnDate } = req.body;
        
        // Check if book is available
        const [book] = await db.execute(
            'SELECT available FROM books WHERE id = ?',
            [bookId]
        );
        
        if (!book[0] || !book[0].available) {
            return res.status(400).json({ message: 'Book is not available' });
        }
        
        // Start transaction
        await db.beginTransaction();
        
        try {
            // Create borrow record
            await db.execute(
                'INSERT INTO borrows (userId, bookId, borrowDate, returnDate) VALUES (?, ?, CURDATE(), ?)',
                [userId, bookId, returnDate]
            );
            
            // Update book availability
            await db.execute(
                'UPDATE books SET available = false WHERE id = ?',
                [bookId]
            );
            
            await db.commit();
            res.json({ message: 'Book borrowed successfully' });
        } catch (error) {
            await db.rollback();
            throw error;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.returnBook = async (req, res) => {
    try {
        const { borrowId } = req.params;
        
        // Check if borrow record exists
        const [borrow] = await db.execute(
            'SELECT * FROM borrows WHERE id = ?',
            [borrowId]
        );
        
        if (borrow.length === 0) {
            return res.status(404).json({ message: 'Borrow record not found' });
        }
        
        // Start transaction
        await db.beginTransaction();
        
        try {
            // Update borrow status
            await db.execute(
                'UPDATE borrows SET status = "returned" WHERE id = ?',
                [borrowId]
            );
            
            // Update book availability
            await db.execute(
                'UPDATE books SET available = true WHERE id = ?',
                [borrow[0].bookId]
            );
            
            await db.commit();
            res.json({ message: 'Book returned successfully' });
        } catch (error) {
            await db.rollback();
            throw error;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getBorrowHistory = async (req, res) => {
    try {
        const { userId } = req.params;
        
        const [history] = await db.execute(
            `SELECT b.*, books.title, books.author 
             FROM borrows b 
             JOIN books ON b.bookId = books.id 
             WHERE b.userId = ?
             ORDER BY b.borrowDate DESC`,
            [userId]
        );
        
        res.json(history);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};