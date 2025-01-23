const mongoose = require("mongoose");
const { Schema } = mongoose;

const validateEmail = function (email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
};

const usersSchema = new Schema({
    name: { type: String, required: [true, "Name required"] },
    lastName: { type: String },
    email: {
        type: String,
        required: [true, "Email required"],
        validate: [validateEmail, "Please enter a valid email"],
        unique: [true, "Email already exists"],
    },
    password: { type: String, required: [true, "Password required"], select: false },
    wishList: [{ type: String }],
    cart: [{ type: String }],
    orders: [{ type: String }],
});

const Users = mongoose.model("Users", usersSchema);

module.exports = { Users };