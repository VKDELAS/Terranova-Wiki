import type { Metadata } from "next"
import { WikiPageShell } from "@/components/wiki-page-shell"
import { ChangelogSection } from "@/components/changelog-section"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Changelog — TerraNova Wiki",
  description: "Registros de mudança do addon TerraNova por versão.",
}

export default function ChangelogPage() {
  return (
    <WikiPageShell>
      <Reveal>
        <ChangelogSection />
      </Reveal>
    </WikiPageShell>
  )
}
