const express = require('express')

const productController = require('../controller/contactus');
const route = express.Router();

// NOW WE CAN USE SAME PATH DIFRRENET METHOD
route.get('/contact_us',productController.getContactUsPage);

route.post('/contact_us',productController.postDataOfContactUsPage);

module.exports = route;