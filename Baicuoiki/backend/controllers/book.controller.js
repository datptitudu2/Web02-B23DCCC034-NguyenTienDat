const db = require('../config/db.config');

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const [books] = await db.execute('SELECT * FROM books');
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get book by ID
exports.getBookById = async (req, res) => {
    try {
        const [books] = await db.execute(
            'SELECT * FROM books WHERE id = ?',
            [req.params.id]
        );
        
        if (books.length === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }
        
        res.json(books[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Add new book
exports.addBook = async (req, res) => {
    try {
        const { title, author, category, publisher, year, location, description } = req.body;
        
        const [result] = await db.execute(
            'INSERT INTO books (title, author, category, publisher, year, location, description) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [title, author, category, publisher, year, location, description]
        );
        
        res.status(201).json({ message: 'Book added successfully', id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update book
exports.updateBook = async (req, res) => {
    try {
        const { title, author, category, publisher, year, location, description, available } = req.body;
        
        const [result] = await db.execute(
            'UPDATE books SET title = ?, author = ?, category = ?, publisher = ?, year = ?, location = ?, description = ?, available = ? WHERE id = ?',
            [title, author, category, publisher, year, location, description, available, req.params.id]
        );
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }
        
        res.json({ message: 'Book updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete book
exports.deleteBook = async (req, res) => {
    try {
        const [result] = await db.execute(
            'DELETE FROM books WHERE id = ?',
            [req.params.id]
        );
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }
        
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Search books
exports.searchBooks = async (req, res) => {
    try {
        const { query } = req.query;
        
        const [books] = await db.execute(
            'SELECT * FROM books WHERE title LIKE ? OR author LIKE ? OR category LIKE ?',
            [`%${query}%`, `%${query}%`, `%${query}%`]
        );
        
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};