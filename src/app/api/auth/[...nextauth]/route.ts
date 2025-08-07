import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import { db } from "@/lib/drizzleDbConnection";
import { usersTable } from "@/db/schema/schema";
import { eq } from "drizzle-orm";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        if (credentials) {
          const { email, password } = credentials
          const user = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1)
          const passwordCorrect = await compare(password, user[0].password)

          if (passwordCorrect) {
            return {
              id: `${user[0].id}`,
              email: user[0].email,
              firstName: user[0].firstName,
              lastName: user[0].lastName
            }
          }

        }

        // console.log(credentials)
        // Return null if user data could not be retrieved
        return null
      }
    })
  ]
})

export { handler as GET, handler as POST };