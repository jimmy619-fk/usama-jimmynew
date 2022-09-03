let mongoose = require("mongoose");

let InventoryModel = mongoose.Schema({
  ProductName: String,
  ProductCategory: String,
  Quantity: Number,
  ProductId: String,
  AddingDate: String,
  ExpireDate: String,
  Mansefacture: String,
  Class: String,
  PersonName: String,
  Installed: String,
});

let Inventory = mongoose.model("InventoryModel", InventoryModel);
module.exports = Inventory;
