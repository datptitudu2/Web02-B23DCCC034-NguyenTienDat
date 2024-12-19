const db = require('../config/db.config');

exports.getAllNews = async (req, res) => {
    try {
        const [news] = await db.execute('SELECT * FROM news ORDER BY createdAt DESC');
        res.json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getNewsById = async (req, res) => {
    try {
        const [news] = await db.execute(
            'SELECT * FROM news WHERE id = ?',
            [req.params.id]
        );

        if (news.length === 0) {
            return res.status(404).json({ message: 'News not found' });
        }

        res.json(news[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addNews = async (req, res) => {
    try {
        const { title, content, category, image } = req.body;

        const [result] = await db.execute(
            'INSERT INTO news (title, content, category, image) VALUES (?, ?, ?, ?)',
            [title, content, category, image]
        );

        res.status(201).json({
            message: 'News added successfully',
            newsId: result.insertId
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateNews = async (req, res) => {
    try {
        const { title, content, category, image } = req.body;

        const [result] = await db.execute(
            'UPDATE news SET title = ?, content = ?, category = ?, image = ? WHERE id = ?',
            [title, content, category, image, req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'News not found' });
        }

        res.json({ message: 'News updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteNews = async (req, res) => {
    try {
        const [result] = await db.execute(
            'DELETE FROM news WHERE id = ?',
            [req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'News not found' });
        }

        res.json({ message: 'News deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};