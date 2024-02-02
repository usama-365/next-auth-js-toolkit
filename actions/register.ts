"use server";

import { RegisterSchema, RegisterSchemaType } from "@/schemas";

export async function register(values: RegisterSchemaType) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields) return { error: "Invalid fields" };

  return { success: "Email sent!" };
}
