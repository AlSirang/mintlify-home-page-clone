import { splitArray } from '@/lib/utils'
import { TestimonialCard } from '@/components/cards'
import { testimonials } from './testimonials'
import { FaHeart } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export default function TestimonialsSection() {
  return (
    <section className='my-32  relative'>
      <div className='px-6 md:px-0 mx-auto max-w-5xl text-center relative'>
        <div className='flex justify-center items-center gap-3'>
          <FaHeart className='fill-white' />
          <h3>Wall of love</h3>
        </div>
        <h2 className='mt-6 text-center flex justify-center text-[1.7rem] leading-[1.3] text-gray-100 md:text-5xl md:leading-[1.15]'>
          Built to impress
        </h2>
        <div className='px-6 mt-16 md:flex md:space-x-3'>
          {splitArray(testimonials).map((cols, idx) => (
            <div key={idx} className='space-y-3 flex-1'>
              {cols.map((col, idx) => (
                <TestimonialCard {...col} key={idx} />
              ))}
            </div>
          ))}
        </div>
        <div className='absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-b from-transparent to-100% to-[#04060a]' />
        <div className='absolute left-1/2 -translate-x-1/2 bottom-2'>
          <Button className='rounded-full' variant='outline'>
            Show more
          </Button>
        </div>
      </div>
    </section>
  )
}
