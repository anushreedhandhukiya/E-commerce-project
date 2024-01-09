const mongoose = require("mongoose")

const cateSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})

const myproducts = mongoose.model("myproduct",cateSchema)
module.exports = myproducts