import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getTourImage, type Tour } from '@/lib/tours'

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10 hover:ring-ocean/40">
      <div className="relative overflow-hidden">
        <img
          src={getTourImage(tour.id) || "/placeholder.svg"}
          alt={tour.photoLabel}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-[11px] font-medium tracking-wide text-ink-foreground backdrop-blur-sm">
          {tour.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-xl font-semibold leading-snug text-foreground">
          <Link
            href={`/passeio/${tour.id}`}
            className="transition-colors after:absolute after:inset-0 hover:text-ocean-dark"
          >
            {tour.title}
          </Link>
        </h3>

        <ul className="mb-5 mt-3 flex flex-wrap gap-1.5">
          {tour.tags.slice(0, 3).map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium leading-tight text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
              {tour.priceLabel}
            </p>
            <p className="font-heading text-2xl font-bold text-foreground">
              <span className="align-top text-sm font-semibold text-muted-foreground">R$ </span>
              {tour.price}
            </p>
          </div>
          <span
            className="flex size-10 items-center justify-center rounded-full bg-ink text-ink-foreground transition-all duration-300 group-hover:bg-ocean group-hover:text-ocean-foreground"
            aria-hidden="true"
          >
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  )
}
