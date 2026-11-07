import { Header } from './forge-home/header'
import { FAQ, FAQItem, GalleryVideo, Review, Reviews, VideoGallery } from './forge-home/interactive'
import { Coach, Coaches, Facilities, Facility, GalleryImage, Gallery, Hero, Membership, Numbers, Philosophy, Plan, Program, Programs } from './forge-home/sections'
import { Schedule, ScheduleSession } from './forge-home/schedule'
import { Contact, Footer, TrainingVideo } from './forge-home/static-sections'

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
  faqs: readonly FAQItem[]
}

export function SoulFitnessHome({ links, programs, plans, coaches, facilities, schedule, reviews, videoGallery, imageGallery, faqs }: SoulFitnessHomeProps) {
  return <main className="overflow-hidden bg-[#0a0a0b] text-[#f4f4ef] selection:bg-[#c6ff00] selection:text-black">
    <Header links={links} />
    <Hero />
    <VideoGallery videoGallery={videoGallery} />
    <Programs programs={programs} />
    <Numbers />
    <Schedule schedule={schedule} />
    <Gallery images={imageGallery} />
    <Membership plans={plans} />
    <Coaches coaches={coaches} />
    <Reviews reviews={reviews} />
    <FAQ faqs={faqs} />
    <TrainingVideo />
    <Contact />
    <Footer />
  </main>
}
