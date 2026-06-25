"use client"

import { Mountain } from "lucide-react"
import { getBiomes } from "@/lib/terranova-data"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/lib/i18n"

export function BiomesSection() {
  const { lang, t } = useLanguage()
  const biomes = getBiomes(lang)

  return (
    <section id="biomes" className="scroll-mt-20 py-12">
      <SectionHeading>{t.biomes.heading}</SectionHeading>
      <div className="-mx-4 overflow-x-auto px-4 pb-2">
        <div className="flex w-max gap-4">
          {biomes.map((biome) => (
            <article
              key={biome.name}
              className="flex w-64 shrink-0 flex-col rounded-lg border border-edge bg-surface p-5 transition-all hover:scale-[1.01] hover:shadow-[0_0_24px_var(--glow-gold)]"
            >
              <Mountain className="mb-3 h-5 w-5 text-gold" aria-hidden="true" />
              <h3 className="font-heading text-lg font-bold text-parchment">{biome.name}</h3>
              <p className="mt-1 text-sm text-faded">
                {t.biomes.near} <span className="text-parchment">{biome.near}</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {biome.resources.map((res) => (
                  <span
                    key={res}
                    className="rounded-full border border-edge bg-elevated px-2.5 py-0.5 font-mono text-[11px] text-faded"
                  >
                    {res}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
