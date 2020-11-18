import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/gym", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.use("/", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
