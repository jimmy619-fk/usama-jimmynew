let MyMongoose = require("mongoose");

let Suggestion = MyMongoose.Schema({
  Category: String,
  Name: String,
  PhoneNo: String,
  Email: String,
  Subject: String,
  Message: String,
  Date: String,
});

let Sugges = MyMongoose.model("SuggestionModel", Suggestion);
module.exports = Sugges;
