import { NextResponse } from "next/server";
import { registerUser } from "@/lib/auth-service";
import { createUserProfile } from "@/lib/db-service";

export async function POST(request: Request) {
  try {
    const { email, password, displayName } = await request.json();

    // Validate input
    if (!email || !password || !displayName) {
      return NextResponse.json(
        { error: "Email, password, and display name are required." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters." },
        { status: 400 }
      );
    }

    // Create user in Firebase Auth
    const user = await registerUser(email, password, displayName);

    // Create user profile in Firestore
    const profile = await createUserProfile(user.uid, {
      email: user.email || email,
      displayName: user.displayName || displayName,
    });

    return NextResponse.json(
      {
        message: "Account created successfully.",
        user: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          profile,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    const firebaseError = error as { code?: string; message?: string };

    if (firebaseError.code === "auth/email-already-exists") {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    if (firebaseError.code === "auth/invalid-email") {
      return NextResponse.json(
        { error: "The email address is not valid." },
        { status: 400 }
      );
    }

    console.error("Registration error:", firebaseError.message);
    return NextResponse.json(
      { error: "An error occurred during registration. Please try again." },
      { status: 500 }
    );
  }
}
