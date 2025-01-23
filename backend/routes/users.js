const express = require("express");
const { createUser, logIn, logOut, getUserProfile, addToWishlist, removeFromWishlist } = require("../controller/users/users");
const UserRoutes = express.Router();
const authUser = require("../middleware/auth.middleware");


UserRoutes

    // User Registration
    .post("/signUp", createUser)

    // User Login
    .post("/logIn", logIn)

    // User Logout
    .get("/logOut", authUser, logOut)

    // User Profile
    .get("/profile", authUser, getUserProfile)

    // User addToWishList
    .post("/addToWishList", authUser, addToWishlist)

    // User removeFromWishList
    .post("/removeFromWishList", authUser, removeFromWishlist)

module.exports = { UserRoutes };