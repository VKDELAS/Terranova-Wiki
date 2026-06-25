"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import type { Lang } from "@/lib/terranova-data"
import { cn } from "@/lib/utils"

const OPTIONS: { value: Lang; code: string }[] = [
  { value: "en", code: "EN" },
  { value: "pt", code: "PT" },
]

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={cn(
        "relative inline-flex items-center gap-0.5 rounded-full border border-edge/80 bg-deep/60 p-0.5",
        className,
      )}
    >
      <Globe className="ml-1.5 mr-0.5 h-3.5 w-3.5 shrink-0 text-faded" aria-hidden="true" />
      {OPTIONS.map((opt) => {
        const active = lang === opt.value
        const fullLabel = opt.value === "en" ? t.language.english : t.language.portuguese
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLang(opt.value)}
            aria-pressed={active}
            title={`${t.language.switchTo}: ${fullLabel}`}
            className={cn(
              "relative rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wider transition-all duration-200",
              active
                ? "bg-gold text-[#1a0d00] shadow-[0_0_12px_var(--glow-gold)]"
                : "text-faded hover:text-parchment",
            )}
          >
            {opt.code}
            <span className="sr-only"> — {fullLabel}</span>
          </button>
        )
      })}
    </div>
  )
}
