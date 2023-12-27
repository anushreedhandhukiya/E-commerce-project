const mongoose = require('mongoose');

const proSchema = new mongoose.Schema({
    image: String,
    title: String,
    price: Number,
    desc: String,
    category: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
})

const product = mongoose.model("Product", proSchema)
module.exports = product