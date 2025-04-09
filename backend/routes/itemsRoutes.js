const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// Define routes
router.get('/', itemsController.getItems);
router.post('/', itemsController.makePackages);

module.exports = router;
