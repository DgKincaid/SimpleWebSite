/**
 * Created by DKINCAID on 4/3/2015.
 */
var mongoose = require('mongoose');
var User = require('../models/User.js');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('Connected to DB');
    });

    User.find({}).exec(function (err, collection){
        if(collection.length === 0){
            console.log('Inserted Values');
            User.create({fName:'John', lName:'Doe',userName:'jdoe'});
            User.create({fName:'Jane', lName:'Doe',userName:'jdoe'});
        }else{
            //console.log('Collection Length: ' + collection.length === 0);
        }
    })
};