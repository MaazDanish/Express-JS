const express = require('express');

const productController = require('../controller/success');
const route = express.Router();


route.get('/success', productController.getSuccessPage);

module.exports = route;