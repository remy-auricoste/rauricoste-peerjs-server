var PeerServer = require('peer').PeerServer;

var port = process.env.PORT || 8001;
var server = PeerServer({port: port, path: '/myapp'});
console.log("started server on port", port);