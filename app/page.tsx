import { HeroSection } from "@/components/hero-section"
import { ChangelogSection } from "@/components/changelog-section"

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Linha ornamental marcando a divisão entre a hero e o changelog */}
      <div className="relative z-10 flex justify-center">
        <div className="absolute -translate-y-1/2 flex w-full max-w-lg items-center gap-4 px-4 sm:max-w-2xl">
          <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-gold/40 to-gold" />
          <span className="h-2 w-2 rotate-45 bg-gold shadow-[0_0_12px_3px_var(--glow-gold)]" />
          <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-gold/40 to-gold" />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6">
        <ChangelogSection />
      </div>
    </>
  )
}
