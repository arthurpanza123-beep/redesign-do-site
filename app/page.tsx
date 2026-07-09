import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { CategoryShowcase } from '@/components/category-showcase'
import { TourGrid } from '@/components/tour-grid'
import { WhyUs } from '@/components/why-us'
import { Testimonials } from '@/components/testimonials'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <CategoryShowcase />
        <TourGrid />
        <WhyUs />
        <Testimonials />
      </main>
      <SiteFooter />
      <WhatsappButton />
    </div>
  )
}
