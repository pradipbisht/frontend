import { NextRequest } from "next/server";
import {
  getCurrentUser,
  updateUser,
} from "@/server/controllers/authController";

export async function GET(request: NextRequest) {
  return getCurrentUser(request);
}

export async function PUT(request: NextRequest) {
  return updateUser(request);
}
