const path = require('path');
const dirName = require('../path/path');

exports.getProductAddPage = (req,res,next) => {
    res.sendFile(path.join(dirName,'views','add-product.html'));
}

exports.postProductPage = (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
}