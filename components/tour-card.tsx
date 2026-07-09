import Link from 'next/link'
import { PhotoPlaceholder } from '@/components/photo-placeholder'
import type { Tour } from '@/lib/tours'

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-sm ring-1 ring-border transition-shadow hover:shadow-lg">
      <PhotoPlaceholder
        label={tour.photoLabel}
        className="aspect-[4/3] w-full rounded-none border-x-0 border-t-0"
      />

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
          <Link href={`/passeio/${tour.id}`} className="transition-colors hover:text-navy">
            {tour.title}
          </Link>
        </h3>

        <ul className="mt-2 flex flex-wrap gap-1.5">
          {tour.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-navy px-2.5 py-0.5 text-[11px] font-medium leading-tight text-navy-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <p className="text-xs text-muted-foreground">{tour.priceLabel}</p>
          <p className="font-heading text-2xl font-extrabold text-navy">
            <span className="text-base align-top">R$ </span>
            {tour.price}
          </p>
        </div>

        <Link
          href={`/passeio/${tour.id}`}
          className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-dark"
        >
          Informações &amp; Reservas
        </Link>
      </div>
    </article>
  )
}
