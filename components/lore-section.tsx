"use client"

import { AlertTriangle, Play } from "lucide-react"
import { getTimeline, getCharacters } from "@/lib/terranova-data"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/lib/i18n"

export function LoreSection() {
  const { lang, t } = useLanguage()
  const timeline = getTimeline(lang)
  const characters = getCharacters(lang)
  const lore = t.lore

  return (
    <section id="lore" className="scroll-mt-20 py-12">
      <SectionHeading>{lore.heading}</SectionHeading>

      <div className="parchment-texture rounded-xl border border-gold/30 p-6 sm:p-10">
        {/* The World */}
        <h3 className="font-heading text-2xl font-bold text-gold">{lore.worldTitle}</h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-faded">{lore.worldText}</p>

        {/* Timeline */}
        <h3 className="mt-12 font-heading text-2xl font-bold text-gold">{lore.timelineTitle}</h3>
        <ol className="mt-6 space-y-8 border-l border-gold/30 pl-6">
          {timeline.map((entry) => (
            <li key={entry.date} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-deep" />
              <p className="font-mono text-sm text-gold">{entry.date}</p>
              <h4 className="mt-1 font-heading text-lg font-bold text-parchment">{entry.title}</h4>
              <p className="mt-1 max-w-2xl leading-relaxed text-faded">{entry.description}</p>
            </li>
          ))}
        </ol>

        {/* Characters */}
        <h3 className="mt-12 font-heading text-2xl font-bold text-gold">{lore.charactersTitle}</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {characters.map((char) => (
            <article key={char.name} className="rounded-lg border border-edge bg-surface/70 p-5">
              <h4 className="font-heading text-lg font-bold text-parchment">{char.name}</h4>
              <span className="mt-1 inline-flex rounded-full border border-gold/50 bg-gold/15 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-gold">
                {char.role}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-faded">{char.description}</p>
            </article>
          ))}
        </div>

        {/* The Great War */}
        <h3 className="mt-12 font-heading text-2xl font-bold text-gold">{lore.warTitle}</h3>
        <blockquote className="mt-4 border-l-4 border-ember-red bg-ember-red/5 py-4 pl-5 pr-4">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-gold/50 bg-gold/15 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-gold">
            <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" /> {lore.adultContent}
          </span>
          <p className="max-w-3xl leading-relaxed text-faded">{lore.warText}</p>
        </blockquote>

        {/* Skotoselenes */}
        <h3 className="mt-12 font-heading text-2xl font-bold text-gold">{lore.skotoTitle}</h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-faded">{lore.skotoText}</p>

        {/* Film */}
        <h3 className="mt-12 font-heading text-2xl font-bold text-gold">{lore.filmTitle}</h3>
        <div className="mt-4 flex items-start gap-4 rounded-lg border border-edge bg-surface/70 p-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/15">
            <Play className="h-5 w-5 text-gold" aria-hidden="true" />
          </span>
          <p className="text-sm italic leading-relaxed text-faded">{lore.filmQuote}</p>
        </div>
      </div>
    </section>
  )
}
