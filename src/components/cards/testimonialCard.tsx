import Image from 'next/image'

type TestimonialCardProps = {
  src: string
  author: string
  role: string
  description: string
}

export default function TestimonialCard(props: TestimonialCardProps) {
  const { src, author, role, description } = props
  return (
    <div className='rounded-xl border border-white/[0.07] p-5 text-left h-fit'>
      <div className='flex items-center gap-4'>
        <Image src={src} alt={`${author}`} height={50} width={50} className='rounded-full' />
        <div>
          <h2 className='text-sm font-medium'>{author}</h2>
          <p className='text-sm text-gray-500'>{role}</p>
        </div>
      </div>
      <div className='mt-5'>
        <p className='text-sm text-gray-500 leading-relaxed'>{description}</p>
      </div>
    </div>
  )
}
