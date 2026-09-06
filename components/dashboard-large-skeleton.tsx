"use client"
import {Card,CardContent,CardFooter,CardHeader,} from "@/components/ui/card"
import {ChartContainer,type ChartConfig,} from "@/components/ui/chart"
import { Skeleton } from "./ui/skeleton"

const chartConfig = {
  views: {
    label: "All Time Clicks",
  },
  allTimeClicks: {
    label: "All Time Clicks",
    color: "var(--chart-1)",
  }
} satisfies ChartConfig


export function DashboardLargeSkeleton() {



    return (
        <Card className="py-4 sm:py-0">
        <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
           

            
        </CardHeader>
        <CardContent  className="min-h-88 px-2 sm:p-6">
            <ChartContainer
                    className="aspect-auto h-62.5 w-full" config={chartConfig}>
                        <div className="flex flex-col gap-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-full aspect-square" />
        </div>
        <div className="flex justify-between flex-col gap-3">
         <Skeleton className="h-4 w-20" />
         <Skeleton className="h-8 w-full" />
       </div>
            </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
         <div className="flex gap-2 leading-none text-xs text-muted-foreground">
         </div>
       </CardFooter>
        </Card>
    )
}
