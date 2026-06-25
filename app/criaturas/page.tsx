import type { Metadata } from "next"
import { WikiPageShell } from "@/components/wiki-page-shell"
import { CreaturesSection } from "@/components/creatures-section"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Criaturas — TerraNova Wiki",
  description: "Dragões, répteis e bestas de Terra: como surgem, domar, montar e seus drops.",
}

export default function CriaturasPage() {
  return (
    <WikiPageShell>
      <Reveal>
        <CreaturesSection />
      </Reveal>
    </WikiPageShell>
  )
}
