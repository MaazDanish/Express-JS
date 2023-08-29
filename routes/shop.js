const express = require('express');

const productController = require('../controller/shop');
const route = express.Router();


route.get('/',productController.getShopPage);

module.exports = route;