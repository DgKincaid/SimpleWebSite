/**
 * Created by DKINCAID on 3/31/2015.
 */
var express = require('express');
var stylus = require('stylus');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var __dirname = 'C:/Users/DKINCAID/WebstormProjects/SimpleWebSite';

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/Server/views');
app.set('view engine', 'jade');
app.use(stylus.middleware(
    {
        src: __dirname + '/Public',
        compile: compile
    }
));

app.use(express.static(__dirname + '/Public'));

app.get('*', function(req, res){
    res.render('index');
});

var port = 8080;
app.listen(port);
console.log('Server listening on port: ' + port);