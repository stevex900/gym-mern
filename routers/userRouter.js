const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const data = require("../data.js");
const User = require("../models/userModel.js");
const generateToken = require("../utils.js");

// import express from "express";
// import expressAsyncHandler from "express-async-handler";
// import bcrypt from "bcryptjs";
// import data from "../data.js";
// import User from "../models/userModel.js";
// import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createUsers = await User.insertMany(data.users);
    res.send({ createUsers });
  })
);

userRouter.put(
  "/viewtraining/:id",
  expressAsyncHandler(async (req, res) => {
    if (req.body.viewTraining) {
      const user = await User.findByIdAndUpdate(req.params.id, {
        viewTraining: { viewCurrentWorkout: req.body.viewTraining },
      });

      if (user) {
        res.send({
          viewTraining: user.viewTraining,
        });
      }
    } else if (req.body.historyTraining) {
      const data = await User.findById(req.params.id);
      const user = await User.findByIdAndUpdate(req.params.id, {
        historyTraining: {
          allTrainingsHistory: [
            ...data.historyTraining.allTrainingsHistory,
            ...req.body.historyTraining,
          ],
        },
      });

      if (user) {
        res.send({
          historyTraining: user.historyTraining,
        });
      }
    }
  })
);

userRouter.put(
  "/arrangetraining/:id",
  expressAsyncHandler(async (req, res) => {
    if (req.body.viewTraining) {
      const user = await User.findByIdAndUpdate(req.params.id, {
        viewTraining: { viewCurrentWorkout: req.body.viewTraining },
      });
      if (user) {
        res.send({
          viewTraining: user.viewTraining,
        });
      }
    }
    if (req.body.exercisesName) {
      if (req.body.exercisesName && req.body.name === "chest") {
        const data = await User.findById(req.params.id);
        const user = await User.findByIdAndUpdate(req.params.id, {
          exercisesName: {
            chest: [...data.exercisesName.chest, req.body.exercisesName],
            back: data.exercisesName.back,
            legs: data.exercisesName.legs,
            shoulders: data.exercisesName.shoulders,
            biceps: data.exercisesName.biceps,
            triceps: data.exercisesName.triceps,
            abdomen: data.exercisesName.abdomen,
            other: data.exercisesName.other,
          },
        });
        const updatedUser = await User.findById(req.params.id);
        console.log("co odsyla mi backend:     ", updatedUser.exercisesName);
      } else if (req.body.exercisesName && req.body.name === "back") {
        const data = await User.findById(req.params.id);
        const user = await User.findByIdAndUpdate(req.params.id, {
          exercisesName: {
            chest: data.exercisesName.chest,
            back: [...data.exercisesName.back, req.body.exercisesName],
            legs: data.exercisesName.legs,
            shoulders: data.exercisesName.shoulders,
            biceps: data.exercisesName.biceps,
            triceps: data.exercisesName.triceps,
            abdomen: data.exercisesName.abdomen,
            other: data.exercisesName.other,
          },
        });
      } else if (req.body.exercisesName && req.body.name === "legs") {
        const data = await User.findById(req.params.id);
        const user = await User.findByIdAndUpdate(req.params.id, {
          exercisesName: {
            chest: data.exercisesName.chest,
            back: data.exercisesName.back,
            legs: [...data.exercisesName.legs, req.body.exercisesName],
            shoulders: data.exercisesName.shoulders,
            biceps: data.exercisesName.biceps,
            triceps: data.exercisesName.triceps,
            abdomen: data.exercisesName.abdomen,
            other: data.exercisesName.other,
          },
        });
      } else if (req.body.exercisesName && req.body.name === "shoulders") {
        const data = await User.findById(req.params.id);
        const user = await User.findByIdAndUpdate(req.params.id, {
          exercisesName: {
            chest: data.exercisesName.chest,
            back: data.exercisesName.back,
            legs: data.exercisesName.legs,
            shoulders: [
              ...data.exercisesName.shoulders,
              req.body.exercisesName,
            ],
            biceps: data.exercisesName.biceps,
            triceps: data.exercisesName.triceps,
            abdomen: data.exercisesName.abdomen,
            other: data.exercisesName.other,
          },
        });
      } else if (req.body.exercisesName && req.body.name === "biceps") {
        const data = await User.findById(req.params.id);
        const user = await User.findByIdAndUpdate(req.params.id, {
          exercisesName: {
            chest: data.exercisesName.chest,
            back: data.exercisesName.back,
            legs: data.exercisesName.legs,
            shoulders: data.exercisesName.shoulders,
            biceps: [...data.exercisesName.biceps, req.body.exercisesName],
            triceps: data.exercisesName.triceps,
            abdomen: data.exercisesName.abdomen,
            other: data.exercisesName.other,
          },
        });
      } else if (req.body.exercisesName && req.body.name === "triceps") {
        const data = await User.findById(req.params.id);
        const user = await User.findByIdAndUpdate(req.params.id, {
          exercisesName: {
            chest: data.exercisesName.chest,
            back: data.exercisesName.back,
            legs: data.exercisesName.legs,
            shoulders: data.exercisesName.shoulders,
            biceps: data.exercisesName.biceps,
            triceps: [...data.exercisesName.triceps, req.body.exercisesName],
            abdomen: data.exercisesName.abdomen,
            other: data.exercisesName.other,
          },
        });
      } else if (req.body.exercisesName && req.body.name === "abdomen") {
        const data = await User.findById(req.params.id);
        const user = await User.findByIdAndUpdate(req.params.id, {
          exercisesName: {
            chest: data.exercisesName.chest,
            back: data.exercisesName.back,
            legs: data.exercisesName.legs,
            shoulders: data.exercisesName.shoulders,
            biceps: data.exercisesName.biceps,
            triceps: data.exercisesName.triceps,
            abdomen: [...data.exercisesName.abdomen, req.body.exercisesName],
            other: data.exercisesName.other,
          },
        });
      } else if (req.body.exercisesName && req.body.name === "other") {
        const data = await User.findById(req.params.id);
        const user = await User.findByIdAndUpdate(req.params.id, {
          exercisesName: {
            chest: data.exercisesName.chest,
            back: data.exercisesName.back,
            legs: data.exercisesName.legs,
            shoulders: data.exercisesName.shoulders,
            biceps: data.exercisesName.biceps,
            triceps: data.exercisesName.triceps,
            abdomen: data.exercisesName.abdomen,
            other: [...data.exercisesName.other, req.body.exercisesName],
          },
        });
      }
      const updatedData = await User.findById(req.params.id);
      console.log("na samym koncu odsylam     ", updatedData.exercisesName);
      res.send(updatedData.exercisesName);
    }
  })
);

