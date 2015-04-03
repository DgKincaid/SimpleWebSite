/**
 * Created by DKINCAID on 4/3/2015.
 */
var path = require('path');

var rootPath = path.normalize(__dirname +'/../../');
module.exports = {
    development: {
        db: 'mongodb://127.0.0.1:27017/simplewebsite',
        rootPath: rootPath,
        prot: process.env.PORT || 8080
    },
    production: {
        db: 'mongodb://dkuser:simplewebsite@ds059661.mongolab.com:59661/simpledb',
        rootPath: rootPath,
        prot: process.env.PORT || 80
    }
};