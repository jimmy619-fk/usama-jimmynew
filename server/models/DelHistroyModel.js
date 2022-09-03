let mongoose = require("mongoose");

let DeletingHistoryModel = mongoose.Schema({
  ProductName: String,
  ProductCategory: String,
  Quantity: Number,
  ProductId: String,
  AddingDate: String,
  ExpireDate: String,
  Mansefacture: String,
  Class: String,
  DeletingUser: String,
  DeletingTime: String,
});

let Deleting = mongoose.model("DeletingHistoryModel", DeletingHistoryModel);
module.exports = Deleting;
