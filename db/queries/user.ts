import { db } from "..";

export async function getUserByEmail(email: string) {
  try {
    return db.user.findUnique({ where: { email } });
  } catch {
    return null;
  }
}

export async function getUserById(id?: string) {
  if (!id) return null;
  try {
    return db.user.findUnique({ where: { id } });
  } catch {
    return null;
  }
}
