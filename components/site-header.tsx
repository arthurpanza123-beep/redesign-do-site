'use client'

import { useState } from 'react'
import { Menu, X, Palmtree } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  'Passeios',
  'Hospedagens',
  'Lanchas',
  'Aluguel de Veículos',
  'Transfer',
  'Aventuras',
  'Cupons',
  'Blog',
]

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2" aria-label="Búzios Trip Tour - Página inicial">
      <span className="flex size-10 items-center justify-center rounded-full bg-ocean-foreground/15 ring-1 ring-ocean-foreground/30">
        <Palmtree className="size-6 text-ocean-foreground" aria-hidden="true" />
      </span>
      <span className="font-heading text-lg font-extrabold leading-none tracking-tight text-ocean-foreground">
        BÚZIOS<span className="font-medium">TRIPTOUR</span>
      </span>
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ocean text-ocean-foreground shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:h-20 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-semibold uppercase tracking-wide text-ocean-foreground/90 transition-colors hover:text-ocean-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1.5 sm:flex" aria-label="Idiomas">
            <span className="text-base" role="img" aria-label="Português">🇧🇷</span>
            <span className="text-base" role="img" aria-label="Inglês">🇺🇸</span>
            <span className="text-base" role="img" aria-label="Espanhol">🇪🇸</span>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-ocean-foreground transition-colors hover:bg-ocean-foreground/15 xl:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        className={cn(
          'overflow-hidden border-t border-ocean-foreground/15 bg-ocean-dark transition-[max-height] duration-300 xl:hidden',
          open ? 'max-h-[32rem]' : 'max-h-0',
        )}
        aria-label="Navegação mobile"
      >
        <ul className="flex flex-col px-4 py-2">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="block border-b border-ocean-foreground/10 py-3 text-sm font-semibold uppercase tracking-wide text-ocean-foreground/90 transition-colors hover:text-ocean-foreground"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
