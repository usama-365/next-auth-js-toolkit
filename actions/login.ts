"use server";

import { LoginSchema, LoginSchemaType } from "@/schemas";

export async function login(values: LoginSchemaType) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields) return { error: "Invalid fields" };

  return { success: "Email sent!" };
}
