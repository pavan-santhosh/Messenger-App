import NextAuth from "next-auth/next";
import { authOptions } from "@/lib/auth";

export default NextAuth(authOptions) // authOptions is going to be defined in the lib folder