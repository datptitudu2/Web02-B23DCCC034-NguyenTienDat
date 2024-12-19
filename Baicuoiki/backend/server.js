const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/books', require('./routes/book.routes'));
app.use('/api/services', require('./routes/service.routes'));
app.use('/api/borrow', require('./routes/borrow.routes'));
app.use('/api/news', require('./routes/news.routes'));
app.use('/api/users', require('./routes/user.routes')); // Thêm route users

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});