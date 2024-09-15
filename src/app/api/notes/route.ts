import { connectDB } from "@/src/api_lib/mongodb";
import Note from "@/src/api_lib/models/notes";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/src/api_lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.redirect("/login");
  }
  await connectDB();
  const todoList = await Note.find({ user: session.user.id });
  return NextResponse.json({ success: true, data: todoList });
}

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body, "body");
  await connectDB();
  const note = await Note.create(body);
  return NextResponse.json({ success: true, data: note });
}
