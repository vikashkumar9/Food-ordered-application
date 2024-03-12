import { NextResponse } from "next/server";
import { connectionstr } from "@/lib/db";
import mongoose from "mongoose";
import { Product } from "@/lib/model/products";

export async function GET(req, content) {
  const productId = content.params.id;

  await mongoose.connect(connectionstr);
  const result = await Product.findById({ _id: productId });

  return NextResponse.json({ result });
}
export async function PUT(req, content) {
  const productId = content.params.id;
  const body = await req.json();
  console.log(body);
  await mongoose.connect(connectionstr);
  const result = await Product.findByIdAndUpdate({ _id: productId }, body);

  return NextResponse.json(result);
}

export async function DELETE(req, content) {
  const productId = content.params.id;

  await mongoose.connect(connectionstr);
  const result = await Product.deleteOne({ _id: productId });

  return NextResponse.json({ result });
}
