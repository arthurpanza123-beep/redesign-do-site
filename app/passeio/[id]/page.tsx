import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, Check, ChevronRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappButton } from '@/components/whatsapp-button'
import { TourGallery } from '@/components/tour-gallery'
import { FaqSection } from '@/components/faq-section'
import { BookingSidebar } from '@/components/booking-sidebar'
import { PackageSidebar } from '@/components/package-sidebar'
import { PhotoPlaceholder } from '@/components/photo-placeholder'
import { TourCard } from '@/components/tour-card'
import { Reveal } from '@/components/reveal'
import { getTour, getTourImage, tours, categoryInfos } from '@/lib/tours'

export function generateStaticParams() {
  return tours.map((t) => ({ id: t.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const tour = getTour(id)
  return {
    title: tour ? `${tour.title} — Búzios Trip Tour` : 'Búzios Trip Tour',
  }
}

const included = [
  'Transporte ida e volta',
  'Guia bilíngue credenciado',
  'Buscamos no local determinado pelo cliente',
  'Suporte via WhatsApp durante toda a experiência',
]

export default async function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const tour = getTour(id)
  if (!tour) notFound()

  const isHospedagem = tour.category === 'Hospedagens'
  const categorySlug = categoryInfos.find((c) => c.name === tour.category)?.slug ?? 'passeios'
  const related = tours.filter((t) => t.category === tour.category && t.id !== tour.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pb-8 pt-24 lg:pb-12 lg:pt-28">
        {/* Breadcrumb */}
        <nav aria-label="Trilha de navegação" className="animate-fade-up mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors hover:text-ocean-dark">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" />
            </li>
            <li>
              <Link href={`/${categorySlug}`} className="transition-colors hover:text-ocean-dark">
                {tour.category}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" />
            </li>
            <li className="font-medium text-foreground">{tour.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          <div className="animate-fade-up animation-delay-100">
            <TourGallery title={tour.title} imageSrc={getTourImage(tour.id)} />

            <ul className="mt-5 flex flex-wrap gap-2">
              {tour.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <h1 className="mt-5 font-heading text-3xl font-semibold text-balance text-foreground sm:text-4xl">
              {tour.title}
            </h1>

            <div className="mt-5 flex flex-col gap-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Antes de mais nada, venha desfrutar do{' '}
                <strong className="font-semibold text-foreground">{tour.title}</strong> pelas
                paisagens mais bonitas da Região dos Lagos!
              </p>
              <p>
                A Búzios Trip Tour oferece uma experiência completa, com atendimento personalizado
                do início ao fim. Nossos guias acompanham você em todo o percurso, garantindo
                segurança, conforto e momentos inesquecíveis com a família ou os amigos.
              </p>

              <div className="flex items-start gap-3 rounded-xl bg-secondary/70 p-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-ocean-dark" aria-hidden="true" />
                <p className="text-sm font-medium text-foreground">
                  Roteiro com paradas panorâmicas e tempo livre para aproveitar cada cenário.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  O que está incluído
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-ocean/15 text-ocean-dark">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                  <li className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-ocean/15 text-ocean-dark">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    {isHospedagem
                      ? 'Diária conforme pacote escolhido'
                      : 'Passeio conforme descrição do roteiro'}
                  </li>
                </ul>
              </div>

              <p className="rounded-xl border border-ocean/40 bg-ocean/10 p-4 text-sm font-medium text-foreground">
                Atenção: o roteiro pode ser alterado, transferido ou cancelado de acordo com as
                condições climáticas.
              </p>
            </div>

            <div className="mt-8">
              <PhotoPlaceholder
                label={`Vídeo ou foto vertical — ${tour.title}`}
                className="mx-auto aspect-[9/16] w-full max-w-xs rounded-2xl border-0 bg-secondary"
                iconClassName="size-10"
              />
            </div>

            <FaqSection />
          </div>

          <aside className="animate-fade-up animation-delay-200" aria-label="Reserva">
            <div className="lg:sticky lg:top-24">
              {isHospedagem ? <PackageSidebar /> : <BookingSidebar tour={tour} />}
            </div>
          </aside>
        </div>

        {/* Relacionados */}
        {related.length > 0 && (
          <section className="mt-16 border-t border-border pt-12" aria-label="Experiências relacionadas">
            <Reveal>
              <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                Você também pode <span className="text-ocean">gostar</span>
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t, i) => (
                <Reveal key={t.id} delay={i * 90}>
                  <TourCard tour={t} />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
      <WhatsappButton />
    </div>
  )
}
