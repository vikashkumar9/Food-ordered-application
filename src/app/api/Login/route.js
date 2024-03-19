import { NextResponse } from "next/server";
import { loginstr } from "@/lib/db";
import mongoose from "mongoose";
import { Login } from "@/lib/model/products";

export async function GET(req, res) {
  await mongoose.connect(loginstr);
  const result = await Login.find();
  return NextResponse.json(result);
}

export async function POST(req, res) {
  const body = await req.json();

  const { username, email, password } = body;
  console.log(body);

  await mongoose.connect(loginstr);
  const login = new Login({
    username: username,
    email: email,
    password: password,
  });
  const result = await login.save();

  return NextResponse.json({ result, success: true });
}
