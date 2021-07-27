const http = require('http')
const args= process.argv
http.get(args[2],function(response){
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
  }).on('error', console.error)
