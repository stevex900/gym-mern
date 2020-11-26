// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import userRouter from "./routers/userRouter.js";
// import path from "path";

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routers/userRouter.js");
const path = require("path");

dotenv.config();

const uri = process.env.ATLAS_URI;

const app = express();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client", "build")));
// }
app.use(express.static(path.join(__dirname, "client/build")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/gym", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.use("/", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});

//=================

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://stev:<password>@gymcluster.7egql.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
