import React from 'react'

export const Devider = () => {
  return (
    <div className='flex items-center justify-center gap-x-2'>
        <div className='h-[1px] bg-gray-200 w-40 mt-5'/>
        <span className='text-muted-foreground mt-5'>or</span>
        <div className='h-[1px] bg-gray-200 w-40 mt-5'/>
    </div>
  )
}
