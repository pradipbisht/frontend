import { NextRequest } from "next/server";
import { registerUser } from "@/server/controllers/authController";

export async function POST(request: NextRequest) {
  return registerUser(request);
}
