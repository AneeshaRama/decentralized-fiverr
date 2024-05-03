import React from 'react'
import {UserAuthForm, GoogleSignInButton, Divider} from '@repo/ui/components'
import Link from 'next/link'

export default async function SigninPage() {
  return (
    <div className='flex items-center justify-center flex-col p-5 h-full'>
        <h1 className='text-primary dark:text-white text-xl font-semibold'>Sign In</h1>
        <UserAuthForm isSignUp={false}/>
        <div className='flex justify-start lg:w-[24rem] mt-4'>
          <p className='text-sm text-muted-foreground'>Do not have an account? <Link href={'/user/signup'}><span className='text-secondary font-semibold cursor-pointer'>Sign up</span></Link></p>
        </div>
        <Divider/>
        <GoogleSignInButton imagePath={'/google.png'}/>
    </div>
  )
}
