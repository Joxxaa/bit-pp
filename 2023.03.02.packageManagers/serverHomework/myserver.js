(figi) = require("./figletForServer.js")
const { figi } = require('./figletForServer.js');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(figi);
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});

//nisam uspeo da ga namolim da radi, ne znam gde grešim
//izbacuje stalno grešku: Uncaught ReferenceError ReferenceError: Cannot access 'figlet' before initialization