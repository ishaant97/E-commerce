const { Users } = require("../../model/users");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email
    }
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24h" });
}



const createUser = async (req, res) => {
    try {
        const user = new Users(req.body);
        user.password = await bcrypt.hash(user.password, 10);
        await user.save();
        // console.log(user);
        res.status(200).json({ message: 'User Created successfully' });
    }
    catch (err) {
        res.status(400).json(err);
    }
}

const logIn = async (req, res) => {
    try {
        const user = req.body;
        const response = await Users.findOne({ email: user.email });
        if (response) {
            const isPasswordValid = bcrypt.compare(user.password, response.password);

            if (isPasswordValid) {
                const token = generateToken(user);
                res.cookie("token", token);
                res.status(200).json(token);
                // res.status(200).json({ message: "Authorized" });
            }
            else {
                res.status(200).json({ message: "Invaild Credentials" });
            }
        }
        else {
            res.status(400).json({ message: "Invalid Credentials" })
        }
    }
    catch (err) {
        res.status(400);
    }
}


module.exports = { createUser, logIn };