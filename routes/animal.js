const { Router } = require('express');
const { animal } = require('../controllers/animalController');
const app = Router();

app.get('/:pet_type/:pet_id', animal);

module.exports = app;
