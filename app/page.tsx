import { HeroSection } from "@/components/hero-section"
import { ChangelogSection } from "@/components/changelog-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6">
        <ChangelogSection />
      </div>
    </>
  )
}
