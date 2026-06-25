import type { Metadata } from "next"
import { WikiPageShell } from "@/components/wiki-page-shell"
import { BiomesSection } from "@/components/biomes-section"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Territórios — TerraNova Wiki",
  description: "Os biomas de Terra, onde encontrá-los e seus recursos.",
}

export default function TerritoriosPage() {
  return (
    <WikiPageShell>
      <Reveal>
        <BiomesSection />
      </Reveal>
    </WikiPageShell>
  )
}
