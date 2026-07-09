import { notFound } from 'next/navigation'
import { MapPin } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappButton } from '@/components/whatsapp-button'
import { TourGallery } from '@/components/tour-gallery'
import { FaqSection } from '@/components/faq-section'
import { BookingSidebar } from '@/components/booking-sidebar'
import { PackageSidebar } from '@/components/package-sidebar'
import { PhotoPlaceholder } from '@/components/photo-placeholder'
import { getTour, tours } from '@/lib/tours'

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

export default async function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const tour = getTour(id)
  if (!tour) notFound()

  const isHospedagem = tour.category === 'Hospedagens'

  return (
    <>
      <SiteHeader />

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-[1fr_360px] lg:py-10">
        <div>
          <TourGallery title={tour.title} />

          <ul className="mt-4 flex flex-wrap gap-2">
            {tour.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-navy px-3 py-1 text-xs font-medium text-navy-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>

          <h1 className="mt-4 font-heading text-2xl font-extrabold uppercase text-foreground sm:text-3xl">
            {tour.title}
          </h1>

          <div className="mt-4 flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Antes de mais nada, venha desfrutar do{' '}
              <strong className="text-foreground">{tour.title}</strong> pelas paisagens mais bonitas
              da Região dos Lagos!
            </p>
            <p>
              A Búzios Trip Tour oferece uma experiência completa, com atendimento personalizado do
              início ao fim. Nossos guias acompanham você em todo o percurso, garantindo segurança,
              conforto e momentos inesquecíveis com a família ou os amigos.
            </p>

            <div className="flex items-start gap-2 text-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-navy" />
              <p className="font-medium">
                Roteiro com paradas panorâmicas e tempo livre para aproveitar cada cenário.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Incluí:</p>
              <ul className="mt-2 flex list-disc flex-col gap-1 pl-5">
                <li>Transporte ida e volta</li>
                <li>Guia bilíngue</li>
                <li>{isHospedagem ? 'Diária conforme pacote escolhido' : 'Passeio conforme descrição'}</li>
                <li>Buscamos no local determinado pelo cliente</li>
              </ul>
            </div>

            <p>
              ATENÇÃO! O roteiro pode ser alterado, transferido ou cancelado de acordo com as
              condições climáticas.
            </p>
          </div>

          <div className="mt-6">
            <PhotoPlaceholder
              label={`Vídeo ou foto vertical — ${tour.title}`}
              className="mx-auto aspect-[9/16] w-full max-w-xs rounded-xl border-0 bg-secondary"
              iconClassName="size-10"
            />
          </div>

          <FaqSection />
        </div>

        <div>{isHospedagem ? <PackageSidebar /> : <BookingSidebar tour={tour} />}</div>
      </main>

      <SiteFooter />
      <WhatsappButton />
    </>
  )
}
