require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8001;

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/mydbs")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => console.log("mongo err"));

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("user", userSchema);

app.listen(PORT, (req, res) => {
  console.log("my server has started at port", PORT);
});

app.get("/", (req, res) => {
  console.log("homepage is good");

  res.send("my new homepa");
});

app.get("/about", (req, res) => {
  console.log("about section is good");

  res.send("about pge created");
});
