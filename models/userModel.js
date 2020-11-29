// import mongoose from "mongoose";
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    viewTraining: { type: Object },
    historyTraining: { type: Object },
    exercisesName: {},
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

// export default User;
