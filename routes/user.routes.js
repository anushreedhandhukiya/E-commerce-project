const {Router} = require("express")
const { signupage, signup, loginpage, login, logout } = require("../controllers/user.controllers")

const userRoute = Router()

userRoute.get("/signup",signupage)
userRoute.post("/signup",signup)
userRoute.get("/login",loginpage)
userRoute.post("/login",login)
userRoute.get("/logout",logout)

module.exports =userRoute