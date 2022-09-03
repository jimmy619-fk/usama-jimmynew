let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  notificationDate: String,
  type: String,
  Showing: false,
  Name: String,
  User: String,
});

let notifierSkelton = mongoose.model("TimeOfAlert", userSchema);
module.exports = notifierSkelton;
