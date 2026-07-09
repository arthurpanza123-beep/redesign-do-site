import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappButton } from '@/components/whatsapp-button'
import { PhotoPlaceholder } from '@/components/photo-placeholder'
import { Reveal } from '@/components/reveal'

export const metadata = {
  title: 'Blog — Búzios Trip Tour',
  description: 'Dicas, roteiros e guias completos sobre Búzios, Arraial do Cabo e Cabo Frio.',
}

const posts = [
  {
    title: 'As 10 praias mais bonitas de Búzios para conhecer',
    excerpt:
      'Um guia completo pelas praias imperdíveis da península — de Geribá à Azeda, com dicas de acesso e melhores horários.',
    tag: 'Roteiros',
    date: '12 de junho, 2026',
    photoLabel: 'Foto do post — praias de Búzios',
  },
  {
    title: 'Arraial do Cabo: como visitar o Caribe brasileiro',
    excerpt:
      'Tudo o que você precisa saber antes de conhecer as águas mais cristalinas do Brasil: taxas, passeios e época ideal.',
    tag: 'Guias',
    date: '28 de maio, 2026',
    photoLabel: 'Foto do post — Arraial do Cabo',
  },
  {
    title: 'Passeio de lancha ou escuna: qual escolher?',
    excerpt:
      'Comparamos os dois passeios mais procurados da região para você decidir qual combina mais com o seu grupo.',
    tag: 'Dicas',
    date: '15 de maio, 2026',
    photoLabel: 'Foto do post — lancha vs escuna',
  },
  {
    title: 'Onde comer em Búzios: da Rua das Pedras aos quiosques',
    excerpt:
      'A gastronomia de Búzios vai muito além do badalado centro. Confira nossos restaurantes favoritos.',
    tag: 'Gastronomia',
    date: '2 de maio, 2026',
    photoLabel: 'Foto do post — gastronomia',
  },
  {
    title: 'Roteiro de 3 dias na Região dos Lagos',
    excerpt:
      'Búzios, Cabo Frio e Arraial do Cabo em um único fim de semana prolongado — com transfer e hospedagem inclusos.',
    tag: 'Roteiros',
    date: '20 de abril, 2026',
    photoLabel: 'Foto do post — roteiro 3 dias',
  },
  {
    title: 'Mergulho para iniciantes: o que esperar do batismo',
    excerpt:
      'Nunca mergulhou? Explicamos passo a passo como funciona a experiência com instrutor nas águas de Arraial.',
    tag: 'Aventuras',
    date: '8 de abril, 2026',
    photoLabel: 'Foto do post — mergulho',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="bg-ink text-ink-foreground">
          <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
            <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.2em] text-sand">
              Blog
            </p>
            <h1 className="animate-fade-up animation-delay-100 mt-4 max-w-2xl font-heading text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Histórias e dicas de quem vive a <span className="text-sand">Região dos Lagos</span>
            </h1>
            <p className="animate-fade-up animation-delay-200 mt-5 max-w-lg text-pretty text-base leading-relaxed text-ink-foreground/75">
              Roteiros, guias completos e segredos locais para você aproveitar cada minuto da viagem.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20" aria-label="Artigos do blog">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.title} delay={(i % 3) * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10 hover:ring-ocean/40">
                  <div className="overflow-hidden">
                    <PhotoPlaceholder
                      label={post.photoLabel}
                      className="aspect-[16/10] w-full rounded-none border-0 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                      <span className="rounded-full bg-secondary px-2.5 py-1 text-secondary-foreground">
                        {post.tag}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="mt-3 font-heading text-xl font-semibold leading-snug text-foreground">
                      <a href="#" className="after:absolute after:inset-0 transition-colors hover:text-ocean-dark">
                        {post.title}
                      </a>
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-ocean-dark">
                      Ler artigo
                      <ArrowUpRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsappButton />
    </div>
  )
}
