let MyMongoose = require("mongoose");

let FirePump = MyMongoose.Schema({
  FirePump: Array,
});

let FP = MyMongoose.model("QuestionsForFirePump", FirePump);
module.exports = FP;
