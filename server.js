/**
 * Created by DKINCAID on 3/31/2015.
 */
var express = require('express');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var Message = require('./Server/models/Message.js');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./Server/config/config')[env];

require('./Server/config/express')(app, config);
require('./Server/config/mongoose')(config);

passport.use(new localStrategy(
    function(username, password, done){
        User.findOne({userName:username}).exec(function(err, user){
            if(user){
                return done(null, user);
            }else {
                return done(null, false);
            }
        })
    }
));

passport.serializeUser(function(user, callback){
    if(user){
        callback(null, user._id);
    }
});

passport.deserializeUser(function(id, callback){
    User.findOne({_id:id}).exec(function(err, user) {
        if(user){
            return callback(null, user);
        }else{
            return callback(null, false);
        }
    })
});
require('./Server/config/routes')(app);

app.listen(config.port);
console.log('Server listening on port: ' + config.port);