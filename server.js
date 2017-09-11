"use strict";

var listeningPort = 8080;

var express = require('express');
var bodyParser = require('body-parser');
var server = express();

server.use(bodyParser.json());

server.use('/', express.static(__dirname + '/'));

var messages = [];

server.post('/message', function(req, res) {
    messages.push(req.body);
    res.send(200);
});

server.get('/messages', function(req, res) {
    res.send(messages);
});

server.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(listeningPort, '0.0.0.0', function() {
    console.log('Chat app listening on port ' + listeningPort + '!');
	console.log('Press Ctrl+C to quit.');
});
