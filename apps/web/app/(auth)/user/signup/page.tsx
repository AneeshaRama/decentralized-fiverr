import React from 'react'
import {UserSignupForm, GoogleSignInButton, Devider} from '@repo/ui/components'

export default function SignupPage() {
  return (
    <div className='flex items-center justify-center flex-col p-5 h-full'>
        <h1 className='text-primary text-xl font-semibold'>Sign up</h1>
        <UserSignupForm/>
        <Devider/>
        <GoogleSignInButton imagePath={'/google.png'}/>
    </div>
  )
}
