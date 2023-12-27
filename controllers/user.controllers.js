const user = require("../models/user.schema")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const signupage = (req, res) => {
    res.render("signup")
}

const signup = async (req, res) => {
    const { username, email, password, role } = req.body
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            let finddata = await user.findOne({ email })
            if (!finddata) {
                let data = await user.create({
                    username: username,
                    email: email,
                    password: hash,
                    role: role
                })
                let token = jwt.sign({ id: data._id, role: data.role }, "token")
                res.cookie("token", token).send(data)
            }
            else {
                res.send("already exits")
            }
        })
    }
    catch (error) {
        res.send({ error: "invalid data" })
    }
}

const loginpage = (req, res) => {
    res.render("login")
}

const login = async (req, res) => {
    const { email, password } = req.body;
    let data = await user.findOne({ email });
    if (data) {
        bcrypt.compare(password, data.password, (err, result) => {
            if (result) {
                let token = jwt.sign({ id: data._id, role: data.role }, "token");
                res.cookie("token", token).send({ msg: "user login successfully" });
            }
            else {
                res.send({ msg: "Password incorrect" });
            }
        });
    }
    else {
        res.send({ msg: "user not defined" });
    }
}

const logout = (req, res) => {
    res.clearCookie('token').send({ message: 'Logout successful' });
}

module.exports = { signupage, signup, loginpage, login, logout }