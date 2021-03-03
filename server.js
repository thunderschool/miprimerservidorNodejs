// server.js
'use strict';
const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hola Mundo');
});

server.listen(8080);

let fs = require('fs');

let archivo = fs.readFileSync('archivo.txt', 'utf-8');
console.log(archivo);


fs.readFile('archivo.txt', 'utf-8', (err, data) => {
  if(err) {
    console.log('error: ', err);
  } else {
    console.log(data);
  }
});
console.log('Hola mundo ásincrono');



