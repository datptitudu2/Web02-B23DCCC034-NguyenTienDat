const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrow.controller');
const { verifyToken } = require('../middleware/auth.middleware');

// Borrow book
router.post('/borrow', verifyToken, borrowController.borrowBook);

// Return book
router.put('/return/:borrowId', verifyToken, borrowController.returnBook);

// Get borrow history
router.get('/history/:userId', verifyToken, borrowController.getBorrowHistory);

module.exports = router;