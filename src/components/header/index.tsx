import { FaBarsStaggered, FaFire } from 'react-icons/fa6'
import { Button } from '../ui/button'
import { MintlifyIcon } from '@/icons'

export default function Header() {
  return (
    <header className='flex items-center justify-between max-w-6xl px-5 md:px-10 h-24 mx-auto relative'>
      <MintlifyIcon />
      <nav className='hidden lg:flex gap-6 items-center [&_span]:text-primary-light [&_span]:text-sm'>
        <span>Documentation</span>
        <span>Pricing</span>
        <span>Blog</span>
        <span>Careers</span>
        <span>Preview</span>
        <span>Demo</span>
      </nav>

      <button className='lg:hidden inline-block'>
        <FaBarsStaggered className='h-5 w-5' />
      </button>

      <Button variant='outline' className='rounded-full px-10 lg:inline-flex hidden'>
        Get Started
      </Button>
    </header>
  )
}
