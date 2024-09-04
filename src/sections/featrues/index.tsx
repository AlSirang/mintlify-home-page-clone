import FeaturesCard from './featuresCard'

export default function FeaturesSection() {
  return (
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
  )
}
