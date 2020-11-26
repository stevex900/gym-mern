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

// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1",
//   "build": "cd client && npm run build",
//   "install-client": "npm install --prefix client",
//   "heroku-postbuild": "cd client && npm install --only=dev && npm install && npm run build",
//   "predeploy": "npm run build",
//   "deploy": "gh-pages -d build",
//   "server": "nodemon server.js",
//   "client": "npm run start --prefix client",
//   "dev": "concurrently \"npm run server\" \"npm run client\"",
//   "start": "concurrently \"node server.js\" \"npm run start --prefix client\""
// },
