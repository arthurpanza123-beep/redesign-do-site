import { ShieldCheck, MessageCircle, Wallet, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const items = [
  {
    icon: ShieldCheck,
    title: 'Empresa certificada',
    text: 'Registrada nos principais órgãos reguladores do turismo, com CNPJ ativo desde 2018.',
  },
  {
    icon: MessageCircle,
    title: 'Atendimento humano',
    text: 'Resposta rápida no WhatsApp antes, durante e depois da sua viagem.',
  },
  {
    icon: Wallet,
    title: 'Reserva flexível',
    text: 'Pague apenas um sinal para garantir e acerte o restante no local.',
  },
  {
    icon: Users,
    title: 'Guias locais',
    text: 'Equipe bilíngue que conhece cada praia, trilha e segredo da região.',
  },
]

export function WhyUs() {
  return (
    <section className="bg-ink text-ink-foreground" aria-label="Por que escolher a Búzios Trip Tour">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">
            Por que a Búzios Trip Tour
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-balance sm:text-4xl">
            Viaje com quem cuida de <span className="text-sand">cada detalhe</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="flex flex-col items-start gap-4">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-sand/15 text-sand ring-1 ring-sand/30">
                <item.icon className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
