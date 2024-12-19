const express = require('express');
const router = express.Router();
const newsController = require('../controllers/news.controller');
const { verifyToken } = require('../middleware/auth.middleware');

// Public routes
router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);

// Protected routes (require authentication)
router.post('/', verifyToken, newsController.addNews);
router.put('/:id', verifyToken, newsController.updateNews);
router.delete('/:id', verifyToken, newsController.deleteNews);

module.exports = router;