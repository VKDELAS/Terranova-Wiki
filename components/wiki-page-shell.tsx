import type { ReactNode } from "react"
import { WikiSidebar } from "@/components/wiki-sidebar"

export function WikiPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex max-w-7xl gap-10 px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
      <WikiSidebar />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}
