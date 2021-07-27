var http = require("http");
var fs = require("fs");
var url = require("url");
var server = http.createServer(function(req, res) {
    var date = new Date(url.parse(req.url, true).query.iso);
    res.writeHead(200, { 'Content-Type': 'application/json'});
    var output = (req.url.match(/parsetime/)) ? 
    {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    } :
    {
        unixtime: date.getTime()
    };
    res.end(JSON.stringify(output));
});
server.listen(process.argv[2]);