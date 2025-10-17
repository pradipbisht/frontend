import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/server/lib/db/connection";
import User from "@/server/models/User";
import { hashPassword } from "@/server/lib/auth/utils";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const user = await User.findById(params.id).select("-password");
    if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json();
    await connectDB();
    const updates: any = { ...body };
    if (updates.password) {
      updates.password = await hashPassword(updates.password);
    }
    const user = await User.findByIdAndUpdate(params.id, updates, { new: true }).select("-password");
    if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const user = await User.findByIdAndDelete(params.id).select("-password");
    if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ user });
  } catch (err) {
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}
