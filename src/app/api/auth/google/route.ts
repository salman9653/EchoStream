import { NextResponse } from "next/server";
import { verifyIdToken } from "@/lib/auth-service";
import { createUserProfile, getUserProfile, userProfileExists } from "@/lib/db-service";
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

    // Verify the Google sign-in token
    const user = await verifyIdToken(idToken);

    // Create Firestore profile if it doesn't exist (first-time Google sign-in)
    let profile = await getUserProfile(user.uid);

    if (!profile && !(await userProfileExists(user.uid))) {
      profile = await createUserProfile(user.uid, {
        email: user.email || "",
        displayName: user.displayName || "",
        photoURL: user.photoURL || undefined,
      });
    }

    // Set session cookie
    const cookieStore = await cookies();
    cookieStore.set("session_token", idToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 5,
      path: "/",
    });

    return NextResponse.json({
      message: "Signed in with Google successfully.",
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

    console.error("Google sign-in error:", firebaseError.message);
    return NextResponse.json(
      { error: "Google sign-in failed. Please try again." },
      { status: 401 }
    );
  }
}
