import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappButton } from '@/components/whatsapp-button'
import { TourCard } from '@/components/tour-card'
import { Reveal } from '@/components/reveal'
import { categoryImages, categoryInfos, getCategoryBySlug, getToursByCategory } from '@/lib/tours'

export function generateStaticParams() {
  return categoryInfos.map((c) => ({ categoria: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params
  const cat = getCategoryBySlug(categoria)
  return {
    title: cat ? `${cat.name} — Búzios Trip Tour` : 'Búzios Trip Tour',
    description: cat?.description,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>
}) {
  const { categoria } = await params
  const cat = getCategoryBySlug(categoria)
  if (!cat) notFound()

  const items = getToursByCategory(cat.name)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Cabeçalho da categoria */}
        <section className="bg-ink text-ink-foreground">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:py-20">
            <div>
              <nav aria-label="Trilha de navegação" className="animate-fade-up">
                <ol className="flex items-center gap-1.5 text-xs text-ink-foreground/60">
                  <li>
                    <Link href="/" className="transition-colors hover:text-sand">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">
                    <ChevronRight className="size-3.5" />
                  </li>
                  <li className="font-medium text-sand">{cat.name}</li>
                </ol>
              </nav>

              <h1 className="animate-fade-up animation-delay-100 mt-5 font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl">
                {cat.headline}
              </h1>
              <p className="animate-fade-up animation-delay-200 mt-5 max-w-lg text-pretty text-base leading-relaxed text-ink-foreground/75">
                {cat.description}
              </p>
              <p className="animate-fade-up animation-delay-300 mt-6 inline-flex rounded-full border border-ink-foreground/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground/70">
                {items.length} {items.length === 1 ? 'opção disponível' : 'opções disponíveis'}
              </p>
            </div>

            <div className="animate-fade-up animation-delay-200 hidden lg:block">
              <img
                src={categoryImages[cat.slug] || "/placeholder.svg"}
                alt={cat.photoLabel}
                className="aspect-[16/10] w-full rounded-2xl object-cover shadow-2xl shadow-black/30 ring-1 ring-ink-foreground/15"
              />
            </div>
          </div>
        </section>

        {/* Lista */}
        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20" aria-label={cat.name}>
          {items.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((tour, i) => (
                <Reveal key={tour.id} delay={(i % 3) * 80}>
                  <TourCard tour={tour} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              Nenhuma opção cadastrada nesta categoria ainda.
            </p>
          )}
        </section>
      </main>

      <SiteFooter />
      <WhatsappButton />
    </div>
  )
}
