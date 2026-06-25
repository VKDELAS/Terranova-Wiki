export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-heading text-3xl font-bold text-parchment sm:text-4xl">{children}</h2>
      <div className="mt-3 h-px w-20 bg-gold" />
    </div>
  )
}
