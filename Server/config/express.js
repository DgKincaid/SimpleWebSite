/**
 * Created by DKINCAID on 4/3/2015.
 */
var express = require('express');
var stylus = require('stylus');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = function(app, config) {
    function compile(str, path) {
        return stylus(str).set('filename', path);
    }

    app.set('views', config.rootPath + '/Server/views');
    app.set('view engine', 'jade');

    app.use(morgan('dev'));
    app.use(cookieParser());
    app.use(bodyParser());
    app.use(session({secret:'secret'}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/Public',
            compile: compile
        }
    ));

    app.use(express.static(config.rootPath + '/Public'));
};