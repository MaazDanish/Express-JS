const path = require('path');

const dirName = require('../path/path');

exports.getSuccessPage = (req,res,next) =>{
    res.sendFile(path.join(dirName,'views','success.html'));

    // setTimeout( () => {
    //     res.redirect('/');
    // },2000);
}