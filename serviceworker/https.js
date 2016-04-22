var https = require('https');
var fs = require('fs');
var url = require("url");
var path = require("path");
var options = {
    pfx: fs.readFileSync('./keys/server.pfx'),
    passphrase: 'zhangyu'
};
//https.createServer(options,function(req,res){
//	console.log("req",req)
//	res.writeHead(200);
//	res.end('hello world2\n');
//}).listen(3000,'127.0.0.1');
var port = 3000;
var server = https.createServer(options, function (req, res) {
    console.log('creatServer')
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname;
    if (!pathname.indexOf('/favicon.ico')) {
        return;
    }
    var requestMessage = urlObj.query;
    console.log("request:", requestMessage);
    console.log("pathname:", pathname);
    var fullpathname = __dirname + url.parse(req.url).pathname;
    console.log("fullpathname:", fullpathname)
    fs.exists(fullpathname, function (exists) {
        if (exists) {
            switch (path.extname(pathname)) {
                case ".html":
                    res.writeHead(200, {"Content-Type": "text/html"});
                case '.js':
                    res.writeHead(200, {"Content-Type": "text/javascript"});
                    break;
                case ".css":
                    res.writeHead(200, {"Content-Type": "text/css"});
                    break;
                case ".gif":
                    res.writeHead(200, {"Content-Type": "image/git"});
                    break;
                case ".jpg":
                    res.writeHead(200, {"Content-Type": "image/jpeg"});
                    break;
                case ".png":
                    res.writeHead(200, {"Content-Type": "image/png"});
                    break;
                case ".json":
                    res.writeHead(200, {"Content-Type": "application/json"});
                    break;
                case ".fnt":
                    res.writeHead(200, {"Content-Type": "txt/plain"});
                    break;
                case ".mp3":
                    res.writeHead(200, {"Content-Type": "audio/mpeg"});
                    break;
                default:
                    res.writeHead(200, {"Content-Type": "application/octet-stream"});
                    break;
            }
            console.log("fullpathname",fullpathname)
            fs.readFile(fullpathname, function (err, data) {
                res.end(data);
            });
        }
        else {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end("<h1>404 Not Found</h1>");
        }
    })
});
//console.log("server",server)
server.listen(port, '127.0.0.1');
console.log('server on  https://127.0.0.1:' + port)


