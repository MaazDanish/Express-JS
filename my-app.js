const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//  My own files
const dirName = require('./path/path');
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






app.use((req,res,next)=> {
    res.status(404).sendFile(path.join(dirName,'views','404.html'));
})

app.listen(4001);