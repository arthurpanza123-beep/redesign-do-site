'use client'

export function PackageSidebar() {
  return (
    <aside className="rounded-xl bg-card p-5 shadow-sm ring-1 ring-border lg:sticky lg:top-24">
      <h2 className="text-center font-heading text-lg font-bold uppercase tracking-wide text-navy">
        Monte o seu pacote
      </h2>

      <form
        className="mt-5 flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault()
          window.open('https://wa.me/5522998945070', '_blank')
        }}
      >
        <input className="select-base" placeholder="Número de pessoas" type="number" min={1} />
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-muted-foreground">Data de entrada</span>
          <input className="select-base" type="date" />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-muted-foreground">Data de saída</span>
          <input className="select-base" type="date" />
        </label>
        <input className="select-base" placeholder="Nome" type="text" />
        <input className="select-base" placeholder="(DDD) XXXXX-XXXX" type="tel" />
        <input className="select-base" placeholder="E-mail" type="email" />

        <label className="mt-1 flex items-start gap-2 text-sm text-foreground">
          <input type="checkbox" className="mt-0.5 size-4 accent-navy" />
          <span>Gostaria de adicionar um transfer ou passeio à sua hospedagem?</span>
        </label>

        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-navy px-4 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-dark"
        >
          Consultar Valores
        </button>
      </form>
    </aside>
  )
}
