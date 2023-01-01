const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    PhoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    Age: {
        type: Number,
        required: true,
        trim: true
    },
    Pincode: {
        type: Number,
        required: true,
        trim: true
    },
    AadharNo: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true})

module.exports = mongoose.model("user", userSchema)