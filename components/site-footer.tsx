import { Palmtree, Phone, Mail, Clock, MessageCircle, MapPin } from 'lucide-react'
import { PhotoPlaceholder } from '@/components/photo-placeholder'

const institutional = [
  'Home',
  'Quem Somos',
  'Nossa Missão',
  'Política de privacidade',
  'Política de cancelamento',
]

const social = ['Facebook', 'Instagram', 'YouTube', 'TikTok']

const payments = ['Mastercard', 'Visa', 'Elo', 'Diners', 'Amex', 'PagSeguro']

export function SiteFooter() {
  return (
    <footer className="bg-ocean text-ocean-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {/* Logo */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2">
            <span className="flex size-10 items-center justify-center rounded-full bg-ocean-foreground/15 ring-1 ring-ocean-foreground/30">
              <Palmtree className="size-6 text-ocean-foreground" aria-hidden="true" />
            </span>
            <span className="font-heading text-lg font-extrabold leading-none">
              BÚZIOS<span className="font-medium">TRIPTOUR</span>
            </span>
          </div>
          <p className="text-sm text-ocean-foreground/80">
            Sua agência de turismo na Região dos Lagos.
          </p>
        </div>

        {/* Institucional */}
        <nav aria-label="Institucional">
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide">Institucional</h3>
          <ul className="mt-4 space-y-2">
            {institutional.map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-ocean-foreground/85 transition-colors hover:text-ocean-foreground">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes sociais */}
        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide">Redes Sociais</h3>
          <ul className="mt-4 space-y-2">
            {social.map((item) => (
              <li key={item}>
                <a href="#" className="text-sm text-ocean-foreground/85 transition-colors hover:text-ocean-foreground">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Atendimento */}
        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide">Atendimento</h3>
          <ul className="mt-4 space-y-3 text-sm text-ocean-foreground/85">
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              +55 (22) 99894 - 5070
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
              +55 (22) 99894 - 5070
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              contato@buziostriptour.com
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0" aria-hidden="true" />
              Segunda à Domingo das 7h às 22h
            </li>
          </ul>
        </div>

        {/* Formas de pagamento */}
        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
            Formas de Pagamento
          </h3>
          <ul className="mt-4 grid grid-cols-3 gap-2">
            {payments.map((item) => (
              <li
                key={item}
                className="flex h-8 items-center justify-center rounded bg-ocean-foreground px-1 text-[10px] font-bold text-ocean"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2 text-sm text-ocean-foreground/85">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            <span>Barra de Búzios, RJ</span>
          </div>
          <PhotoPlaceholder
            label="Mapa (Google Maps)"
            className="mt-3 h-24 w-full rounded-md border-ocean-foreground/40 bg-ocean-dark text-ocean-foreground/80"
            iconClassName="text-ocean-foreground"
          />
        </div>
      </div>

      <div className="border-t border-ocean-foreground/15 py-5">
        <p className="mx-auto max-w-7xl px-4 text-center text-xs text-ocean-foreground/75 lg:px-8">
          BÚZIOS TRIP TOUR LTDA · CNPJ: 31.511.552/0001-98 · Búzios/RJ · Brasil ·{' '}
          <br className="hidden sm:block" />
          Copyright 2018 — Búzios Trip Tour — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
