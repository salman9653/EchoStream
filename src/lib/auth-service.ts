import { getAdminAuth } from "./firebase-admin";

// ─── Types ──────────────────────────────────────────────
export interface AuthUser {
  uid: string;
  email: string | undefined;
  displayName: string | undefined;
  photoURL: string | undefined;
  emailVerified: boolean;
}

// ─── Register ───────────────────────────────────────────
export async function registerUser(
  email: string,
  password: string,
  displayName: string
): Promise<AuthUser> {
  const userRecord = await getAdminAuth().createUser({
    email,
    password,
    displayName,
  });

  return {
    uid: userRecord.uid,
    email: userRecord.email,
    displayName: userRecord.displayName,
    photoURL: userRecord.photoURL,
    emailVerified: userRecord.emailVerified,
  };
}

// ─── Verify ID Token ────────────────────────────────────
export async function verifyIdToken(idToken: string): Promise<AuthUser> {
  const decoded = await getAdminAuth().verifyIdToken(idToken);
  const userRecord = await getAdminAuth().getUser(decoded.uid);

  return {
    uid: userRecord.uid,
    email: userRecord.email,
    displayName: userRecord.displayName,
    photoURL: userRecord.photoURL,
    emailVerified: userRecord.emailVerified,
  };
}

// ─── Get User by Email ──────────────────────────────────
export async function getUserByEmail(email: string): Promise<AuthUser | null> {
  try {
    const userRecord = await getAdminAuth().getUserByEmail(email);
    return {
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      photoURL: userRecord.photoURL,
      emailVerified: userRecord.emailVerified,
    };
  } catch {
    return null;
  }
}

// ─── Get User by UID ────────────────────────────────────
export async function getUserByUid(uid: string): Promise<AuthUser | null> {
  try {
    const userRecord = await getAdminAuth().getUser(uid);
    return {
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      photoURL: userRecord.photoURL,
      emailVerified: userRecord.emailVerified,
    };
  } catch {
    return null;
  }
}

// ─── Delete User ────────────────────────────────────────
export async function deleteUser(uid: string): Promise<void> {
  await getAdminAuth().deleteUser(uid);
}
