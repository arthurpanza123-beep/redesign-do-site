import Link from 'next/link'
import { Sailboat, Home, Compass } from 'lucide-react'
import { categoryInfos } from '@/lib/tours'

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-4 py-20 text-ink-foreground">
      {/* Brilho decorativo de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-ocean/25 blur-3xl"
      />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-sand text-sand-foreground">
          <Sailboat className="size-7" aria-hidden="true" />
        </span>

        <p className="mt-8 font-heading text-7xl font-bold tracking-tight text-sand sm:text-8xl">
          404
        </p>

        <h1 className="mt-4 font-heading text-2xl font-semibold text-balance sm:text-3xl">
          Essa rota não existe no nosso mapa
        </h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-foreground/70">
          A página que você procura pode ter mudado de lugar ou nunca existiu. Volte para o porto e
          escolha uma nova aventura.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sand px-7 py-3.5 text-sm font-semibold text-sand-foreground transition-all hover:brightness-105 hover:shadow-lg"
          >
            <Home className="size-4" aria-hidden="true" />
            Voltar ao início
          </Link>
          <Link
            href="/passeios"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-foreground/20 px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:border-sand hover:text-sand"
          >
            <Compass className="size-4" aria-hidden="true" />
            Ver passeios
          </Link>
        </div>

        {/* Atalhos de categorias */}
        <nav aria-label="Categorias" className="mt-12 w-full border-t border-ink-foreground/10 pt-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/50">
            Explore por categoria
          </h2>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {categoryInfos.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/${cat.slug}`}
                  className="inline-flex rounded-full border border-ink-foreground/15 px-4 py-1.5 text-xs font-medium text-ink-foreground/80 transition-colors hover:border-sand hover:text-sand"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  )
}
