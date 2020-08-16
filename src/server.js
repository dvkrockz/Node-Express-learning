const http = require("http");

// // 1. Creating a simple response and listening to incoming requests.
// http.createServer(function(req, res){
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('HEELO WORLD !!');
//     res.end();
// }).listen(3000);
// console.log('Listening to server on port 3000 without express');

// 2. Creating the simple response and listening to incoming requests using express
const express = require("express");
const app = express();
//const http = require("http");

const server = http.createServer(app);

app.get('/print', function(req, res){
    res.json("HELLO WORLD using express");
})
app.listen(3000, function(){
    console.log("Listening to server on port 3000 using express")
})