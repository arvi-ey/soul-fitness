import dynamic from 'next/dynamic'
import { Header } from './forge-home/header'
import type { FAQItem, GalleryVideo, Review } from './forge-home/interactive'
import { Coach, Coaches, Facilities, Facility, GalleryImage, Gallery, Hero, Membership, Numbers, Philosophy, Plan, Program, Programs } from './forge-home/sections'
import { Schedule, ScheduleSession } from './forge-home/schedule'
import { Contact, Footer, TrainingVideo } from './forge-home/static-sections'

const VideoGallery = dynamic(() => import('./forge-home/interactive').then(module => module.VideoGallery), { ssr: true })
const Reviews = dynamic(() => import('./forge-home/interactive').then(module => module.Reviews), { ssr: true })
const FAQ = dynamic(() => import('./forge-home/interactive').then(module => module.FAQ), { ssr: true })

type SoulFitnessHomeProps = {
  links: string[]
  programs: Program[]
  plans: readonly Plan[]
  coaches: readonly Coach[]
  facilities: readonly Facility[]
  schedule: readonly ScheduleSession[]
  reviews: readonly Review[]
  videoGallery: readonly GalleryVideo[]
  imageGallery: readonly GalleryImage[]
  gymGallery: readonly GalleryImage[]
  faqs: readonly FAQItem[]
}

export function SoulFitnessHome({ links, programs, plans, coaches, facilities, schedule, reviews, videoGallery, imageGallery, gymGallery, faqs }: SoulFitnessHomeProps) {
  return <main className="overflow-hidden bg-[#0a0a0b] text-[#f4f4ef] selection:bg-[#c6ff00] selection:text-black">
    <Header links={links} />
    <Hero />
    <div className="hidden md:block"><VideoGallery videoGallery={videoGallery} /></div>
    <Programs programs={programs} />
    <Gallery images={gymGallery} eyebrow="03 / The gym setup" title={<>Built for<br /><span className="text-[#c6ff00]">your work.</span></>} />
    <Numbers />
    <Schedule schedule={schedule} />
    <Gallery images={imageGallery} />
    <Membership plans={plans} />
    <Coaches coaches={coaches} />
    <Reviews reviews={reviews} />
    <FAQ faqs={faqs} />
    <div className="hidden md:block"><TrainingVideo /></div>
    <Contact />
    <Footer />
  </main>
}
