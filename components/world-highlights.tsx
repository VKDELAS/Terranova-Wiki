"use client"

import Image from "next/image"
import Link from "next/link"
import { Flame, Map, PawPrint, ArrowRight, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n"

export function WorldHighlights() {
  const { t } = useLanguage()
  const cards = t.highlights.cards

  const HIGHLIGHTS = [
    {
      href: "/criaturas",
      image: "/featured-dragons.png",
      icon: Flame,
      count: "3",
      title: cards.dragons.title,
      description: cards.dragons.description,
      cta: cards.dragons.cta,
      span: true,
    },
    {
      href: "/territorios",
      image: "/featured-biomes.png",
      icon: Map,
      count: "10+",
      title: cards.biomes.title,
      description: cards.biomes.description,
      cta: cards.biomes.cta,
    },
    {
      href: "/criaturas",
      image: "/featured-creatures.png",
      icon: PawPrint,
      count: "15+",
      title: cards.creatures.title,
      description: cards.creatures.description,
      cta: cards.creatures.cta,
    },
  ]

  return (
    <section id="destaques" className="scroll-mt-24 py-12">
      <SectionHeading>
        {t.highlights.headingA} <span className="bloom-gold">TerraNova</span>
      </SectionHeading>

      <p className="-mt-4 mb-8 max-w-2xl text-pretty leading-relaxed text-faded">
        {t.highlights.intro1} <span className="bloom-green font-semibold">{t.highlights.introStrong}</span>
        {t.highlights.intro2}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {HIGHLIGHTS.map((item, i) => {
          const Icon = item.icon
          return (
            <Reveal
              key={item.title}
              delay={i * 120}
              className={item.span ? "sm:col-span-2" : undefined}
            >
              <Link
                href={item.href}
                className="highlight-card shimmer-on-hover group block h-full rounded-xl border border-edge bg-surface"
              >
                <div
                  className={`relative w-full overflow-hidden rounded-t-xl ${item.span ? "h-56 sm:h-64" : "h-44"}`}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="hc-img object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  <span className="stat-chip absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-deep/80 px-3 py-1 text-sm font-bold text-gold backdrop-blur-sm">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {item.count}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-xl font-bold text-parchment bloom-soft sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-faded">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-transform group-hover:translate-x-1">
                    {item.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>

      {/* Community call-out with bloom */}
      <Reveal delay={120}>
        <div className="bloom-halo mt-6 flex flex-col items-center gap-3 rounded-xl border border-gold/30 bg-deep/60 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <span className="float-slow flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
              <Sparkles className="h-5 w-5 text-gold" aria-hidden="true" />
            </span>
            <p className="text-pretty leading-relaxed text-parchment">
              {t.highlights.calloutA}{" "}
              <span className="bloom-gold font-semibold">{t.highlights.calloutStrong}</span>
              {t.highlights.calloutEnd}
            </p>
          </div>
          <Link
            href="/changelog"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-gold px-5 py-2.5 font-bold text-[#1a0d00] transition-transform hover:scale-105"
          >
            {t.highlights.viewChangelog}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
