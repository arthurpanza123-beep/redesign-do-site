import Link from 'next/link'
import { ArrowDown, Star } from 'lucide-react'
import { VideoBackground } from '@/components/video-background'

const stats = [
  { value: '+30', label: 'experiências' },
  { value: '+15 mil', label: 'clientes atendidos' },
  { value: '4,9', label: 'avaliação média' },
  { value: 'Desde 2018', label: 'na Região dos Lagos' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground" aria-label="Destaque">
      {/* Vídeo de fundo (YouTube, sem player visível, a partir dos 45s) */}
      <VideoBackground
        videoId="Kp8o6K2KPOk"
        start={45}
        className="absolute inset-0 overflow-hidden"
      />
      {/* Overlay para legibilidade do texto */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="flex max-w-2xl flex-col items-start">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ink-foreground/80 backdrop-blur-sm">
            <Star className="size-3.5 fill-sand text-sand" aria-hidden="true" />
            Búzios · Arraial do Cabo · Cabo Frio
          </p>

          <h1 className="animate-fade-up animation-delay-100 mt-6 font-heading text-4xl font-semibold leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
            Explore o <em className="italic text-sand">Caribe brasileiro</em> com quem conhece cada
            onda
          </h1>

          <p className="animate-fade-up animation-delay-200 mt-6 max-w-lg text-pretty text-base leading-relaxed text-ink-foreground/85">
            Passeios de barco, hospedagens selecionadas, lanchas privativas, aventuras e transfers.
            Reserve com atendimento humano do início ao fim da sua viagem.
          </p>

          <div className="animate-fade-up animation-delay-300 mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/passeios"
              className="inline-flex items-center rounded-full bg-sand px-7 py-3.5 text-sm font-semibold text-sand-foreground transition-all duration-200 hover:brightness-105 hover:shadow-lg"
            >
              Explorar passeios
            </Link>
            <a
              href="#experiencias"
              className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/30 bg-ink/30 px-7 py-3.5 text-sm font-medium text-ink-foreground/90 backdrop-blur-sm transition-colors hover:border-sand hover:text-sand"
            >
              Ver experiências
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>

          {/* Estatísticas */}
          <dl className="animate-fade-up animation-delay-500 mt-14 grid w-full grid-cols-2 gap-x-6 gap-y-5 border-t border-ink-foreground/15 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <dt className="order-2 text-xs text-ink-foreground/70">{s.label}</dt>
                <dd className="order-1 font-heading text-2xl font-semibold text-sand">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
