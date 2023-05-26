import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  model: { type: String, required: true },
  imageSource: { type: String, required: true },
  bodyType: { type: String, required: true },
  wheelsDrive: { type: String, required: true },
  acceleration: { type: Number, required: true },
  //   Fuel: { type: Array, required: true },
  FuelEconomy: { type: Number, required: true },
  TopSpeed: { type: Number, required: true },
  Engine: { type: Number, required: true },
  PowerHP: { type: Number, required: true },
  Price: { type: Number, required: true },
  CountryOfManufacture: { type: String, required: true },
  isFavorite: { type: Boolean, required: true },
  isCompared: { type: Boolean, required: true },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
