const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const productController = require('./controller/404');

const app = express();

//  My own files
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const contactRoute = require('./routes/contact')
const successRoute = require('./routes/success');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoute);
app.use(shopRoute);
app.use(contactRoute);
app.use(successRoute);


app.use(productController.get404Page);

app.listen(4001);