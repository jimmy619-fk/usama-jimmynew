let MyMongoose = require("mongoose");

let UsersSchema = MyMongoose.Schema({
  Name: String,
  Password: String,
  Address: String,
  PhoneNo: Number,
  Rank: String,
  Allow: Boolean,
  Role: String,
});

let Users = MyMongoose.model("Users", UsersSchema);
module.exports = Users;
