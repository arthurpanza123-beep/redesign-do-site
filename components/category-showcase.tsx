import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PhotoPlaceholder } from '@/components/photo-placeholder'
import { Reveal } from '@/components/reveal'
import { categoryInfos, getToursByCategory } from '@/lib/tours'

export function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24" aria-label="Categorias">
      <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
            O que fazemos
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-balance text-foreground sm:text-4xl">
            Escolha a sua próxima <em className="italic text-ocean">experiência</em>
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Seis categorias de serviços para montar a viagem completa — do transfer à aventura.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categoryInfos.map((cat, i) => {
          const count = getToursByCategory(cat.name).length
          return (
            <Reveal key={cat.slug} delay={(i % 3) * 90}>
              <Link
                href={`/${cat.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10 hover:ring-ocean/40"
              >
                <div className="overflow-hidden">
                  <PhotoPlaceholder
                    label={cat.photoLabel}
                    className="aspect-[16/10] w-full rounded-none border-0 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-start justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {count} {count === 1 ? 'opção disponível' : 'opções disponíveis'}
                    </p>
                  </div>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-ocean group-hover:bg-ocean group-hover:text-ocean-foreground">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
