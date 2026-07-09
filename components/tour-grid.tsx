'use client'

import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'
import { tours, categories, type Category } from '@/lib/tours'
import { TourCard } from '@/components/tour-card'

type Filter = 'Todos' | Category

const filters: Filter[] = ['Todos', ...categories]

export function TourGrid() {
  const [active, setActive] = useState<Filter>('Todos')

  const visible = active === 'Todos' ? tours : tours.filter((t) => t.category === active)

  return (
    <section id="passeios" className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
      <div className="mb-6 flex items-center gap-2 text-foreground">
        <SlidersHorizontal className="size-5 text-ocean" aria-hidden="true" />
        <h2 className="font-heading text-lg font-bold">Filtrar</h2>
      </div>

      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por categoria">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              active === f
                ? 'bg-ocean text-ocean-foreground'
                : 'bg-card text-muted-foreground ring-1 ring-border hover:bg-secondary',
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  )
}
