"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Download, MessageCircle, ExternalLink, Bug } from "lucide-react"
import { LINKS, getPages } from "@/lib/terranova-data"
import { useLanguage } from "@/lib/i18n"
import { cn } from "@/lib/utils"

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function WikiSidebar() {
  const pathname = usePathname()
  const { lang, t } = useLanguage()
  const pages = getPages(lang)

  const quickLinks = [
    { label: t.sidebar.downloadAddon, href: LINKS.curseforge, icon: Download },
    { label: t.sidebar.joinDiscord, href: LINKS.discord, icon: MessageCircle },
    { label: t.sidebar.curseforgePage, href: LINKS.curseforge, icon: ExternalLink },
    { label: t.sidebar.reportBug, href: LINKS.discord, icon: Bug },
  ]

  return (
    <aside className="sticky top-24 hidden h-fit w-[260px] shrink-0 lg:block">
      <div className="rounded-lg border border-edge bg-surface p-5">
        <p className="mb-3 flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-parchment">
          <BookOpen className="h-4 w-4 text-gold" aria-hidden="true" /> {t.sidebar.navigation}
        </p>
        <ul className="space-y-1">
          {pages.map((page) => {
            const active = isActive(pathname, page.href)
            return (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className={cn(
                    "block border-l-2 py-1.5 pl-3 text-sm transition-colors",
                    active
                      ? "border-gold font-medium text-gold"
                      : "border-transparent text-faded hover:text-parchment",
                  )}
                >
                  {page.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="my-5 h-px bg-edge" />

        <p className="mb-3 font-heading text-sm font-bold uppercase tracking-wide text-parchment">
          {t.sidebar.quickLinks}
        </p>
        <ul className="space-y-2">
          {quickLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-faded transition-colors hover:text-gold"
              >
                <link.icon className="h-3.5 w-3.5" aria-hidden="true" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="my-5 h-px bg-edge" />

        <p className="mb-2 font-heading text-sm font-bold uppercase tracking-wide text-parchment">
          {t.sidebar.currentVersion}
        </p>
        <p className="font-mono text-lg font-bold text-gold">V0.1.3</p>
        <p className="font-mono text-xs text-dim">{t.sidebar.lastUpdate}</p>
      </div>
    </aside>
  )
}
