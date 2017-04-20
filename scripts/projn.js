/*//Call Express 
var express = require('express');
//config = require('.server/configure'),
app = express();
//Connect
var connect = require('connect');
//Web socket io 
//var io = require('socket.io')(80);
//HTTP will be required
const http = require('http');
//We will be reading files
const fs = require('fs');
//Hostname
const hostname = '127.0.0.1';
//Location
const port= 3000;
fs.readFile('index.html', (err, html) => {
if(err){
throw err
}
});
//Create a server
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write("html");
    res.end(); 
});
server.listen(port, hostname, () => {
              console.log('Server started on port '+port)
              })
//console.log("Hello");
// Use code for chat box for email??*/