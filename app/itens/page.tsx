import type { Metadata } from "next"
import { WikiPageShell } from "@/components/wiki-page-shell"
import { ItemsSection } from "@/components/items-section"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Itens — TerraNova Wiki",
  description: "Itens notáveis do TerraNova: domar, montaria, comando, armas e cerco.",
}

export default function ItensPage() {
  return (
    <WikiPageShell>
      <Reveal>
        <ItemsSection />
      </Reveal>
    </WikiPageShell>
  )
}
