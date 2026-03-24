import { getAdminDb } from "./firebase-admin";

// ─── Types ──────────────────────────────────────────────
export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Collection Reference ───────────────────────────────
const USERS_COLLECTION = "users";

// ─── Create User Profile ────────────────────────────────
export async function createUserProfile(
  uid: string,
  data: {
    email: string;
    displayName: string;
    photoURL?: string;
  }
): Promise<UserProfile> {
  const now = new Date().toISOString();
  const profile: UserProfile = {
    uid,
    email: data.email,
    displayName: data.displayName,
    createdAt: now,
    updatedAt: now,
  };

  if (data.photoURL) {
    profile.photoURL = data.photoURL;
  }

  await getAdminDb().collection(USERS_COLLECTION).doc(uid).set(profile);
  return profile;
}

// ─── Get User Profile ───────────────────────────────────
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const doc = await getAdminDb().collection(USERS_COLLECTION).doc(uid).get();

  if (!doc.exists) return null;
  return doc.data() as UserProfile;
}

// ─── Update User Profile ────────────────────────────────
export async function updateUserProfile(
  uid: string,
  data: Partial<Omit<UserProfile, "uid" | "createdAt">>
): Promise<void> {
  await getAdminDb()
    .collection(USERS_COLLECTION)
    .doc(uid)
    .update({
      ...data,
      updatedAt: new Date().toISOString(),
    });
}

// ─── Delete User Profile ────────────────────────────────
export async function deleteUserProfile(uid: string): Promise<void> {
  await getAdminDb().collection(USERS_COLLECTION).doc(uid).delete();
}

// ─── Check if Profile Exists ────────────────────────────
export async function userProfileExists(uid: string): Promise<boolean> {
  const doc = await getAdminDb().collection(USERS_COLLECTION).doc(uid).get();
  return doc.exists;
}
