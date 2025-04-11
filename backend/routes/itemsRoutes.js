const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// Define routes
router.get('/', itemsController.getItems); //fetch all items
router.post('/', itemsController.makePackages); //create packages

module.exports = router;
