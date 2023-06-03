const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    email: { type: String, unique: true },
    password: String,
  },
  {
    collection: "users",
  }
);

mongoose.model("users", UserDetailsScehma);