import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// If development mode, use this initialized client
// next time instead of creating new one on hot reload
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
