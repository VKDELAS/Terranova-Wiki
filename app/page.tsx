import { HeroSection } from "@/components/hero-section"
import { WorldHighlights } from "@/components/world-highlights"

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6">
        <WorldHighlights />
      </div>
    </>
  )
}
