const express = require('express');
const cookies = require("cookie-parser")
const connected = require('./config/db');
const userRoute = require('./routes/user.routes');
const productRoute = require('./routes/product.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookies())
app.use("/user",userRoute)
app.use("/product",productRoute)

app.set("view engine", "ejs")
app.set("views",__dirname + "/views")
app.use(express.static(__dirname + "/public"))

app.get("/",(req,res)=>{
    res.render("home")
})


app.listen(8090,()=>{
    console.log("listening on port 8090");
    connected()
})