const express = require('express');
const cors = require('cors');
const app = express();
const itemsController = require('./controllers/itemsController'); // Add controller import

app.use(cors());
app.use(express.json());

app.get('/items', itemsController.getItems); // Use controller for GET
app.post('/items', itemsController.makePackages); // make packages

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});