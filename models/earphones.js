const mongoose = require("mongoose")
const earphonesSchema = mongoose.Schema({
    brand: String,
    model: {type:String,lenght:9},
    price: {type:Number,min:30,max:200}
})
module.exports = mongoose.model("Earphones",
    earphonesSchema)