import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import data from "../data.js";
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";

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
  "/arrangetraining/:id",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
      viewTraining: { viewCurrentWorkout: req.body.viewTraining },
    });
    if (user) {
      res.send({
        viewTraining: user.viewTraining,
      });
      console.log(
        "userem jest :",
        user,
        "na pewno dziala?",
        "REQ  ",
        req.body,
        "    USER ",
        user.viewTraining,
        "dziala!"
      );
    }
  })
);
521840;
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
        number: 8,
        viewCurrentWorkout: [
          {
            id: null,
            exerciseName: "",
            exercise: [{ series: null, repetitions: "", weight: "" }],
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
                id: 9,
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
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  })
);
export default userRouter;
