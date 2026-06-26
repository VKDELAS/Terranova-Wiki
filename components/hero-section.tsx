"use client"

import Image from "next/image"
import Link from "next/link"
import { Download, MessageCircle, BookOpen } from "lucide-react"
import { LINKS } from "@/lib/terranova-data"
import { BrandLogoMark } from "@/components/brand-logo"
import { useLanguage } from "@/lib/i18n"

const EMBERS = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.1 + 4) % 100}%`,
  size: 2 + (i % 3),
  duration: 6 + (i % 5),
  delay: i * 0.6,
}))

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 pt-28 text-center">
      {/* Background art */}
      <div className="absolute inset-0 -z-20">
        <Image src="/backgraund.png" alt="" fill priority className="object-cover opacity-50" />
      </div>

      {/* Gradiente de cima pra baixo + fade total no rodapé pra foto "sumir" */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep/70 via-deep/50 to-deep" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-b from-transparent via-deep/80 to-deep" />
      <div className="hero-ember-glow absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-[radial-gradient(ellipse_at_bottom,_var(--glow-gold),_transparent_70%)]" />

      {/* Floating embers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {EMBERS.map((e, i) => (
          <span
            key={i}
            className="ember"
            style={{
              left: e.left,
              width: e.size,
              height: e.size,
              animationDuration: `${e.duration}s`,
              animationDelay: `${e.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Logo centralizada no meio da tela */}
      <div className="flex flex-1 items-center justify-center">
        <h1 className="flex flex-col items-center">
          <span className="sr-only">TerraNova</span>
          <BrandLogoMark
            size="lg"
            animated
            className="logo-pixel-shadow w-[min(90vw,640px)]"
          />
        </h1>
      </div>

      {/* Tagline + CTAs no rodapé da hero */}
      <div className="w-full pb-16">
        <div className="flex items-center justify-center gap-4">
          <span className="hidden h-px w-12 bg-edge sm:block" />
          <p className="max-w-xl text-balance font-heading text-lg italic text-faded sm:text-xl">
            {t.hero.tagline}
          </p>
          <span className="hidden h-px w-12 bg-edge sm:block" />
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={LINKS.curseforge}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 font-bold text-[#1a0d00] transition-transform hover:scale-105 sm:w-auto"
          >
            <Download className="h-5 w-5" aria-hidden="true" /> {t.hero.downloadAddon}
          </a>
          <a
            href={LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-info-blue/60 px-6 py-3 font-medium text-info-blue transition-colors hover:bg-info-blue/10 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" /> {t.hero.joinDiscord}
          </a>
          <Link
            href="/criaturas"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gold/50 px-6 py-3 font-medium text-gold transition-colors hover:bg-gold/10 sm:w-auto"
          >
            <BookOpen className="h-5 w-5" aria-hidden="true" /> {t.hero.exploreWiki}
          </Link>
        </div>
      </div>
    </section>
  )
}
