const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/service.controller');
const { verifyToken } = require('../middleware/auth.middleware');

// Public routes
router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getServiceById);

// Protected routes
router.post('/', verifyToken, serviceController.addService);
router.put('/:id', verifyToken, serviceController.updateService);
router.delete('/:id', verifyToken, serviceController.deleteService);

module.exports = router;