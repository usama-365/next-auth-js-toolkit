import paths from "./lib/paths";

/**
 * These routes don't require authentication
 */
export const PUBLIC_ROUTES = [paths.homePage()];

/**
 * Logged in users on AUTH_ROUTES will be redirected here
 */
export const DEFAULT_LOGIN_REDIRECT = paths.settingsPage();

/**
 * These routes will redirect logged in users to DEFAULT_LOGIN_REDIRECT route
 */
export const AUTH_ROUTES = [paths.loginPage(), paths.registerPage()];

/**
 * These routes are used for API authenticate purposes
 */
export const API_AUTH_PREFIX = paths.authRoutesPrefix();
