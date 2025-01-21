const express = require("express");
const { createUser, logIn } = require("../../controller/users/users");
const UserRoutes = express.Router();


UserRoutes
    .post("/signUp", createUser)
    .get("/logIn", logIn)

module.exports = { UserRoutes };