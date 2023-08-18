const { Router } = require('express');
const { animals } = require('../controllers/animalsController');
const app = Router();

app.get('/:pet_type', animals);

module.exports = app;
