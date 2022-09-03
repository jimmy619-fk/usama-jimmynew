let mongoose = require("mongoose");

let WithdrawHistoryModel = mongoose.Schema({
  ProductName: String,
  ProductCategory: String,
  Quantity: Number,
  ProductId: String,
  AddingDate: String,
  ExpireDate: String,
  Mansefacture: String,
  Class: String,
  PersonName: String,
  WithdrawUser: String,
  WithdrawTime: String,
  WithdrawQuantity: Number,
  WithDrawPurpose: String,
});

let Withdraw = mongoose.model("WithdrawHistoryModel", WithdrawHistoryModel);
module.exports = Withdraw;
