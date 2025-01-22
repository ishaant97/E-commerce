const { Users } = require("../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// import BlacklistTokenModel from "../models/blacklistToken.model.js";
// import captainModel from "../models/captain.model.js";

const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        console.log("No token provided");
        return res.status(401).json({ message: "Unauthorized 123" });
    }

    // const isBlackListed = await BlacklistTokenModel.findOne({ blackListedTokens: token });

    // if (isBlackListed) {
    //     return res.status(401).json({ message: "Unauthorized" });
    // }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log("Decoded token:", decoded);
        const user = await Users.findOne({ email: decoded.email }); // Find user by email

        if (!user) {
            console.log("User not found");
            return res.status(401).json({ message: "Unauthorized 423" });
        }

        req.user = user;
        return next();
    } catch (err) {
        console.log("Error verifying token:", err);
        return res.status(401).json({ message: "Unauthorized" });
    }
}

// export const authCaptain = async (req, res, next) => {
//     const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
//     if (!token) {
//         return res.status(401).json({ message: "Unauthorized" });
//     }

//     const isBlackListed = await BlacklistTokenModel.findOne({ blackListedTokens: token });

//     if (isBlackListed) {
//         return res.status(401).json({ message: "Unauthorized" });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const captain = await captainModel.findById(decoded._id);

//         req.captain = captain;

//         return next();

//     }
//     catch {
//         return res.status(401).json({ message: "Unauthorized" });
//     }
// }

module.exports = authUser;