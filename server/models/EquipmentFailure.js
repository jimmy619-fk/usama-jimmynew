let MyMongoose = require("mongoose");

let EquipmentFailure = MyMongoose.Schema({
  Category: String,
  Name: String,
  PhoneNo: String,
  Email: String,
  Subject: String,
  Message: String,
  EquipmentNo: String,
  Date: String,
  Action: String,
});

let Failure = MyMongoose.model("EquipmentFailure", EquipmentFailure);
module.exports = Failure;
