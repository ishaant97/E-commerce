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
        const response = await Users.findOne({ email: user.email }).select("+password");
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

const logOut = async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "Logged Out" });
    }
    catch (err) {
        res.status(400).json(err);
    }
}

const getUserProfile = async (req, res) => {
    try {
        res.status(200).json(req.user);
    }
    catch (err) {
        res.status(400).json(err);
    }
}

const addToWishlist = async (req, res) => {
    try {
        const user = req.user;
        const asin = req.body.asin;

        if (!user.wishList.includes(asin)) {
            user.wishList.push(asin);
            await user.save();
            res.status(200).json({ message: "Product added to wishlist" });
        } else {
            res.status(400).json({ message: "Product already in wishlist" });
        }
    } catch (err) {
        res.status(400).json(err);
    }
}

const removeFromWishlist = async (req, res) => {
    try {
        const user = req.user;
        const asin = req.body.asin;

        user.wishList = user.wishList.filter(item => item !== asin);
        await user.save();
        res.status(200).json({ message: "Product removed from wishlist" });
    } catch (err) {
        res.status(400).json(err);
    }
}

module.exports = { createUser, logIn, logOut, getUserProfile, addToWishlist, removeFromWishlist };