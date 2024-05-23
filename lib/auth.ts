
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import { env } from "./env";

// import NextAuth from "next-auth";
import { getServerSession } from "next-auth";
import { prisma } from "./prisma";


export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
};

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
}


// export const { auth, handlers } = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GithubProvider({
//       clientId: env.AUTH_GITHUB_ID,
//       clientSecret: env.AUTH_GITHUB_SECRET,
//     }),
//     // ...add more providers here
//   ],

// }); 