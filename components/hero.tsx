import Link from 'next/link'
import { ArrowRight, MapPin, ShieldCheck, Star } from 'lucide-react'
import { HeroMedia } from '@/components/hero-media'

const stats = [
  { value: '+30', label: 'experiências' },
  { value: '+15 mil', label: 'clientes atendidos' },
  { value: '4,9', label: 'avaliação média' },
  { value: '2018', label: 'desde' },
]

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] text-white" aria-label="Destaque">
      <HeroMedia />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-14 pt-32 lg:px-8 lg:pb-20">
        <div className="max-w-3xl">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] backdrop-blur-md ring-1 ring-white/25">
            <MapPin className="size-3.5 text-ocean-light" aria-hidden="true" />
            Búzios · Arraial do Cabo · Cabo Frio · Rio
          </p>

          <h1 className="text-shadow-hero animate-fade-up animation-delay-100 mt-6 font-heading text-5xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            O mar mais bonito do Brasil, <span className="text-ocean-light">do seu jeito</span>
          </h1>

          <p className="text-shadow-soft animate-fade-up animation-delay-200 mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg">
            Passeios de barco, lanchas privativas, buggy, mergulho, hospedagens e transfers no
            Caribe brasileiro — com atendimento humano do primeiro contato ao fim da viagem.
          </p>

          <div className="animate-fade-up animation-delay-300 mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/passeios"
              className="group inline-flex items-center gap-2 rounded-full bg-ocean px-8 py-4 text-sm font-bold text-ocean-foreground shadow-xl shadow-ink/40 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              Explorar experiências
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <a
              href="#experiencias"
              className="inline-flex items-center rounded-full bg-white/10 px-8 py-4 text-sm font-semibold ring-1 ring-white/30 backdrop-blur-md transition-colors hover:bg-white/20"
            >
              Ver catálogo completo
            </a>
          </div>
        </div>

        {/* Barra de confiança */}
        <div className="animate-fade-up animation-delay-500 mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/15 ring-1 ring-white/20 backdrop-blur-xl sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5 bg-ink/35 px-6 py-5">
              <span className="font-heading text-2xl font-extrabold text-ocean-light sm:text-3xl">
                {s.value}
              </span>
              <span className="text-xs text-white/80">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="animate-fade-up animation-delay-500 mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/75">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-4 text-ocean-light" aria-hidden="true" />
            Empresa registrada · CNPJ 31.511.552/0001-98
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Star className="size-4 fill-ocean-light text-ocean-light" aria-hidden="true" />
            Certificados pelos principais órgãos reguladores
          </span>
        </div>
      </div>
    </section>
  )
}
