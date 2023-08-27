const express = require('express');


const app = express();

app.use((req,res,next) => {
    console.log('In the middle ware');    
    next(); // allows the request to continue to the next middle ware
})

app.use( (req,res,next) =>{
    console.log('in the next middle ware');
    // res.send('<h1> HELLO FRIENDS FROM EXPRESS JS OF NODE JS');
    res.send('<h1> HELLO FRIENDS FROM EXPRESS JS OF NODE JS');

})

app.listen(4000);
