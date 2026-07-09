'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { tours, categories, type Category } from '@/lib/tours'
import { TourCard } from '@/components/tour-card'
import { Reveal } from '@/components/reveal'

type Filter = 'Todos' | Category

const filters: Filter[] = ['Todos', ...categories]

export function TourGrid() {
  const [active, setActive] = useState<Filter>('Todos')

  const visible = active === 'Todos' ? tours : tours.filter((t) => t.category === active)

  return (
    <section
      id="experiencias"
      className="border-t border-border bg-secondary/50"
      aria-label="Todas as experiências"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <Reveal className="flex flex-col items-start gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">Catálogo</p>
          <h2 className="font-heading text-3xl font-semibold text-balance text-foreground sm:text-4xl">
            Todas as <span className="text-ocean">experiências</span>
          </h2>
        </Reveal>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filtrar por categoria"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={cn(
                'rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-200',
                active === f
                  ? 'bg-ink text-ink-foreground shadow-md'
                  : 'bg-card text-muted-foreground ring-1 ring-border hover:text-foreground hover:ring-ocean/40',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'experiência encontrada' : 'experiências encontradas'}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((tour, i) => (
            <Reveal key={tour.id} delay={(i % 3) * 80}>
              <TourCard tour={tour} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
