const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const { UserRoutes } = require('./routes/users');
const cors = require("cors");
const cookieParser = require("cookie-parser");


const server = express();




// connection to database
mongoose
    .connect(
        process.env.MONOGODB_URI
        // "mongodb://127.0.0.1:27017/ecommerce"
    )
    .then(() => {
        console.log("Database connected...");
    })
    .catch((err) => {
        console.log("Error while connecting to DataBase");
    });


server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(cookieParser())

server.use('/users/', UserRoutes);



server.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})