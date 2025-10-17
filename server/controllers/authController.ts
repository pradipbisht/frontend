import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/server/lib/db/connection";
import User from "@/server/models/User";
import {
  hashPassword,
  comparePassword,
  generateToken,
  getTokenFromRequest,
  verifyToken,
  isValidEmail,
  isValidPassword,
} from "@/server/lib/auth/utils";

export async function registerUser(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body (robust): try JSON first, then fallback to urlencoded form parsing.
    const contentType = request.headers.get?.("content-type") || "";
    const rawBody = await request.text();
    let parsedBody: any = {};
    try {
      parsedBody = rawBody ? JSON.parse(rawBody) : {};
    } catch (err) {
      // fallback for form-encoded bodies
      try {
        const params = new URLSearchParams(rawBody || "");
        parsedBody = Object.fromEntries(params.entries());
      } catch (e) {
        parsedBody = {};
      }
    }

    // Debug logging to help diagnose missing fields during development
    console.debug("[auth.register] content-type:", contentType);
    console.debug("[auth.register] rawBody:", rawBody);

    const { name, email, password, interests = [] } = parsedBody;

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    if (!isValidPassword(password)) {
      return NextResponse.json(
        {
          error:
            "Password must be at least 6 characters with 1 uppercase, 1 lowercase, and 1 number",
        },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const newUser = new User({
      name: name.trim(),
      email: email.toLowerCase(),
      password: hashedPassword,
      preferences: {
        interests: interests,
        newsletter: true,
      },
    });

    // Save user to database
    const savedUser = await newUser.save();

    // Generate JWT token
    const token = generateToken({
      userId: savedUser._id.toString(),
      email: savedUser.email,
      role: savedUser.role,
    });

    // Create response with user data (password excluded automatically by toJSON)
    const response = NextResponse.json(
      {
        message: "User registered successfully",
        user: savedUser,
      },
      { status: 201 }
    );

    // Set HTTP-only cookie with token
    // Set token as HTTP-only cookie (maxAge is in seconds)
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    });

    return response;
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function loginUser(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const { email, password } = await request.json();

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await User.findOne({
      email: email.toLowerCase(),
      isActive: true,
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Check password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Update last login (optional)
    user.updatedAt = new Date();
    await user.save();

    // Generate JWT token
    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    // Create response with user data (password excluded automatically by toJSON)
    const response = NextResponse.json(
      {
        message: "Login successful",
        user: user,
      },
      { status: 200 }
    );

    // Set HTTP-only cookie with token
    // Set token as HTTP-only cookie (maxAge is in seconds)
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function logoutUser(request: NextRequest) {
  try {
    // Create response
    const response = NextResponse.json(
      { message: "Logout successful" },
      { status: 200 }
    );

    // Clear the token cookie
    response.cookies.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0, // Expire immediately
    });

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function getCurrentUser(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

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

    // Find user
    const user = await User.findById(decoded.userId).select("-password");
    if (!user || !user.isActive) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        user: user,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get user error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function updateUser(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

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

    // Parse request body
    const updates = await request.json();

    // Remove sensitive fields from updates
    delete updates.password;
    delete updates.role;
    delete updates._id;
    delete updates.email; // Email changes should be handled separately

    // Find and update user
    const user = await User.findByIdAndUpdate(
      decoded.userId,
      { ...updates, updatedAt: new Date() },
      { new: true, runValidators: true }
    ).select("-password");

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        message: "Profile updated successfully",
        user: user,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update user error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
