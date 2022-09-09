const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        max: 50,
    },

    lname:{
        type: String,
        require: true,
        max: 50
    },

    username:{
        type: String,
        require: true,
        unique: true,
        max: 50
    },

    email: {
        type: String,
        unique: true,
        require: true
    },

    password: {
        type: String,
        unique: true,
        require: true
    },
},
{timestamps: true});

module.exports = mongoose.model("User", UserSchema);