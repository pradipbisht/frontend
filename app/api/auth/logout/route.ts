import { NextRequest } from "next/server";
import { logoutUser } from "@/server/controllers/authController";

export async function POST(request: NextRequest) {
  return logoutUser(request);
}
