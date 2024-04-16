"use client"
import { signIn } from 'next-auth/react'
import { Button } from './shadcn/ui/button'
import Image from 'next/image'

export const GoogleSignInButton = ({imagePath}: {imagePath: string}) => {
  return (
    <div className='mt-3'>
        <Button onClick={async() => await signIn("google")} className='lg:w-[24rem]' variant={'outline'}>
            <div className='flex items-center justify-center gap-x-2'>
                <Image src={imagePath} alt='google logo' height={25} width={25}/>
                <p className='text-primary dark:text-white'>Sign in with Google</p>
            </div>
        </Button>
    </div>
  )
}
