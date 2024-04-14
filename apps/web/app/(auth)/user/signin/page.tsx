import React from 'react'
import {UserAuthForm, GoogleSignInButton, Divider} from '@repo/ui/components'

export default function SigninPage() {
  return (
    <div className='flex items-center justify-center flex-col p-5 h-full'>
        <h1 className='text-primary text-xl font-semibold'>Sign In</h1>
        <UserAuthForm/>
        <Divider/>
        <GoogleSignInButton imagePath={'/google.png'}/>
    </div>
  )
}
