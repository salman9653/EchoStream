import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("session_token");

    return NextResponse.json({ message: "Logged out successfully." });
  } catch (error: unknown) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "An error occurred during logout." },
      { status: 500 }
    );
  }
}
