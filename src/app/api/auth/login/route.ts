import { NextResponse } from "next/server";
import { verifyIdToken } from "@/lib/auth-service";
import { getUserProfile } from "@/lib/db-service";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { idToken } = await request.json();

    if (!idToken) {
      return NextResponse.json(
        { error: "ID token is required." },
        { status: 400 }
      );
    }

    // Verify the Firebase ID token
    const user = await verifyIdToken(idToken);

    // Get user profile from Firestore
    const profile = await getUserProfile(user.uid);

    // Set session cookie (5 days)
    const cookieStore = await cookies();
    cookieStore.set("session_token", idToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 5, // 5 days
      path: "/",
    });

    return NextResponse.json({
      message: "Logged in successfully.",
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        profile,
      },
    });
  } catch (error: unknown) {
    const firebaseError = error as { code?: string; message?: string };

    console.error("Login error:", firebaseError.message);
    return NextResponse.json(
      { error: "Invalid credentials. Please try again." },
      { status: 401 }
    );
  }
}
