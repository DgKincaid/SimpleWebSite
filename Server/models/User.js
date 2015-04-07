/**
 * Created by DKINCAID on 4/6/2015.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    userName: String
});

module.exports = mongoose.model('UserSchema', userSchema);