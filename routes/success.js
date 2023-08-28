const express = require('express');
const path = require('path');

const dirName = require('../path/path');


const route = express.Router();


route.get('/success', (req,res,next) =>{
    res.sendFile(path.join(dirName,'views','success.html'));
})

module.exports = route;