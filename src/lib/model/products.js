// productModel.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  quantity: Number,
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

const loginSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

export const Login =
  mongoose.models.Login || mongoose.model("Login", loginSchema);
