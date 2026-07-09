import Link from 'next/link'
import { ArrowDown, Star } from 'lucide-react'
import { PhotoPlaceholder } from '@/components/photo-placeholder'

const stats = [
  { value: '+30', label: 'experiências' },
  { value: '+15 mil', label: 'clientes atendidos' },
  { value: '4,9', label: 'avaliação média' },
  { value: '2018', label: 'na Região dos Lagos' },
]

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-ink via-ocean-dark to-ocean text-ink-foreground"
      aria-label="Destaque"
    >
      {/* Brilho de sol no canto superior */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-sand/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/3 size-[24rem] rounded-full bg-ocean/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="flex max-w-2xl flex-col items-start">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-ink-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-ink-foreground backdrop-blur-sm ring-1 ring-ink-foreground/20">
            <Star className="size-3.5 fill-sand text-sand" aria-hidden="true" />
            Búzios · Arraial do Cabo · Cabo Frio
          </p>

          <h1 className="animate-fade-up animation-delay-100 mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Seu verão no <span className="text-sand">Caribe brasileiro</span> começa aqui
          </h1>

          <p className="animate-fade-up animation-delay-200 mt-6 max-w-lg text-pretty text-base leading-relaxed text-ink-foreground/90">
            Passeios de barco, buggy, jet ski, lanchas privativas, hospedagens e transfers. Mar
            turquesa, sol o ano inteiro e atendimento humano do início ao fim.
          </p>

          <div className="animate-fade-up animation-delay-300 mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/passeios"
              className="inline-flex items-center rounded-full bg-sand px-7 py-3.5 text-sm font-bold text-sand-foreground shadow-lg shadow-ink/20 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105"
            >
              Explorar passeios
            </Link>
            <a
              href="#experiencias"
              className="inline-flex items-center gap-2 rounded-full bg-ink-foreground/10 px-7 py-3.5 text-sm font-semibold text-ink-foreground ring-1 ring-ink-foreground/25 backdrop-blur-sm transition-colors hover:bg-ink-foreground/20"
            >
              Ver experiências
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>

          {/* Estatísticas */}
          <dl className="animate-fade-up animation-delay-500 mt-12 grid w-full grid-cols-2 gap-x-6 gap-y-5 border-t border-ink-foreground/20 pt-7 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <dt className="order-2 text-xs text-ink-foreground/75">{s.label}</dt>
                <dd className="order-1 font-heading text-2xl font-extrabold text-sand">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Composição de fotos do hero — substitua pelos seus registros */}
        <div className="animate-fade-up animation-delay-300 relative hidden lg:block" aria-hidden="true">
          <div className="grid grid-cols-2 gap-4">
            <PhotoPlaceholder
              label="Foto/Vídeo — Lancha no mar turquesa"
              className="aspect-[3/4] rounded-3xl rounded-tr-[5rem]"
            />
            <div className="mt-10 flex flex-col gap-4">
              <PhotoPlaceholder
                label="Foto — Buggy na praia"
                className="aspect-square rounded-3xl"
              />
              <PhotoPlaceholder
                label="Foto — Mergulho / Jet ski"
                className="aspect-[4/3] rounded-3xl rounded-br-[5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
