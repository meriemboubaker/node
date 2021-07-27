const fs = require('fs')

// Synchronous read
var args = process.argv;
var data = fs.readFileSync(args[2]);
var array = data.toString().split("\n")

console.log(array.length-1)
