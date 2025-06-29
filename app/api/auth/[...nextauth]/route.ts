import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/db"
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// const prisma = new PrismaClient() // This is now in lib/db.ts

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // Add providers here (e.g., Google, Email)
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.agencyId = user.agencyId;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.agencyId = token.agencyId;
      return session;
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST } 