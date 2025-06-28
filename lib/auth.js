import { hash } from "bcryptjs";

export async function hashPassword(password) {
  const encryptedPassword = await hash(password, 12);
  return encryptedPassword
}