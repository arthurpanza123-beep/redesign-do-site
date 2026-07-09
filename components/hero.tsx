import { PhotoPlaceholder } from '@/components/photo-placeholder'

export function Hero() {
  return (
    <section className="relative" aria-label="Destaque">
      <PhotoPlaceholder
        label="Adicione aqui o vídeo ou foto de destaque (mar de Búzios / lanchas)"
        className="h-[240px] w-full rounded-none sm:h-[360px] lg:h-[460px]"
        iconClassName="size-10"
      />
      <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-navy-dark/50 to-transparent">
        <div className="mx-auto w-full max-w-7xl px-4 pb-8 lg:px-8 lg:pb-14">
          <h1 className="max-w-2xl text-balance font-heading text-2xl font-extrabold text-ocean-foreground drop-shadow-md sm:text-4xl lg:text-5xl">
            Viva o melhor de Búzios, Arraial do Cabo e Cabo Frio
          </h1>
          <p className="mt-3 max-w-xl text-pretty text-sm text-ocean-foreground/90 drop-shadow sm:text-base">
            Passeios, hospedagens, lanchas, aventuras e transfers com reserva rápida e atendimento
            especializado.
          </p>
        </div>
      </div>
    </section>
  )
}
