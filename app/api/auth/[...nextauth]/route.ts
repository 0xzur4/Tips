// app/api/auth/[...nextauth]/route.ts
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getDb } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const db = await getDb();
        const users = db.collection("users");
        const user = await users.findOne({ email: credentials.email });
        if (!user) return null;
        const ok = await bcrypt.compare(credentials.password, user.password);
        if (!ok) return null;

        // return minimal user object for session
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.username
        };
      }
    })
  ],
  session: { strategy: "jwt" as const },
  pages: { signIn: "/register" },
  callbacks: {
    // include username in JWT / session if you want
    async jwt({ token, user }) {
      if (user) {
        token.username = (user as any).name;
      }
      return token;
    },
    async session({ session, token }) {
      (session.user as any).username = (token as any).username;
      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
