const express = require('express')

const route = express.Router();

// NOW WE CAN USE SAME PATH DIFRRENET METHOD
route.get('/addProduct',(req,res,next) => {
    res.send('<form action="/admin/product" method="POST"> <input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>');

})

route.post('/addProduct',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = route;