// Exclusive to Node.js
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile('src/main.html', function(err, data){
    if (err){
      res.writeHead(404, {"Content-Type": "text/html"});
      res.end("404 Not Found");
    }
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    res.end();
  });
}).listen(80);
