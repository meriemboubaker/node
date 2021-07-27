const net = require('net')

function time (i) {
  if(i < 10 ){ return '0'+ i } else {return '' + i}
}

function now () {
  const date = new Date()
  return date.getFullYear() + '-' +
    time(date.getMonth() + 1) + '-' +
    time(date.getDate()) + ' ' +
    time(date.getHours()) + ':' +
    time(date.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))