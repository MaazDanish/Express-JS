const path = require('path');

const dirName = require('../path/path');

exports.getShopPage =(req,res,next) =>{
    res.sendFile(path.join(dirName,'views','shop.html'));
}