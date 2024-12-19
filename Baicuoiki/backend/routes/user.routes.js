const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { verifyToken } = require('../middleware/auth.middleware');

// Get user profile
router.get('/profile', verifyToken, userController.getProfile);

// Update user profile
router.put('/profile', verifyToken, userController.updateProfile);

// Change password
router.put('/change-password', verifyToken, userController.changePassword);

// Admin routes
router.get('/all', verifyToken, userController.getAllUsers);
router.delete('/:id', verifyToken, userController.deleteUser);

module.exports = router;