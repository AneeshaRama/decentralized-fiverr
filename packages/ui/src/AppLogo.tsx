import Link from "next/link"
import { cn } from "../lib/utils"
import {Courgette} from 'next/font/google'

const courgette = Courgette({weight:['400'], subsets: ['latin']})

export const AppLogo = ({isAuthPage}: {isAuthPage?: boolean}) => {
  return (
    <Link href={isAuthPage ? '' : '/' }>
            <h1 className={cn(`text-2xl font-bold text-primary`, courgette.className, isAuthPage? 'lg:text-5xl': 'lg:text-3xl')}>Crypto<span className="text-secondary">Gig</span></h1>
    </Link>
  )
}
