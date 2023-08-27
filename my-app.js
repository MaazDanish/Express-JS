const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/addProduct',(req,res,next) => {
    res.send('<form action="/product" method="POST"> <input type="text" name="title"><input type="text" name="size"><button type="submit">Add Product</button></form>');

})

app.use('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})

//  all routes shud be bfore thissss
app.use('/', (req,res,next) =>{
    res.send('<h1> HELLO FRIENDS FROM EXPRESS JS OF NODE JS');
})

app.listen(4000);
