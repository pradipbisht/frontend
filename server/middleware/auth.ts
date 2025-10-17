import { NextRequest, NextResponse } from "next/server";
import { getTokenFromRequest, verifyToken } from "@/server/lib/auth/utils";

export interface AuthenticatedRequest extends NextRequest {
  user?: {
    userId: string;
    email: string;
    role: string;
  };
}

export function requireAuth(
  handler: (req: AuthenticatedRequest) => Promise<NextResponse>
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    try {
      // Get token from request
      const token = getTokenFromRequest(request);

      if (!token) {
        return NextResponse.json(
          { error: "Access token required" },
          { status: 401 }
        );
      }

      // Verify token
      let decoded;
      try {
        decoded = verifyToken(token);
      } catch (error) {
        return NextResponse.json(
          { error: "Invalid or expired token" },
          { status: 401 }
        );
      }

      // Add user info to request
      const authenticatedRequest = request as AuthenticatedRequest;
      authenticatedRequest.user = decoded;

      // Call the protected handler
      return await handler(authenticatedRequest);
    } catch (error) {
      console.error("Auth middleware error:", error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  };
}

export function requireAdmin(
  handler: (req: AuthenticatedRequest) => Promise<NextResponse>
) {
  return requireAuth(
    async (request: AuthenticatedRequest): Promise<NextResponse> => {
      if (request.user?.role !== "admin") {
        return NextResponse.json(
          { error: "Admin access required" },
          { status: 403 }
        );
      }

      return await handler(request);
    }
  );
}
