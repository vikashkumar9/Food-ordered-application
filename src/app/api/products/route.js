import { NextResponse } from "next/server";
import { connectionstr } from "@/lib/db";
import mongoose from "mongoose";
import { Product } from "@/lib/model/products";

export async function GET(req, res) {
  await mongoose.connect(connectionstr);
  const result = await Product.find();
  return NextResponse.json({ result });
}

export async function POST(req, res) {
  const body = await req.json();

  const { name, price, image, description, category } = body;

  await mongoose.connect(connectionstr);
  const product = new Product({
    name,
    price,
    description,
    image,
    category,
    quantity: 1,
  });

  if (!name || !price || !description || !image || !category) {
    return NextResponse.json({
      message: "Data is not submitted Please fill all input-fields",
    });
  } else {
    const result = await product.save();

    return NextResponse.json(result);
  }
}
