
const process = require('process');

  
// Printing process.argv property value
var args = process.argv;
let s=0;
var sum=args.slice(2).map(elm=>s=s+Number(elm))
  
console.log(s)

