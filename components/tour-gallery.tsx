'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PhotoPlaceholder } from '@/components/photo-placeholder'

/**
 * Galeria do passeio. A primeira posição usa a foto principal (imageSrc);
 * as demais são espaços para você adicionar mais fotos do passeio.
 */
export function TourGallery({ title, imageSrc }: { title: string; imageSrc: string }) {
  const slots = Array.from({ length: 8 }, (_, i) => `${title} — foto ${i + 1}`)
  const [active, setActive] = useState(0)

  const go = (dir: number) => {
    setActive((prev) => (prev + dir + slots.length) % slots.length)
  }

  return (
    <div>
      <div className="relative overflow-hidden rounded-xl">
        {active === 0 ? (
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            className="aspect-[16/10] w-full rounded-xl object-cover"
          />
        ) : (
          <PhotoPlaceholder
            label={slots[active]}
            className="aspect-[16/10] w-full rounded-xl border-0 bg-secondary"
            iconClassName="size-10"
          />
        )}

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Foto anterior"
          className="absolute left-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-foreground shadow ring-1 ring-border transition-colors hover:bg-background"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Próxima foto"
          className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-background/80 text-foreground shadow ring-1 ring-border transition-colors hover:bg-background"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-8">
        {slots.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ver ${label}`}
            className={`overflow-hidden rounded-md ring-2 transition-all ${
              i === active ? 'ring-navy' : 'ring-transparent hover:ring-ocean/50'
            }`}
          >
            {i === 0 ? (
              <img
                src={imageSrc || "/placeholder.svg"}
                alt=""
                className="aspect-square w-full object-cover"
              />
            ) : (
              <PhotoPlaceholder
                label={`${i + 1}`}
                className="aspect-square w-full rounded-md border-0 bg-secondary"
                iconClassName="size-4"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
