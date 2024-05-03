import type { Session, User } from "next-auth"
import type {JWT} from 'next-auth/jwt'

type  UserId = string   //need to understand what is the difference between string and String because one change here will give error in auth.ts

declare module 'next-auth/jwt' {
    interface JWT {
        id: UserId
    }
}

declare module 'next-auth' {
    interface Session {
        user: User & {
            id: UserId
        }
    }
}