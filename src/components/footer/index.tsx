import { MintlifyIcon } from '@/icons'
import { FaGithub, FaSlack, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <>
      <footer className='px-8 mt-36 mb-24 mx-auto max-w-4xl text-[14px]'>
        <div className='sm:flex space-y-8 sm:space-y-0'>
          <div className='flex-1 grid grid-cols-2 gap-8 sm:flex sm:flex-col'>
            <a href='/'>
              <MintlifyIcon />
            </a>
            <div className='flex flex-1 space-x-4 sm:items-end'>
              <span>
                <FaXTwitter className='h-5 w-5 fill-gray-500 hover:fill-gray-300 transition-all' />
              </span>
              <div className='w-px h-4 bg-white/10' />

              <span>
                <FaGithub className='h-5 w-5 fill-gray-500 hover:fill-gray-300 transition-all ' />
              </span>
              <div className='w-px h-4 bg-white/10' />

              <span>
                <FaSlack className='h-5 w-5 fill-gray-500 hover:fill-gray-300 transition-all' />
              </span>
            </div>
          </div>
          <div className='flex-1 grid grid-cols-2 gap-8'>
            <div>
              <label className='text-gray-800 dark:text-gray-300 text-sm'>Product</label>
              <ul className='mt-5 space-y-3.5'>
                {['Documentation', 'Pricing', 'Preview', 'Contact sales'].map((item, idx) => (
                  <li key={idx}>
                    <span className='text-gray-500 hover:text-gray-300'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label className='text-gray-800 dark:text-gray-300 text-sm'>Company</label>
              <ul className='mt-5 space-y-3.5'>
                {['Customers', 'Careers', 'Blog', 'Security'].map((item, idx) => (
                  <li key={idx}>
                    <span className='text-gray-500 hover:text-gray-300'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-16 pt-16 flex border-t border-white/5 itesm-center'>
          <div className='flex-1 text-center text-gray-500 text-sm'>
            &copy; {new Date().getFullYear()} Mintlify, Inc.
          </div>
        </div>
      </footer>
    </>
  )
}
