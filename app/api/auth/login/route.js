import { NextResponse } from "next/server";
import { validateCredentials, createAuthToken } from "@/lib/auth";

// POST /api/auth/login - Login user
export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Validate credentials
    const result = validateCredentials(email, password);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 401 });
    }

    // Create auth token
    const token = createAuthToken(result.user);

    // Create response with cookie
    const response = NextResponse.json({
      success: true,
      user: result.user,
      message: "Login successful",
    });

    // Set cookie (expires in 7 days)
    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

