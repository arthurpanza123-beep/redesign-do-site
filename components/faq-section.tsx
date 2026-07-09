'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Como funciona o pagamento?',
    a: 'É cobrado um sinal para garantir a sua reserva e o restante é acertado no local, diretamente com o guia, no dia do passeio.',
  },
  {
    q: 'Crianças pagam?',
    a: 'Crianças até 5 anos não pagam. De 6 a 10 anos pagam metade do valor. Acima de 10 anos pagam o valor integral.',
  },
  {
    q: 'O que está incluído?',
    a: 'Transporte, guia bilíngue e o passeio contratado. Itens adicionais como refeições e taxas podem ser cobrados à parte.',
  },
  {
    q: 'O que não está incluído?',
    a: 'Bebidas, sobremesas, gorjetas, taxas de reserva ecológica e serviços opcionais como fotógrafo profissional.',
  },
  {
    q: 'O que acontece em condições climáticas desfavoráveis?',
    a: 'O roteiro pode ser alterado, transferido ou cancelado de acordo com as condições climáticas, sempre priorizando a sua segurança.',
  },
  {
    q: 'Posso cancelar minha compra?',
    a: 'Sim. Consulte nossa Política de cancelamento ou fale com um de nossos consultores pelo WhatsApp para mais detalhes.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mt-8">
      <h2 className="font-heading text-lg font-bold text-foreground">Perguntas frequentes</h2>
      <div className="mt-4 flex flex-col gap-2">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q} className="overflow-hidden rounded-lg ring-1 ring-border">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 bg-card px-4 py-3.5 text-left text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {item.q}
                <ChevronDown
                  className={`size-4 shrink-0 text-muted-foreground transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <p className="border-t border-border bg-card px-4 py-3.5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
