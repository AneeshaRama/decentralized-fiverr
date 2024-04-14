import React from 'react'
import {UserAuthForm, GoogleSignInButton, Divider} from '@repo/ui/components'
import { useGetUser } from '@repo/ui/hooks';
import { redirect } from 'next/navigation';

export default async function SignupPage() {
  const session = await useGetUser();
  if (session?.user) {
    redirect("/");
  }
  return (
    <div className='flex items-center justify-center flex-col p-5 h-full'>
        <h1 className='text-primary text-xl font-semibold'>Sign up</h1>
        <UserAuthForm/>
        <Divider/>
        <GoogleSignInButton imagePath={'/google.png'}/>
    </div>
  )
}
