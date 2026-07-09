'use client'

import { useMemo, useState } from 'react'
import type { Tour } from '@/lib/tours'

export function BookingSidebar({ tour }: { tour: Tour }) {
  const unit = Number(tour.price)
  const [adults, setAdults] = useState(1)
  const [kids6to10, setKids6to10] = useState(0)

  const total = useMemo(
    () => adults * unit + kids6to10 * (unit / 2),
    [adults, kids6to10, unit],
  )
  const signal = Math.round(total / 3)
  const remaining = total - signal

  return (
    <aside className="rounded-xl bg-card p-5 shadow-sm ring-1 ring-border lg:sticky lg:top-24">
      <h2 className="text-center font-heading text-sm font-bold uppercase tracking-wide text-foreground">
        {tour.title}
      </h2>
      <p className="mt-1 text-center text-xs text-muted-foreground">{tour.priceLabel}</p>
      <p className="text-center font-heading text-3xl font-extrabold text-navy">
        <span className="align-top text-lg">R$ </span>
        {tour.price}
      </p>

      <div className="mt-4 flex flex-col gap-3">
        <Field label="Quantidade de adultos">
          <select
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="select-base"
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} — R$ {n * unit}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Crianças entre 6 e 10 anos">
          <select
            value={kids6to10}
            onChange={(e) => setKids6to10(Number(e.target.value))}
            className="select-base"
          >
            {Array.from({ length: 11 }, (_, i) => i).map((n) => (
              <option key={n} value={n}>
                {n} — R$ {n * (unit / 2)}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Crianças até 5 anos">
          <select className="select-base" defaultValue="0">
            {Array.from({ length: 11 }, (_, i) => i).map((n) => (
              <option key={n} value={n}>
                {n} — R$ 0
              </option>
            ))}
          </select>
        </Field>

        <div className="grid grid-cols-2 gap-2">
          <input type="date" className="select-base" aria-label="Data" />
          <select className="select-base" defaultValue="">
            <option value="" disabled>
              Horário
            </option>
            <option>07:20</option>
            <option>08:00</option>
            <option>09:00</option>
          </select>
        </div>
      </div>

      <dl className="mt-5 flex flex-col gap-2 border-t border-border pt-4 text-sm">
        <Row term="Valor Final" value={`R$ ${total.toLocaleString('pt-BR')}`} strong />
        <Row term="Sinal cobrado para garantir a reserva" value={`R$ ${signal.toLocaleString('pt-BR')}`} />
        <Row term="O restante é acertado no local." value={`R$ ${remaining.toLocaleString('pt-BR')}`} />
      </dl>

      <a
        href="https://wa.me/5522998945070"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-navy px-4 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-dark"
      >
        Reservar
      </a>
    </aside>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-center text-xs font-semibold text-foreground">{label}:</span>
      {children}
    </label>
  )
}

function Row({ term, value, strong }: { term: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className={strong ? 'font-semibold text-foreground' : 'text-muted-foreground'}>{term}</dt>
      <dd className={strong ? 'font-bold text-foreground' : 'font-medium text-foreground'}>{value}</dd>
    </div>
  )
}
