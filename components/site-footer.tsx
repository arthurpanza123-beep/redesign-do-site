import Link from 'next/link'
import { Sailboat, Phone, Mail, Clock, MessageCircle, MapPin } from 'lucide-react'
import { PhotoPlaceholder } from '@/components/photo-placeholder'

const explore = [
  { label: 'Passeios', href: '/passeios' },
  { label: 'Hospedagens', href: '/hospedagens' },
  { label: 'Lanchas', href: '/lanchas' },
  { label: 'Aluguel de Veículos', href: '/aluguel-de-veiculos' },
  { label: 'Transfer', href: '/transfer' },
  { label: 'Aventuras', href: '/aventuras' },
]

const institutional = [
  { label: 'Home', href: '/' },
  { label: 'Cupons', href: '/cupons' },
  { label: 'Blog', href: '/blog' },
  { label: 'Política de privacidade', href: '#' },
  { label: 'Política de cancelamento', href: '#' },
]

const social = ['Instagram', 'Facebook', 'YouTube', 'TikTok']

const payments = ['Mastercard', 'Visa', 'Elo', 'Diners', 'Amex', 'Pix']

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      {/* Faixa CTA */}
      <div className="border-b border-ink-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-balance sm:text-3xl">
              Pronto para viver o mar de Búzios?
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-foreground/70">
              Fale com nossos especialistas e monte o roteiro perfeito para a sua viagem.
            </p>
          </div>
          <a
            href="https://wa.me/5522998945070"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ocean px-7 py-3.5 text-sm font-semibold text-ocean-foreground shadow-lg shadow-ocean/25 transition-all hover:-translate-y-px hover:brightness-110"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        {/* Marca */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-full bg-ocean text-ocean-foreground">
              <Sailboat className="size-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-xl font-bold tracking-tight">
              Búzios <span className="text-ocean-light">Trip Tour</span>
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-foreground/70">
            Desde 2018 criando experiências inesquecíveis em Búzios, Arraial do Cabo, Cabo Frio e
            Rio de Janeiro.
          </p>
          <ul className="flex flex-wrap gap-2">
            {social.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="inline-flex rounded-full border border-ink-foreground/15 px-4 py-1.5 text-xs font-medium text-ink-foreground/75 transition-colors hover:border-ocean-light hover:text-ocean-light"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Explorar */}
        <nav aria-label="Explorar">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/50">
            Explorar
          </h3>
          <ul className="mt-5 space-y-2.5">
            {explore.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-foreground/80 transition-colors hover:text-ocean-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Institucional */}
        <nav aria-label="Institucional">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/50">
            Institucional
          </h3>
          <ul className="mt-5 space-y-2.5">
            {institutional.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-foreground/80 transition-colors hover:text-ocean-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Atendimento */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/50">
            Atendimento
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/80">
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-ocean-light" aria-hidden="true" />
              +55 (22) 99894-5070
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-ocean-light" aria-hidden="true" />
              contato@buziostriptour.com
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="size-4 shrink-0 text-ocean-light" aria-hidden="true" />
              Segunda a domingo, das 7h às 22h
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 shrink-0 text-ocean-light" aria-hidden="true" />
              Armação dos Búzios, RJ
            </li>
          </ul>
          <PhotoPlaceholder
            label="Mapa (Google Maps)"
            className="mt-5 h-24 w-full rounded-lg border-ink-foreground/20 bg-ink-soft text-ink-foreground/60"
            iconClassName="text-ocean-light"
          />
        </div>
      </div>

      {/* Barra final */}
      <div className="border-t border-ink-foreground/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row lg:px-8">
          <p className="text-xs text-ink-foreground/55">
            Búzios Trip Tour LTDA · CNPJ 31.511.552/0001-98 · Búzios/RJ · Brasil
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {payments.map((item) => (
              <span
                key={item}
                className="rounded border border-ink-foreground/15 px-2 py-0.5 text-[10px] font-semibold text-ink-foreground/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
