"use client"
import { Button } from './shadcn/ui/button'
import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  return (
    <Button onClick={()=>signOut()} className='text-secondary border-green-500 hover:bg-primary hover:text-white cursor-pointer font-semibold transition duration-300 ease-in-out' variant={'outline'}>Logout</Button>
  )
}
