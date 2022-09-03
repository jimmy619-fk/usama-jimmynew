let MyMongoose = require("mongoose");

let LoadingArmsQuestions = MyMongoose.Schema({
  LoadingArms: Array,
});

let loadingArmsQuestion = MyMongoose.model(
  "QuestionsForLoadingArms",
  LoadingArmsQuestions
);
module.exports = loadingArmsQuestion;
