import { getServerSession } from 'next-auth';
import React from 'react'
import { NEXT_AUTH_CONFIG } from '../../../lib/auth';
import { redirect } from 'next/navigation';
import { SellerInfoForm } from '@repo/ui/components';

export default async function BecomeSellerPage() {
    const session = await getServerSession(NEXT_AUTH_CONFIG);
    if (!session?.user) {
        redirect("/user/signin");
      }
  return (
    <>
      <SellerInfoForm isProfilePage={false}/>
    </>
  )
}

