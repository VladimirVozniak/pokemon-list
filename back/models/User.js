const {Schema, model} = require("mongoose")

const userScheme = new Schema({
    username: String,
    password: String,
    googleId: String,
}, {versionKey: false})

module.exports = model("pokemonUsers", userScheme)