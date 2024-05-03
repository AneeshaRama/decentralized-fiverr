import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import db from '@repo/db/client'
import bcrypt from 'bcrypt';

export const NEXT_AUTH_CONFIG = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: 'email', type: 'text', placeholder: '' },
            password: { label: 'password', type: 'password', placeholder: '' },
          },
          async authorize(credentials: any) { 
            const user = await db.user.findFirst({
              where:{
                email: credentials.email
              }
            })
            if(user && credentials.isSignUp === "true"){
              throw new Error("This email address is already in use.")
            }
            if(!user && credentials.isSignUp === "false"){
              throw new Error("Invlid credentials")
            }
            if(!user){
              const hashedPassword = await bcrypt.hash(credentials.password, 12);
              await db.user.create({
                data:{
                  email: credentials.email,
                  username: credentials.email.split('@')[0] + (1000 + Math.floor(Math.random() * 9000)),
                  password: hashedPassword,
                  role: ['BUYER'],
                  provider: 'EMAIL'
                }
              })
            }else{
              let isMatch = await bcrypt.compare(credentials.password, user.password!)
              if(!isMatch){
                throw new Error("Invalid credentials")
              }
            }
              return {
                  id: user?.id!,
                  username: user?.username!,
                  email: user?.email!
              };
          },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
          })
    ],
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
      async signIn ({account, user}: any){
        if(account.provider === 'google'){
          const existingUser = await db.user.findFirst({
            where:{
              email: user.email
            }
          })
          if(!existingUser){
            let username: string = user.name.replace(/\s(?=\S)/g, '')
            await db.user.create({
              data:{
                email: user.email,
                username: username.toLocaleLowerCase() + (1000 + Math.floor(Math.random() * 9000)),
                role: ['BUYER'],
                provider: 'GOOGLE',
                avatar: user.image
              }
            })
          }
        }
        return true
      },
      session: async ({ session }: any) => {
        const existingUser = await db.user.findFirst({
          where: {
            email: session.user.email
          }
        })
        if(session.user){
          session.user.id = existingUser!.id!;
          session.user.role = existingUser!.role;
          session.user.username = existingUser!.username!;
        }
          return session
      },
    },
    pages:{
        signIn: '/user/signin',
        error: '/user/signin'
    }
  }