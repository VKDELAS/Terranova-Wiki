"use client"

import Link from "next/link"
import { Download, MessageCircle, Bug } from "lucide-react"
import { LINKS, getPages } from "@/lib/terranova-data"
import { BrandLogoMark } from "@/components/brand-logo"
import { useLanguage } from "@/lib/i18n"

export function SiteFooter() {
  const { lang, t } = useLanguage()
  const pages = getPages(lang)

  return (
    <footer className="border-t border-edge bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <BrandLogoMark size="md" />
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-faded">{t.footer.wiki}</p>
          <p className="mt-3 max-w-xs text-sm text-faded">{t.footer.tagline}</p>
        </div>

        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-parchment">
            {t.footer.navigation}
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {pages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className="text-sm text-faded transition-colors hover:text-gold">
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={LINKS.curseforge}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-[#1a0d00] transition-colors hover:brightness-110"
          >
            <Download className="h-4 w-4" aria-hidden="true" /> {t.footer.downloadAddon}
          </a>
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-info-blue/60 px-4 py-2.5 text-sm font-medium text-info-blue transition-colors hover:bg-info-blue/10"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> {t.footer.joinDiscord}
          </a>
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-edge px-4 py-2.5 text-sm font-medium text-faded transition-colors hover:text-parchment"
          >
            <Bug className="h-4 w-4" aria-hidden="true" /> {t.footer.reportBug}
          </a>
        </div>
      </div>

      <div className="border-t border-edge">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-mono text-[11px] text-dim">{t.footer.copyright}</p>
          <p className="font-mono text-[11px] text-dim">{t.footer.maintained}</p>
        </div>
      </div>
    </footer>
  )
}
