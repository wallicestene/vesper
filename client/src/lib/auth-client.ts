import { createAuthClient } from "better-auth/react";
const authClient = createAuthClient({
  /** The base URL of the server */
  baseURL: "http://localhost:3030",
});
export const { signIn, signUp, useSession } = authClient;
