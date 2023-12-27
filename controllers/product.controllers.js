const categories = require("../models/categories.schema");
const product = require("../models/product.schema")

const home = async (req, res) => {
    try {
        let data = await product.find();
        res.send(data);
    }
    catch (error) {
        res.status(404).send({ error: error.message });
    }
}

const productform = (req,res)=>{
    res.render("productform")
}

const productdata = async(req,res)=>{
    const {image,title,desc,price,category} = req.body
    try {
       let data = await product.create({image,title,desc,price,category})
       res.send(data)
    } 
    catch (error) {
        res.send({ error: "invalid data" })
    }
}

const addproduct = (req,res) =>{
    res.render("myproduct")
}

const adminproduct = async (req, res) => {
    let data = await product.find({ createdBy: req.user.id })
    res.send(data);
}

const cart = async (req, res) => {
    let userId = req.user.id;
    req.body.userId = userId;

    let data = await categories.create(req.body)
    console.log(data);
    res.send(data)
}
const cartdata = async (req, res) => {
    let data = await categories.find({ userId: req.user.id }).populate("productId")
    res.send(data)
}

module.exports = {productform,productdata,home,addproduct,adminproduct,cart,cartdata}