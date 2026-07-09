import { Ticket, MessageCircle } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappButton } from '@/components/whatsapp-button'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Cupons de Desconto — Búzios Trip Tour',
  description: 'Aproveite cupons exclusivos para passeios, hospedagens e aventuras em Búzios.',
}

const coupons = [
  {
    code: 'BEMVINDO10',
    discount: '10% OFF',
    description: 'Desconto de boas-vindas na sua primeira reserva de passeio.',
    rule: 'Válido para novos clientes',
  },
  {
    code: 'GRUPO15',
    discount: '15% OFF',
    description: 'Para grupos a partir de 8 pessoas em qualquer passeio de barco.',
    rule: 'Mínimo de 8 participantes',
  },
  {
    code: 'COMBOTRIP',
    discount: 'R$ 50 OFF',
    description: 'Reservando hospedagem + passeio + transfer no mesmo pacote.',
    rule: 'Válido para pacotes completos',
  },
  {
    code: 'AVENTURA20',
    discount: '20% OFF',
    description: 'Nas experiências de aventura: quadriciclo, jet ski e mergulho.',
    rule: 'De segunda a quinta-feira',
  },
]

export default function CuponsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="bg-ink text-ink-foreground">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-ink-foreground/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ink-foreground/70">
              <Ticket className="size-3.5 text-sand" aria-hidden="true" />
              Ofertas exclusivas
            </p>
            <h1 className="animate-fade-up animation-delay-100 mt-5 max-w-2xl font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Cupons para economizar na sua <em className="italic text-sand">viagem</em>
            </h1>
            <p className="animate-fade-up animation-delay-200 mt-5 max-w-lg text-pretty text-base leading-relaxed text-ink-foreground/75">
              Apresente o código no WhatsApp na hora de fazer sua reserva e garanta o desconto.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20" aria-label="Cupons disponíveis">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {coupons.map((c, i) => (
              <Reveal key={c.code} delay={(i % 2) * 100}>
                <article className="group flex h-full flex-col justify-between gap-6 rounded-2xl bg-card p-6 ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10 hover:ring-ocean/40 sm:p-8">
                  <div>
                    <p className="font-heading text-3xl font-bold text-ocean-dark">{c.discount}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {c.description}
                    </p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground/80">
                      {c.rule}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-border pt-5">
                    <code className="rounded-lg bg-secondary px-4 py-2 font-mono text-sm font-bold tracking-widest text-foreground">
                      {c.code}
                    </code>
                    <a
                      href={`https://wa.me/5522998945070?text=${encodeURIComponent(`Olá! Quero usar o cupom ${c.code}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-ink-foreground transition-colors hover:bg-ocean"
                    >
                      <MessageCircle className="size-4" aria-hidden="true" />
                      Usar cupom
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="mt-10">
            <p className="text-center text-xs text-muted-foreground">
              Cupons não cumulativos. Sujeitos a disponibilidade e condições climáticas. Consulte as
              regras completas no atendimento.
            </p>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
      <WhatsappButton />
    </div>
  )
}