// userRouter.put(
//   "/arrangetraining/:id",
//   expressAsyncHandler(async (req, res) => {
//     const data = await User.findById(req.params.id);
//     const user = await User.findByIdAndUpdate(req.params.id, {
//       exercisesName: [...data.exerciseName, ...req.body.exerciseName],
//     });
//     if (user) {
//       res.send({ exercisesName: user.exercisesName });
//     }
//   })
// );

userRouter.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          viewTraining: user.viewTraining,
          historyTraining: user.historyTraining,
          exercisesName: user.exercisesName,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);
userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      viewTraining: {
        number: null,
        viewCurrentWorkout: [
          {
            id: null,
            exerciseName: "",
            exercise: [{ series: 1, repetitions: "", weight: "" }],
          },
        ],
      },
      historyTraining: {
        number: 8,
        allTrainingsHistory: [
          {
            id: null,
            date: "",
            history: [
              {
                id: null,
                exerviseName: "",
                exercise: [
                  {
                    series: null,
                    repetitions: "",
                    weight: "",
                    myRepetitions: "",
                    myWeight: "",
                  },
                ],
              },
            ],
          },
        ],
      },
      exercisesName: {
        chest: [""],
        back: [""],
        legs: [""],
        shoulders: [""],
        biceps: [""],
        triceps: [""],
        abdomen: [""],
        other: [""],
      },
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      viewTraining: createdUser.viewTraining,
      historyTraining: createdUser.historyTraining,
      exercisesName: createdUser.exercisesName,
      token: generateToken(createdUser),
    });
  })
);
// export default userRouter;
module.exports = userRouter;
