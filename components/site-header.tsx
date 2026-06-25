"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Download, MessageCircle, Menu, X } from "lucide-react"
import { LINKS, getPages } from "@/lib/terranova-data"
import { BrandLogoMark } from "@/components/brand-logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/i18n"
import { cn } from "@/lib/utils"

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { lang, t } = useLanguage()
  const pages = getPages(lang)

  return (
    <header className="header-drop fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-4">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-full border border-edge/80 bg-deep/85 pl-4 pr-3 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md sm:h-16 sm:pl-5 sm:pr-4">
        <Link href="/" className="flex items-center" aria-label="TerraNova — início">
          <BrandLogoMark size="sm" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {pages.map((page) => {
              const active = isActive(pathname, page.href)
              return (
                <li key={page.href} className="flex items-center">
                  <Link
                    href={page.href}
                    className={cn(
                      "relative inline-flex h-9 items-center rounded-full px-3.5 text-sm font-medium uppercase leading-none tracking-wide transition-colors",
                      active ? "text-gold" : "text-faded hover:text-parchment",
                    )}
                  >
                    {page.label}
                    {active && (
                      <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-faded transition-colors hover:text-parchment"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> {t.header.discord}
          </a>
          <a
            href={LINKS.curseforge}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-bold text-[#1a0d00] shadow-[0_0_16px_var(--glow-gold)] transition-transform hover:scale-105"
          >
            <Download className="h-4 w-4" aria-hidden="true" /> {t.header.download}
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full p-2 text-parchment"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-edge/80 bg-deep/95 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1">
            {pages.map((page) => {
              const active = isActive(pathname, page.href)
              return (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-sm font-medium uppercase tracking-wide transition-colors",
                      active ? "bg-gold/15 text-gold" : "text-faded hover:bg-elevated hover:text-parchment",
                    )}
                  >
                    {page.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="mt-3 flex flex-col gap-2 border-t border-edge pt-3">
            <a
              href={LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-info-blue/60 px-3 py-2.5 text-sm font-medium text-info-blue"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> {t.footer.joinDiscord}
            </a>
            <a
              href={LINKS.curseforge}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gold px-4 py-2.5 text-sm font-bold text-[#1a0d00]"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> {t.hero.downloadAddon}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
