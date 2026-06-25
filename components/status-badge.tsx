"use client"

import { getBadge, type BadgeType } from "@/lib/terranova-data"
import { useLanguage } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function StatusBadge({ type }: { type: BadgeType }) {
  const { lang } = useLanguage()
  const badge = getBadge(type, lang)
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide",
        badge.className,
      )}
    >
      {badge.label}
    </span>
  )
}
