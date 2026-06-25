import type { Metadata } from "next"
import { WikiPageShell } from "@/components/wiki-page-shell"
import { LoreSection } from "@/components/lore-section"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Crônicas — TerraNova Wiki",
  description: "A lore de Terra: o mundo, a linha do tempo, personagens e a Grande Guerra.",
}

export default function LorePage() {
  return (
    <WikiPageShell>
      <Reveal>
        <LoreSection />
      </Reveal>
    </WikiPageShell>
  )
}
