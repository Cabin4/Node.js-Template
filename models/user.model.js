const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    emailId: String,
    passwordHash: String,
    last_login: Date,
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

mongoose.model("User", userSchema);
module.exports = mongoose.model("User");
