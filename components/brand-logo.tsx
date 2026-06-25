import Image from "next/image"
import { cn } from "@/lib/utils"

const LOGO_SRC = "/terranova-logo.png"
const LOGO_RATIO = 4.73 // intrinsic 3994 x 844

type LogoSize = "sm" | "md" | "lg"

/** Rendered height (px) per size — width derives from the aspect ratio. */
const HEIGHTS: Record<LogoSize, number> = {
  sm: 28,
  md: 40,
  lg: 132,
}

/** Pixel-art TerraNova wordmark logo. */
export function BrandLogoMark({
  size = "sm",
  animated = false,
  className,
}: {
  size?: LogoSize
  animated?: boolean
  className?: string
}) {
  const h = HEIGHTS[size]
  const w = Math.round(h * LOGO_RATIO)
  // For sm/md we lock the rendered height; lg is sized responsively via className.
  const style = size === "lg" ? undefined : { height: h, width: "auto" as const }
  return (
    <Image
      src={LOGO_SRC || "/placeholder.svg"}
      alt="TerraNova"
      width={w}
      height={h}
      priority={size === "lg"}
      className={cn("select-none", size === "lg" ? "h-auto" : "w-auto", animated && "logo-float logo-glow", className)}
      style={style}
    />
  )
}

/** Combined lockup used in the header and footer. */
export function BrandLogo({ className }: { className?: string }) {
  return <BrandLogoMark size="sm" className={className} />
}
