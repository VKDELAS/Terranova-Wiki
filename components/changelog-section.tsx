"use client"

import { getChangelog } from "@/lib/terranova-data"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/lib/i18n"

export function ChangelogSection() {
  const { lang, t } = useLanguage()
  const changelog = getChangelog(lang)

  return (
    <section id="changelog" className="scroll-mt-20 py-12">
      <SectionHeading>{t.changelog.heading}</SectionHeading>
      <ol className="space-y-8 border-l border-edge pl-6">
        {changelog.map((entry) => (
          <li key={entry.version} className="relative">
            <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-gold bg-deep" />
            <span className="inline-flex rounded-md border border-gold/50 bg-gold/15 px-3 py-1 font-mono text-sm font-bold text-gold">
              {entry.version}
            </span>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {entry.changes.map((change) => (
                <li key={change} className="flex items-start gap-2 text-sm text-faded">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {change}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
