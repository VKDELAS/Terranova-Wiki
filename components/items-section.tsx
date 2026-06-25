"use client"

import { getItems, type ItemCategory } from "@/lib/terranova-data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n"
import { cn } from "@/lib/utils"

function categoryClass(key: ItemCategory) {
  if (key === "danger") return "border-ember-red/50 text-ember-red bg-ember-red/15"
  if (key === "weapon" || key === "siege") return "border-info-blue/50 text-info-blue bg-info-blue/15"
  return "border-gold/50 text-gold bg-gold/15"
}

export function ItemsSection() {
  const { lang, t } = useLanguage()
  const items = getItems(lang)

  return (
    <section id="items" className="scroll-mt-20 py-12">
      <SectionHeading>{t.items.heading}</SectionHeading>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, i) => (
          <Reveal key={item.name} delay={(i % 6) * 70}>
            <article
              className="rounded-lg border border-edge bg-surface p-5 transition-all hover:scale-[1.01] hover:shadow-[0_0_24px_var(--glow-gold)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-mono text-base font-bold text-parchment">{item.name}</h3>
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide",
                    categoryClass(item.categoryKey),
                  )}
                >
                  {item.category}
                </span>
              </div>
              <p className="mt-2 text-sm text-faded">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
