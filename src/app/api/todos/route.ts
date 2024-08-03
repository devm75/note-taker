import { connectDB } from "@/src/api_lib/mongodb";
import Todo from "@/src/api_lib/models/todos";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const todos = await Todo.find({});
  return NextResponse.json({ success: true, data: todos });
}

export async function POST(req: Request) {
  const body = await req.json();
  await connectDB();
  const todo = await Todo.create(body);
  return NextResponse.json({ success: true, data: todo });
}
