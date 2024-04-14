import Link from "next/link"
import { cn } from "../lib/utils"
import {Courgette} from 'next/font/google'

const courgette = Courgette({weight:['400'], subsets: ['latin']})

export const AppLogo = () => {
  return (
    <Link href={'/'}>
            <h1 className={cn('text-2xl lg:text-3xl font-bold text-primary', courgette.className)}>Crypto<span className="text-secondary">Gig</span></h1>
    </Link>
  )
}
