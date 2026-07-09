'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sailboat } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Passeios', href: '/passeios' },
  { label: 'Hospedagens', href: '/hospedagens' },
  { label: 'Lanchas', href: '/lanchas' },
  { label: 'Aluguel de Veículos', href: '/aluguel-de-veiculos' },
  { label: 'Transfer', href: '/transfer' },
  { label: 'Aventuras', href: '/aventuras' },
  { label: 'Cupons', href: '/cupons' },
  { label: 'Blog', href: '/blog' },
]

function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5"
      aria-label="Búzios Trip Tour — Página inicial"
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-ocean text-ocean-foreground shadow-lg shadow-ocean/30 transition-transform duration-300 group-hover:rotate-6">
        <Sailboat className="size-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-bold tracking-tight text-white">
          Búzios <span className="text-ocean-light">Trip Tour</span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
          Região dos Lagos · RJ
        </span>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha o menu mobile ao trocar de rota
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || open
          ? 'border-b border-white/10 bg-ink/75 shadow-lg shadow-ink/20 backdrop-blur-xl'
          : 'border-b border-white/10 bg-ink/30 backdrop-blur-md',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:h-[76px] lg:px-8">
        <Logo />

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Navegação principal">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200',
                  active
                    ? 'bg-white/15 text-white shadow-inner'
                    : 'text-white/70 hover:bg-white/10 hover:text-white',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5522998945070"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-full bg-ocean px-5 py-2.5 text-[13px] font-semibold text-ocean-foreground shadow-lg shadow-ocean/25 transition-all duration-200 hover:-translate-y-px hover:brightness-110 sm:inline-flex"
          >
            Reservar agora
          </a>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 xl:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Navegação mobile */}
      <nav
        className={cn(
          'grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out xl:hidden',
          open ? 'grid-rows-[1fr] border-t border-white/10' : 'grid-rows-[0fr]',
        )}
        aria-label="Navegação mobile"
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="flex flex-col px-4 py-3">
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex items-center justify-between border-b border-white/10 py-3.5 text-sm font-medium transition-colors',
                      active ? 'text-ocean-light' : 'text-white/80 hover:text-white',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li className="pb-2 pt-4">
              <a
                href="https://wa.me/5522998945070"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-full bg-ocean px-5 py-3 text-sm font-semibold text-ocean-foreground"
              >
                Reservar agora
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
