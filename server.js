/**
 * Created by DKINCAID on 3/31/2015.
 */
var express = require('express');
var stylus = require('stylus');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Message = require('C:/Users/DKINCAID/WebstormProjects/SimpleWebSite/Server/models/Message.js');

var __dirname = 'C:/Users/DKINCAID/WebstormProjects/SimpleWebSite';

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/Server/views');
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(bodyParser());
app.use(stylus.middleware(
    {
        src: __dirname + '/Public',
        compile: compile
    }
));

app.use(express.static(__dirname + '/Public'));

if(env === 'development') {
    mongoose.connect('mongodb://127.0.0.1:27017/simplewebsite');
}else {
    mongoose.connect('mongodb://dkuser:simplewebsite@ds059661.mongolab.com:59661/simpledb');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('Connected to DB');
});

var mongoMessage = '';
Message.findOne().exec(function(err, messageDoc){
    if(err)
        console.log(err);

    mongoMessage = messageDoc.message;
});

app.get('/partials/:partialPath', function(req, res){
    res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res){
    res.render('index', {
        mongoMessage: mongoMessage
    });
});

var port = process.env.PORT || 8080;

app.listen(port);
console.log('Server listening on port: ' + port);