const express = require('express')

const productController = require('../controller/addProduct');

const route = express.Router();

// NOW WE CAN USE SAME PATH DIFRRENET METHOD
route.get('/addProduct',productController.getProductAddPage);
route.post('/addProduct',productController.postProductPage);

module.exports = route;