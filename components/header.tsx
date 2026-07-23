import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from '@/components/theme-toggle'

export default function Header() {
  
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-4">

        <Link href="/" className="inline-block">
          <Image
            src="/images/logos/dark.svg"
            alt="Logo Dark"
            width={30}
            height={30}
            className="block dark:hidden"
          />
          <Image
            src="/images/logos/light.svg"
            alt="Logo Light"
            width={30}
            height={30}
            className="hidden dark:block"
          />
        </Link>

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <a
              href="https://til.sameeramperera.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TIL
            </a>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}