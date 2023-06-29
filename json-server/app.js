var JsonServer = require('json-server');
var path = require('path')
var fs = require('fs')

var Server = JsonServer.create();
var defaultMid = JsonServer.defaults({
    "noCors": false,
    "static": path.join(__dirname, "/static")
});

var router = JsonServer.router(path.join(__dirname, 'db', 'db.json'));

Server.use(defaultMid);
Server.use(router);
Server.listen(28071);
console.log('start 28071.....');