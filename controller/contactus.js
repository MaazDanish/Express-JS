const path = require('path');

const dirName = require('../path/path');


exports.getContactUsPage = (req,res,next) => {
    res.sendFile(path.join(dirName,'views','contactUS.html'));

}

exports.postDataOfContactUsPage = (req,res,next) => {
    console.log(req.body);
    if(req.body.name === '' || req.body.email === ''){
        res.send("All fields are Reuired");
    }
    res.redirect('/success');
}