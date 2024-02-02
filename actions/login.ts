"use server";

import { LoginSchema, LoginSchemaType } from "@/schemas";

export async function login(values: LoginSchemaType) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields" };

  return { success: "Email sent!" };
}
