"use server";

import bcrypt from "bcrypt";

import { db } from "@/db";
import { RegisterSchema, RegisterSchemaType } from "@/schemas";
import { getUserByEmail } from "@/db/queries/user";

const ROUNDS = 10;

export async function register(values: RegisterSchemaType) {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid fields" };

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, ROUNDS);

  const existingUser = await getUserByEmail(email);
  if (existingUser) return { error: "Email already in use" };

  await db.user.create({ data: { name, email, password: hashedPassword } });

  // TODO. Send verification token email

  return { success: "User created!" };
}
