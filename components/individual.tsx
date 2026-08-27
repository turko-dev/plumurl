import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Badge } from "./ui/badge"

export function IndividualHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger delay={10} closeDelay={100} render={<span className="shimmer underline underline-offset-2">the individual</span>} />
      <HoverCardContent className="flex w-64 flex-col gap-1.5">
        <div className="flex flex-row justify-baseline items-center gap-1.5">
        <div className="font-semibold">Mert Aygun</div>
        <Badge variant="outline">Author of PlumURL</Badge>
        </div>
        <div>An individual who likes quality software, just like you.</div>
        <div className="mt-1 text-xs text-muted-foreground">
          Written on August 27th 2026
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
