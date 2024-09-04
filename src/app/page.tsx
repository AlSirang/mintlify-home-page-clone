import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { ChatIcon, CodeIcon, GuideIcon, SdkIcon } from '@/icons'
import FeaturesSection from '@/sections/featrues'
import TestimonialsSection from '@/sections/testimonials'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight, FaHeart, FaRocket } from 'react-icons/fa'

export default function Home() {
  return (
    <main>
      <section className='my-5 md:my-16 space-y-10'>
        <div className='max-w-screen-sm mx-auto w-full text-center'>
          <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold text-primary-light'>
            The documentation you want, effortlessly
          </h1>
          <p className='text-base font-medium mt-5 text-primary-light'>
            Meet the modern standards for public facing documentation. Beautiful out of the box,
            easy to maintain, and optimized for user engagement.
          </p>
        </div>
        <div className='flex gap-5 justify-center w-full'>
          <Button className='rounded-full' variant='secondary'>
            Get Started
          </Button>
          <Button className='rounded-full' variant='outline'>
            Documentation
          </Button>
        </div>
      </section>

      <section className='container mx-auto'>
        <div className='relative mx-auto mt-16 hidden w-fit space-x-4 rounded-full border border-secondary bg-secondary/10 py-1 px-1.5 sm:flex sm:space-x-1 gap-4'>
          {[
            {
              label: 'Guides',
              icon: <GuideIcon className='h-5 stroke-current' />,
            },
            {
              label: 'API Reference',
              icon: <CodeIcon className='h-5 stroke-current' />,
            },
            {
              label: 'SDK Docs',
              icon: <SdkIcon className='h-5 stroke-current' />,
            },
            {
              label: 'Chat',
              icon: <ChatIcon className='h-5 stroke-current' />,
            },
          ].map(({ icon, label }) => (
            <button
              key={label}
              className='first:bg-secondary first:rounded-[2rem_1rem_1rem_2rem] flex items-center justify-center space-x-2.5 px-2.5 py-1.5 text-primary-light transition-all hover:text-primary-light/70'>
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </div>
        <div className='mx-auto mt-5 max-w-6xl rounded-md p-2 bg-secondary-light/5 md:rounded-none'>
          <Image
            src='/hero/guides.png'
            alt='mindsdb'
            height={859}
            width={1367}
            className='rounded sm:rounded-lg'
          />
        </div>
      </section>

      <section className='py-16'>
        <div className='max-w-7xl mx-auto flex justify-center text-primary-light gap-2'>
          <h2 className='text-center text-primary-light'>
            Powering developer experiences from fast growing startups to enterprises.
          </h2>

          <div className='flex justify-center'>
            <Link href='#' className='flex items-center gap-3 group '>
              <span className='font-medium'>Learn More</span>
              <FaChevronRight className='relative group-hover:translate-x-2 transition-all' />
            </Link>
          </div>
        </div>

        <div className='max-w-7xl mx-auto'>
          <div className='mt-16 grid grid-cols-2 sm:grid-cols-7 gap-10'>
            {[
              { name: 'anthropic', src: '/logos/anthropic.svg' },
              { name: 'cursor', src: '/logos/cursor.svg' },
              { name: 'elevenlabs', src: '/logos/elevenlabs.svg' },
              { name: 'fidelity', src: '/logos/fidelity.svg' },
              { name: 'finch', src: '/logos/finch.svg' },
              { name: 'freepik', src: '/logos/freepik.svg' },
              { name: 'mindsdb', src: '/logos/mindsdb.svg' },
              { name: 'openphone', src: '/logos/openphone.svg' },
              { name: 'pinecone', src: '/logos/pinecone.svg' },
              { name: 'resend', src: '/logos/resend.svg' },
              { name: 'upstash', src: '/logos/upstash.svg' },
              { name: 'washingtonpost', src: '/logos/washingtonpost.svg' },
              { name: 'writer', src: '/logos/washingtonpost.svg' },
              { name: 'zapier', src: '/logos/zapier.svg' },
            ].map(({ name, src }) => (
              <div key={name} className='flex items-center justify-center'>
                <Image src={src} alt={name} height={50} width={70} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='my-32 px-6 md:px-0 mx-auto max-w-5xl text-center'>
        <div className='flex items-center justify-center gap-3'>
          <GuideIcon className='fill-white' />
          <h3>The modern standard</h3>
        </div>

        <div className='mt-6 text-center flex justify-center text-[1.7rem] leading-[1.3] text-gray-100 md:text-5xl md:leading-[1.15]'>
          <h2 className='max-w-xl'>Beautiful documentation that converts users</h2>
        </div>
        <p className='text-center mt-4'>A platform you can rely on to reach your audience</p>
      </section>

      <section className='px-6 md:px-0 mx-4 my-32 rounded-3xl border border-white/[0.07] bg-secondary-light/[0.02]'>
        <div className='relative overflow-hidden w-full before:absolute before:top-16 before:left-0 before:right-0 before:border-b before:border-white/[0.07]'>
          <div className='relative overflow-hidden pt-16 md:pt-28 w-full max-w-6xl mx-auto '>
            <div className='before:absolute before:top-0 before:bottom-0 before:left-16 before:border-l before:border-white/[0.07] after:absolute after:top-0 after:bottom-0 after:left-0 after:border-l after:border-white/[0.07]' />
            <div className='before:absolute before:top-0 before:bottom-0 before:right-0 before:border-l before:border-white/[0.07] after:absolute after:top-0 after:bottom-0 after:right-16 after:border-l after:border-white/[0.07]' />

            <div className='absolute left-1/2 top-0 z-0 mx-auto h-full w-full max-w-[58rem] -translate-x-1/2'>
              <div className='absolute left-0 right-0 top-72 w-full'>
                <Image
                  alt='Chat'
                  loading='lazy'
                  width='1000'
                  height='1000'
                  decoding='async'
                  data-nimg='1'
                  className='block animate-spin [animation-duration:5s] select-none blur-3xl'
                  src='/assets/features/color-wheel.svg'
                />
              </div>
            </div>
            <div
              className='absolute -bottom-24 left-12 right-12 top-96 blur-3xl'
              style={{
                background:
                  'conic-gradient(from 41deg at 50% 50%, rgba(4, 5, 10, 0.00) 0deg, #04050A 35.62500089406967deg, #04050A 238.12499284744263deg, rgba(4, 5, 10, 0.00) 283.0139493942261deg)',
              }}
            />

            <div className='max-w-5xl mx-auto w-full relative z-20'>
              <div className='px-6'>
                <div className='flex items-center justify-center gap-3'>
                  <FaRocket className='fill-white' />
                  <h3>Features</h3>
                </div>

                <h2 className='mt-6 text-center flex justify-center text-[1.7rem] leading-[1.3] text-gray-100 md:text-5xl md:leading-[1.15]'>
                  Documentation leveled up
                </h2>
                <p className='text-center mt-4'>Built for the modern business to engage users</p>
              </div>
              <div className='mx-auto mt-16 w-fit'>
                <Image src='/assets/chat-dark.png' height={380} width={852} alt='chat' />
              </div>
              <div className='mt-6 text-center flex justify-center text-xl leading-[1.3] text-gray-100 md:text-4xl md:leading-[1.15]'>
                <h2>AI Chat</h2>
              </div>

              <p className='mx-auto text-center w-80 mt-3 md:mt-5'>
                GPT-4 powered chat box for users to get direct answers to their questions
              </p>

              <div className='mx-auto my-6 pb-16 w-fit'>
                <Button className='rounded-full gap-3 px-6'>
                  <span>Get Started</span>
                  <FaChevronRight />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className='border-y border-white/[0.07] mb-16'>
          <FeaturesSection />
        </div>
      </section>

      <TestimonialsSection />
    </main>
  )
}
