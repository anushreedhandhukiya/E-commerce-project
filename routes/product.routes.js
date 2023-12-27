const {Router} = require("express")
const { productform, productdata, home, addproduct, adminproduct, cart, cartdata } = require("../controllers/product.controllers")
const { isAdmin, verifyToken } = require("../middleware/auth")

const productRoute = Router()

productRoute.get("/",home)
productRoute.get("/products",isAdmin,productform)
productRoute.post("/products",isAdmin,productdata)
productRoute.get("/addproduct",addproduct)
productRoute.get("/adminProduct",isAdmin,adminproduct)
productRoute.post("/addproduct",verifyToken,cart)
productRoute.get("/cartdata",verifyToken,cartdata)

module.exports = productRoute