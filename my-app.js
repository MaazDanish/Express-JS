const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//  My own files
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');


app.use(bodyParser.urlencoded({extended:false}));

//  if we use get and post in ruotes then order does not matter
app.use('/admin',adminRoute);
app.use('/shop',shopRoute);

app.use((req,res,next)=> {
    res.status(404).send('<h1> PAGE NOT FOUNT </h1>');
})

app.listen(4000);
