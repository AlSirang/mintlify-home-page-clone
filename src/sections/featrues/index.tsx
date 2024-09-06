import { FeaturesCard } from '@/components/cards'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FaChevronRight, FaRocket } from 'react-icons/fa6'

export default function FeaturesSection() {
  return (
    <section className='px-6 md:px-0 mx-4 my-32 rounded-3xl border border-white/[0.07] bg-secondary-light/[0.02]'>
      <div className='relative overflow-hidden w-full before:absolute before:top-16 before:left-0 before:right-0 before:border-b before:border-white/[0.07]'>
        <div className='relative overflow-hidden pt-16 md:pt-28 w-full max-w-6xl mx-auto '>
          <div className='before:absolute before:top-0 before:bottom-0 before:left-16 before:border-l before:border-white/[0.07] after:absolute after:top-0 after:bottom-0 after:left-0 after:border-l after:border-white/[0.07]' />
          <div className='before:absolute before:top-0 before:bottom-0 before:right-0 before:border-l before:border-white/[0.07] after:absolute after:top-0 after:bottom-0 after:right-16 after:border-l after:border-white/[0.07]' />

          <div className='absolute left-1/2 top-0 z-0 mx-auto h-full w-full max-w-[58rem] -translate-x-1/2'>
            <div className='absolute left-0 right-0 top-72 w-full'>
              <Image
                alt='colors'
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
        <div className='max-w-6xl mx-auto border-x border-[#181A21]'>
          <div className='grid gap-px text-left bg-white/[0.07] md:grid-cols-3'>
            {[
              {
                src: '/assets/features/editor.svg',
                heading: 'Editing',
                text: 'Editing workflow built into where you work',
              },
              {
                src: '/assets/features/api-playground.svg',
                heading: 'API Playground',
                text: 'Interactive experience built around your APIs',
              },
              {
                src: '/assets/features/analytics.svg',
                heading: 'Documentation Analytics',
                text: 'Understand what users are viewing and where they are converting',
              },
              {
                src: '/assets/features/search.svg',
                heading: 'Search',
                text: 'Content is indexed on every update for lightning fast full-text search',
              },
              {
                src: '/assets/features/leads.svg',
                heading: 'Leads Generator',
                text: 'Identify sales prospects viewing your documentation',
              },
              {
                src: '/assets/features/preview-deployments.svg',
                heading: 'Preview Deployments',
                text: 'Review and share your changes before they go live',
              },
            ].map((card, idx) => (
              <FeaturesCard {...card} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
