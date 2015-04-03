/**
 * Created by DKINCAID on 3/31/2015.
 */
var express = require('express');
var mongoose = require('mongoose');
var Message = require('./Server/models/Message.js');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./Server/config/config')[env];

require('./Server/config/express')(app, config);

mongoose.connect(config.db);



app.get('/partials/:partialPath', function(req, res){
    res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res){
    res.render('index');
});

var port = process.env.PORT || 8080;

app.listen(config.port);
console.log('Server listening on port: ' + config.port);