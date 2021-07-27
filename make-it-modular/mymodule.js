
 module.exports=function mymodule(dir, filterStr,callback){
 const fs = require('fs')
 fs.readdir(dir,function(err, files) {
    if (err) {
       return callback(err);
    }
    files=files.filter( el => el.toString().includes("."+filterStr))
  
 
 callback(null, files);})
};

  
 
   
