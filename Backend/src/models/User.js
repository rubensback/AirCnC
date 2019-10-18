const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: String
});


module.exports = mongoose.model('User', UserSchema); //User = nome da collection no BD, UserSchema = campos da collection