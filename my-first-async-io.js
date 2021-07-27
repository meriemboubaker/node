var fs = require("fs");

// Asynchronous read
var args = process.argv;
fs.readFile(args[2], function (err, data) {
   if (err) {
      return console.error(err);
   }
   let array = data.toString().split("\n")

console.log(array.length-1)

});