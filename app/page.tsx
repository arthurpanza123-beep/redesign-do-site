import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TourGrid } from '@/components/tour-grid'
import { Testimonials } from '@/components/testimonials'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TourGrid />
        <Testimonials />
      </main>
      <SiteFooter />
      <WhatsappButton />
    </div>
  )
}
