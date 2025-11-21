import { NextResponse } from "next/server";
import { getUserFromCookies } from "@/lib/auth";
import { cookies } from "next/headers";

// GET /api/auth/me - Get current user
export async function GET() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token");

  if (!authToken) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  const user = getUserFromCookies(`auth_token=${authToken.value}`);

  return NextResponse.json({ user }, { status: 200 });
}

