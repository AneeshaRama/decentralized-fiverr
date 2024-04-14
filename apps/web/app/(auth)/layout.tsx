import React from 'react'
import { AppLogo } from '../../../../packages/ui/src/AppLogo'

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='lg:grid grid-cols-12'>
        <div className='hidden col-span-6 lg:flex flex-col items-center justify-center md:min-h-[30rem]'>
            <AppLogo isAuthPage={true}/>
            <p className='text-xl text-muted-foreground italic mt-5'>Sign up to join the decentralized revolution in freelancing</p>
        </div>
        <div className='hidden lg:block col-span-6 min-h-[40rem]'>
            {children}
        </div>
        <div className='lg:hidden'>
            {children}
        </div>
    </div>
  )
}
