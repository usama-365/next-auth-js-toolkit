import NextAuth, { Session } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
import { JWT } from "@auth/core/jwt";

import authConfig from "./auth.config";
import { db } from "./db";
import { getUserById } from "@/db/queries/user";

declare module "next-auth" {
  interface User {
    role: UserRole;
  }
}

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  callbacks: {
    // async signIn({ user }) {
    //   const existingUser = await getUserById(user.id);
    //
    //   return !(!existingUser || !existingUser.emailVerified);
    // },
    async session({ token, session }: { token?: JWT; session: Session }) {
      if (!token) return session;

      if (token.sub && session.user) session.user.id = token.sub;

      if (token.role && session.user)
        session.user.role = token.role as UserRole;

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      // Forwarding the role
      token.role = existingUser.role;

      return token;
    },
  },
  // @ts-ignore
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
