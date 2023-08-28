const express = require('express')
const path = require('path');

const dirName = require('../path/path');

const route = express.Router();

// NOW WE CAN USE SAME PATH DIFRRENET METHOD
route.get('/contact_us',(req,res,next) => {
    res.sendFile(path.join(dirName,'views','contactUS.html'));

})

route.post('/contact_us',(req,res,next) => {
    console.log(req.body);
    if(req.body.name === '' || req.body.email === ''){
        res.send("All fields are Reuired");
    }
    res.redirect('/success');
})

module.exports = route;