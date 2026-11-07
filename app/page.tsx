import { SoulFitnessHome } from '@/components/forge-home'
import { coaches, faqs, facilities, imageGallery, links, plans, programs, reviews, schedule, videoGallery } from '@/components/forge-home/data'

export default function Page() {
  return <SoulFitnessHome links={links} programs={programs} plans={plans} coaches={coaches} facilities={facilities} schedule={schedule} reviews={reviews} videoGallery={videoGallery} imageGallery={imageGallery} faqs={faqs} />
}
