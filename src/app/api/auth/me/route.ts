import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyIdToken } from "@/lib/auth-service";
import { getUserProfile } from "@/lib/db-service";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session_token")?.value;

    if (!sessionToken) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    // Verify the session token
    const user = await verifyIdToken(sessionToken);
    const profile = await getUserProfile(user.uid);

    return NextResponse.json({
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        profile,
      },
    });
  } catch {
    // Token expired or invalid — clear cookie
    const cookieStore = await cookies();
    cookieStore.delete("session_token");

    return NextResponse.json({ user: null }, { status: 401 });
  }
}
