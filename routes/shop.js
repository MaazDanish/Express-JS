const express = require('express');

const route = express.Router();


route.get('/', (req,res,next) =>{
    res.send('<h1> HELLO FRIENDS FROM EXPRESS JS OF NODE JS');
})

module.exports = route;