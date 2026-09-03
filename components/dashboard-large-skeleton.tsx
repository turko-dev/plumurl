"use client"
import { Calendar } from "@/components/ui/calendar"
import { useIsMobile } from "@/hooks/use-mobile"
import { MinusIcon, PlusIcon } from "lucide-react"
import {Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
import {CircleQuestionMark,} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import {ChartContainer,ChartTooltip,ChartTooltipContent,type ChartConfig,} from "@/components/ui/chart"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { useEffect } from "react"
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
                    className="aspect-auto h-[250px] w-full" config={chartConfig}>
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
