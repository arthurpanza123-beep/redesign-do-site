import Link from 'next/link'
import { ArrowDown, Star } from 'lucide-react'
import { PhotoPlaceholder } from '@/components/photo-placeholder'

const stats = [
  { value: '+30', label: 'experiências' },
  { value: '+15 mil', label: 'clientes atendidos' },
  { value: '4,9', label: 'avaliação média' },
  { value: 'Desde 2018', label: 'na Região dos Lagos' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground" aria-label="Destaque">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-14 pt-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:px-8 lg:pb-24 lg:pt-20">
        {/* Texto */}
        <div className="flex flex-col items-start">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-ink-foreground/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ink-foreground/70">
            <Star className="size-3.5 fill-sand text-sand" aria-hidden="true" />
            Búzios · Arraial do Cabo · Cabo Frio
          </p>

          <h1 className="animate-fade-up animation-delay-100 mt-6 font-heading text-4xl font-semibold leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
            Explore o <em className="italic text-sand">Caribe brasileiro</em> com quem conhece cada
            onda
          </h1>

          <p className="animate-fade-up animation-delay-200 mt-6 max-w-lg text-pretty text-base leading-relaxed text-ink-foreground/75">
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
              className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-7 py-3.5 text-sm font-medium text-ink-foreground/85 transition-colors hover:border-sand hover:text-sand"
            >
              Ver experiências
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>

          {/* Estatísticas */}
          <dl className="animate-fade-up animation-delay-500 mt-12 grid w-full grid-cols-2 gap-x-6 gap-y-5 border-t border-ink-foreground/10 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <dt className="order-2 text-xs text-ink-foreground/60">{s.label}</dt>
                <dd className="order-1 font-heading text-2xl font-semibold text-sand">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Composição de fotos */}
        <div className="animate-fade-up animation-delay-200 relative hidden lg:block">
          <PhotoPlaceholder
            label="Foto principal do hero — mar de Búzios / lancha (vertical 3:4)"
            className="aspect-[3/4] w-full max-w-md rounded-2xl border-ink-foreground/25 bg-ink-soft text-ink-foreground/60"
            iconClassName="size-10 text-sand"
          />
          <PhotoPlaceholder
            label="Foto secundária — praia / pôr do sol (quadrada)"
            className="absolute -bottom-8 -left-10 aspect-square w-48 rounded-2xl border-ink-foreground/25 bg-ink-soft text-ink-foreground/60 shadow-2xl shadow-ink/40"
            iconClassName="text-sand"
          />
          <div
            className="absolute -right-6 top-10 rounded-2xl bg-sand px-5 py-4 text-sand-foreground shadow-xl"
            aria-hidden="true"
          >
            <p className="font-heading text-2xl font-bold leading-none">4,9 ★</p>
            <p className="mt-1 text-xs font-medium">+2.400 avaliações</p>
          </div>
        </div>
      </div>

      {/* Foto mobile */}
      <div className="px-4 pb-12 lg:hidden">
        <PhotoPlaceholder
          label="Foto principal do hero — mar de Búzios / lancha"
          className="aspect-[4/3] w-full rounded-2xl border-ink-foreground/25 bg-ink-soft text-ink-foreground/60"
          iconClassName="size-9 text-sand"
        />
      </div>
    </section>
  )
}
