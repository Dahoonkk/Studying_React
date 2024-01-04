import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id?: string; // user의 기존 session에 id를 추가해주는 방법
      role?: string;
    } & DefaultSession["user"];
  }
}
