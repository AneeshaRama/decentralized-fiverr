import React from 'react'
import {UserAuthForm, GoogleSignInButton, Divider} from '@repo/ui/components'
import Link from 'next/link'

export default async function SignupPage() {
  return (
    <div className='flex items-center justify-center flex-col p-5 h-full'>
        <h1 className='text-primary dark:text-white text-xl font-semibold'>Sign up</h1>
        <UserAuthForm isSignUp={true}/>
        <div className='flex justify-start lg:w-[24rem] mt-4'>          
          <p className='text-sm text-muted-foreground'>Already have an account? <Link href={'/user/signin'}><span className='text-secondary font-semibold cursor-pointer'>Sign in</span></Link></p>
        </div>
        <Divider/>
        <GoogleSignInButton imagePath={'/google.png'}/>
    </div>
  )
}
