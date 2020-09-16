import express from "express";
import mongoose from "mongoose";
// import Video from "../src/Video.js";
import Data from "./data.js";
import Videos from "./dbModel.js";

// const express = require("express");
// const mongoose = require("mongoose");

// const Data = require("./data.js");
// const Videos = require("./dbModel.js");

// const video = require("../src/Video.js");

//App config
const app = express();
const port = process.env.PORT || 8001;

//Middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

//DB Config
const connection_url =
  "mongodb+srv://admin:GmP3VSzMPy7TXJV@cluster0.v3k9u.mongodb.net/<tiktok>?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//Api endpoints
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//Listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));
