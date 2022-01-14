const mongoose = require("mongoose");
const {Schema, model} = require("mongoose")

const cardScheme = new Schema({
    id: String,
    name: String,
    pic: String,
    types:Array,
    user_id: mongoose.ObjectId,
}, {versionKey: false})

module.exports = model("cards", cardScheme)