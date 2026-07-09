'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

const items = [
  {
    text: 'Contratamos a Búzios Trip Tour para um passeio em Arraial do Cabo, desde o início fomos bem atendidos, responderam prontamente via WhatsApp. O guia foi maravilhoso, super atencioso e animado, interagiu o tempo todo com o grupo e apresentou todo percurso do passeio.',
    author: 'Amanda Duarte',
    origin: 'Passeio em Arraial do Cabo',
  },
  {
    text: 'Experiência incrível do começo ao fim! Organização impecável, motorista pontual e o passeio de barco superou todas as expectativas. Voltaremos com certeza.',
    author: 'Rafael Meireles',
    origin: 'Passeio de barco em Búzios',
  },
  {
    text: 'Reservamos hospedagem e passeios com eles e foi tudo perfeito. Atendimento humano, preços justos e muita segurança. Recomendo de olhos fechados.',
    author: 'Juliana Prado',
    origin: 'Pacote hospedagem + passeios',
  },
]

export function Testimonials() {
  const [i, setI] = useState(0)
  const current = items[i]

  return (
    <section className="bg-background" aria-label="Depoimentos de clientes">
      <div className="mx-auto max-w-4xl px-4 py-16 lg:py-24">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean">
            Depoimentos
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-balance text-foreground sm:text-4xl">
            O que dizem <em className="italic text-ocean">nossos viajantes</em>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-10 text-center">
          <div className="flex justify-center gap-1" aria-label="Avaliação 5 estrelas">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} className="size-5 fill-sand text-sand" aria-hidden="true" />
            ))}
          </div>

          <blockquote
            key={i}
            className="animate-fade-up mx-auto mt-6 max-w-2xl font-heading text-xl leading-relaxed text-pretty text-foreground sm:text-2xl"
          >
            {'“'}
            {current.text}
            {'”'}
          </blockquote>

          <p className="mt-6 text-sm font-semibold text-foreground">{current.author}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
            {current.origin}
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
              className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-border transition-colors hover:bg-ink hover:text-ink-foreground"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex gap-2" aria-hidden="true">
              {items.map((_, d) => (
                <span
                  key={d}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300',
                    d === i ? 'w-6 bg-ocean' : 'w-2 bg-border',
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setI((v) => (v + 1) % items.length)}
              className="inline-flex size-11 items-center justify-center rounded-full ring-1 ring-border transition-colors hover:bg-ink hover:text-ink-foreground"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <p className="mt-10 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Certificados pelos principais órgãos reguladores · Cadastur · Booking.com · TripAdvisor
          </p>
        </Reveal>
      </div>
    </section>
  )
}
