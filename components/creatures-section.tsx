"use client"

import { useState } from "react"
import { ChevronDown, AlertTriangle } from "lucide-react"
import { getCreatures, type Creature } from "@/lib/terranova-data"
import { StatusBadge } from "@/components/status-badge"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n"
import { cn } from "@/lib/utils"

function CreatureCard({ creature }: { creature: Creature }) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const visibleRows = open ? creature.rows : creature.rows.slice(0, 2)

  return (
    <article
      className="group rounded-lg border border-edge bg-surface p-5 transition-all hover:scale-[1.01] hover:shadow-[0_0_24px_var(--glow-gold)]"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-heading text-xl font-bold text-parchment">{creature.name}</h3>
        <div className="flex flex-wrap gap-1.5">
          {creature.badges.map((b) => (
            <StatusBadge key={b} type={b} />
          ))}
        </div>
      </div>

      <p className="mt-2 text-sm text-faded">{creature.summary}</p>

      <dl className="mt-4 space-y-2.5">
        {visibleRows.map((row) => (
          <div key={row.label} className="grid grid-cols-[100px_1fr] gap-3 text-sm">
            <dt className="font-mono text-xs uppercase tracking-wide text-dim">{row.label}</dt>
            <dd className="text-faded">{row.value}</dd>
          </div>
        ))}
      </dl>

      {open && creature.warning && (
        <div className="mt-4 flex items-start gap-2 rounded-md border border-ember-red/40 bg-ember-red/10 p-3 text-sm text-ember-red">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{creature.warning}</span>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:brightness-110"
        aria-expanded={open}
      >
        {open ? t.creatures.showMore : t.creatures.viewDetails}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} aria-hidden="true" />
      </button>
    </article>
  )
}

export function CreaturesSection() {
  const { lang, t } = useLanguage()
  const creatures = getCreatures(lang)
  return (
    <section id="creatures" className="scroll-mt-20 py-12">
      <SectionHeading>{t.creatures.heading}</SectionHeading>
      <div className="grid gap-4 md:grid-cols-2">
        {creatures.map((creature, i) => (
          <Reveal key={creature.name} delay={i * 80}>
            <CreatureCard creature={creature} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
