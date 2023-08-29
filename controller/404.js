const path = require('path');

const dirName = require('../path/path');


exports.get404Page = (req,res,next)=> {
    res.status(404).sendFile(path.join(dirName,'views','404.html'));
}