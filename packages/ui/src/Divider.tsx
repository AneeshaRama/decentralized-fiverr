import React from 'react'

export const Divider = () => {
  return (
    <div className='flex items-center justify-center gap-x-2'>
        <div className='h-[1px] dark:bg-muted bg-gray-200 w-40 mt-5'/>
        <span className='text-muted-foreground mt-5'>or</span>
        <div className='h-[1px] dark:bg-muted bg-gray-200 w-40 mt-5'/>
    </div>
  )
}
