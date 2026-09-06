import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function KPIComingSoon() {
  return (
    <Card className="w-full max-h-md lg:hidden">
      <CardHeader>
        <Skeleton className="h-4 w-2/3" />
        <p className="text-neutral-300">More metrics coming soon...</p>
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full" />
      </CardContent>
    </Card>
  )
}
