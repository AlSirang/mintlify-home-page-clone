import Image from 'next/image'

type FeaturesCardProps = {
  src: string
  heading: string
  text: string
}
const FeaturesCard = (props: FeaturesCardProps) => {
  const { src, heading, text } = props
  return (
    <div className='px-8 py-7 bg-[#07090E]'>
      <Image
        alt={heading}
        loading='lazy'
        width='40'
        height='40'
        decoding='async'
        className='block text-transparent'
        src={src}
      />

      <h1 className='mt-3 text-gray-200'>{heading}</h1>
      <h2 className='mt-2 leading-relaxed text-gray-500'>{text}</h2>
    </div>
  )
}

export default FeaturesCard
