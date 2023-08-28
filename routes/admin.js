const express = require('express')
const path = require('path');

const route = express.Router();

// NOW WE CAN USE SAME PATH DIFRRENET METHOD
route.get('/addProduct',(req,res,next) => {
    // res.send('<form action="/admin/addProduct" method="POST"> <input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>');
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
})

route.post('/addProduct',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = route;