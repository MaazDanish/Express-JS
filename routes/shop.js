const express = require('express');
const path = require('path');

const dirName = require('../path/path');


const route = express.Router();


route.get('/', (req,res,next) =>{
    // res.send('<h1> HELLO FRIENDS FROM EXPRESS JS OF NODE JS');
    // ../ --> will go upand down then check the files 
    res.sendFile(path.join(dirName,'views','shop.html'));
})

module.exports = route;