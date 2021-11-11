const mongoose = require("mongoose")
const earphonesSchema = mongoose.Schema({
    brand: String,
    model: String,
    price: Number
})
module.exports = mongoose.model("Earphones", earphonesSchema)