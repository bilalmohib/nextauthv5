import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";

export const {
    auth,
    handlers: { GET, POST }
} = NextAuth({
    pages:{
        signIn:'/auth/login',
        newUser:'/auth/signup'
    },
    providers: [
        credentials({
            name: "User Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                const user = { id: "12", name: "bilal", password: "bilal" };
                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    secret: process.env.AUTH_SECRET
})