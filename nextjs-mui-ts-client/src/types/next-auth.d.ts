import NextAuth, { DefaultSession } from "next-auth"
import { JWT as DefaultJWT } from "next-auth/jwt"
import { IUser } from "./entities/user"

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT extends DefaultJWT {
        access_token: string
        refresh_token: string
        user: IUser
    }
}

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface User {
        access_token: string
        refresh_token: string
        user: IUser
    }

    interface Session {
        access_token: string
        refresh_token: string
        user: IUser & DefaultSession["user"]
    }
}