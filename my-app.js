const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//  My own files
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');


app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);



app.use((req,res,next)=> {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(4000);