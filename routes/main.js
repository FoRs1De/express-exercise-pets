const { Router } = require('express');
const { home } = require('../controllers/homeController');
const app = Router();

app.route('/').get(home);

module.exports = app;
