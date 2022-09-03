let MyMongoose = require("mongoose");

let UsersSchemaForQuestions = MyMongoose.Schema({
  Type: String,
  Anwer: Array,
  MainMessage: String,
  PumpType: String,
  PumpCategory: String,
  SubmittedBy: String,
  SubmittedTime: String,
  CurrentMMYYYY:String,
});

let GoodSchemaForQuestions = MyMongoose.model(
  "GoodSchemaForQuestions",
  UsersSchemaForQuestions
);
module.exports = GoodSchemaForQuestions;
