import React from 'react'
import { AppLogo } from '../../../../packages/ui/src/AppLogo'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function AuthLayout({children}: {children: React.ReactNode}) {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/");
  }
  return (
    <div className='lg:grid grid-cols-12'>
        <div className='hidden col-span-6 lg:flex flex-col items-center justify-center md:min-h-[30rem]'>
            <AppLogo isAuthPage={true}/>
            <p className='text-xl text-muted-foreground italic mt-5'>Join the decentralized revolution in freelancing</p>
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
