import type { DefaultSession } from "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
    } & DefaultSession["user"];
  }
  interface Profile {
    username: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username: string;
  }
}
