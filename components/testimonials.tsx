'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const items = [
  {
    text: 'Contratamos a Búzios Trip Tour para um passeio em Arraial do Cabo, desde o início fomos bem atendidos, responderam prontamente via WhatsApp. O guia foi maravilhoso, super atencioso e animado, interagiu o tempo todo com o grupo e apresentou todo percurso do passeio. Recomendo!',
    author: 'Amanda Duarte',
  },
  {
    text: 'Experiência incrível do começo ao fim! Organização impecável, motorista pontual e o passeio de barco superou todas as expectativas. Voltaremos com certeza.',
    author: 'Rafael Meireles',
  },
  {
    text: 'Reservamos hospedagem e passeios com eles e foi tudo perfeito. Atendimento humano, preços justos e muita segurança. Recomendo de olhos fechados.',
    author: 'Juliana Prado',
  },
]

export function Testimonials() {
  const [i, setI] = useState(0)
  const current = items[i]

  return (
    <section className="bg-card py-14" aria-label="Depoimentos de clientes">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">
          O que os clientes dizem
        </h2>

        <div className="mt-8">
          <Quote className="mx-auto size-8 text-ocean" aria-hidden="true" />
          <div className="mt-2 flex justify-center gap-1" aria-label="Avaliação 5 estrelas">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} className="size-4 fill-ocean text-ocean" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="mt-4 text-pretty text-sm italic leading-relaxed text-muted-foreground sm:text-base">
            {current.text}
          </blockquote>
          <p className="mt-4 font-heading text-sm font-bold text-foreground">{current.author}</p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
            className="inline-flex size-9 items-center justify-center rounded-full text-ocean ring-1 ring-border transition-colors hover:bg-secondary"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex gap-2" aria-hidden="true">
            {items.map((_, d) => (
              <span
                key={d}
                className={cn(
                  'size-2 rounded-full transition-colors',
                  d === i ? 'bg-ocean' : 'bg-border',
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setI((v) => (v + 1) % items.length)}
            className="inline-flex size-9 items-center justify-center rounded-full text-ocean ring-1 ring-border transition-colors hover:bg-secondary"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <p className="mt-8 text-sm font-semibold text-foreground">
          Somos certificados pelos principais órgãos reguladores.
        </p>
      </div>
    </section>
  )
}
