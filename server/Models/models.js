const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, require: true ,},
    phonenumber: { type: String, require: true },
    email: { type: String, require: true },
    password: {type: String, require:true}
}, { timestamps: true });

const userss = mongoose.model('models', userSchema)
module.exports = userss