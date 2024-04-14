import { Button } from './shadcn/ui/button';
import { Gem, Menu, Search, UserCircle } from 'lucide-react';
import { 
    Sheet,
    SheetContent,
    SheetTrigger, 
} from './shadcn/ui/sheet';
import { AppLogo } from './AppLogo';
import { Input } from './shadcn/ui/input';
import Link from 'next/link';

interface AppBarProps{
    isSeller: string;
}

export const AppBar = () => {
  return (
    <div className='h-16 px-3 md:px-10 flex items-center justify-between py-10 shadow-sm'>
        <AppLogo/>
        <div className='flex'>
            <Input className='w-32 md:w-[25rem] xl:w-[35rem] rounded-full rounded-r' type='text' placeholder='What service are you looking for today?'/>
            <div className='bg-primary px-3 flex items-center justify-center rounded-l rounded-full cursor-pointer hover:bg-green-600'>
                <Search className='h-5 w-5 text-white'/>
            </div>
        </div>
        <div className='hidden lg:flex items-center justify-center gap-x-5 text-muted-foreground'>
            <div className='flex items-center justify-start gap-x-2'>
                <Gem className='h-5 w-5 text-secondary'/>
                <p className='hover:text-secondary cursor-pointer font-semibold transition duration-300 ease-in-out'>Become a seller</p>
            </div>
            <Link href={'/user/signin'}>
                <div className='flex items-center justify-start gap-x-2'>
                    <UserCircle className='h-5 w-5 text-secondary'/>
                    <p className='hover:text-secondary cursor-pointer font-semibold transition duration-300 ease-in-out'>Sign in</p>
                </div>
            </Link>            
            <Link href={'/user/signup'}>
                <Button className='text-secondary border-green-500 hover:bg-primary hover:text-white cursor-pointer font-semibold transition duration-300 ease-in-out' variant={'outline'}>Join</Button>
            </Link>
        </div>
        <Sheet>
            <SheetTrigger className='lg:hidden' asChild>
                <Menu className='text-secondary cursor-pointer'/>
            </SheetTrigger>
            <SheetContent className='flex flex-col items-start justify-start bg-[#f2f2f2] p-5'>
                <div className='text-primary flex items-center justify-start gap-x-2 mt-3'>
                    <Gem className='h-5 w-5 text-secondary'/>
                    <p className='font-semibold'>Become a seller</p>
                </div>
                <Link href={'/user/signin'}>
                    <div className='text-primary flex items-center justify-start gap-x-2'>
                        <UserCircle className='h-5 w-5 text-secondary'/>
                        <p className='font-semibold'>Sign in</p>
                    </div>
                </Link>
                <Link href={'/user/signup'}>
                    <Button className='text-secondary border-green-500 hover:bg-primary hover:text-white cursor-pointer font-semibold transition duration-300 ease-in-out w-40' variant={'outline'}>Join</Button>
                </Link>
            </SheetContent>
        </Sheet>
    </div>
  )
}
