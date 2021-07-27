var fs = require("fs");

var args = process.argv;
fs.readdir(args[2],function(err, files) {
   if (err) {
      return console.error(err);
   }
   files.filter( el => el.toString().includes("."+args[3])).map(elm=>console.log(elm))
   });
