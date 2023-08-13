import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from '@/utils/db'

export const authOptions = {
  
  adapter: MongoDBAdapter(clientPromise),
  session: {
    secret: process.env.SECRET,
    jwt: true,  
  },
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    })
  ],
  secret: process.env.SECRET,
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (user.admin){
        session.user.admin = user.admin
      }
      return session
    }
  }
}

export default NextAuth(authOptions)