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
