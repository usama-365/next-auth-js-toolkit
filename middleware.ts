import NextAuth from "next-auth";

import authConfig from "./auth.config";
import {
  API_AUTH_PREFIX,
  AUTH_ROUTES,
  DEFAULT_LOGIN_REDIRECT,
  PUBLIC_ROUTES,
} from "./routes";
import paths from "./lib/paths";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const route = nextUrl.pathname;

  // Allow API auth routes that are used by nextAuth in any case
  const isAPIAuthRoute = route.startsWith(API_AUTH_PREFIX);
  if (isAPIAuthRoute) return null;

  // Allow access to auth routes to unauthenticated users, but for logged in users, redirect
  const isAuthRoute = AUTH_ROUTES.includes(route);
  if (isAuthRoute) {
    if (isLoggedIn)
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    else return null;
  }

  // Don't allow access to non public routes, to not authenticated users
  const isPublicRoute = PUBLIC_ROUTES.includes(route);
  if (!isPublicRoute && !isLoggedIn)
    return Response.redirect(new URL(paths.loginPage(), nextUrl));

  // You can allow to remaining users
  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
