// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");

// export
const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiresIn: "30d",
    }
  );
};

module.exports = generateToken;

// "start": "concurrently \"npm run server\" \"npm run client\""
// "start": "node server.js"
//
