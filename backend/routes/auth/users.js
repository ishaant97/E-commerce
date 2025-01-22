const express = require("express");
const { createUser, logIn, logOut, getUserProfile } = require("../../controller/users/users");
const UserRoutes = express.Router();
const authMiddleware = require("../../middleware/auth.middleware");


UserRoutes

    // User Registration
    .post("/signUp", createUser)

    // User Login
    .post("/logIn", logIn)

    // User Logout
    .get("/logOut", authMiddleware, logOut)

    // User Profile
    .get("/profile", authMiddleware, getUserProfile)

module.exports = { UserRoutes };