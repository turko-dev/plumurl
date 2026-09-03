"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { useState } from "react"

export const description = "A line chart"

const chartData = [
  { time: "Midnight", clicks: 1238 },
  { time: "10:00", clicks: 923 },
  { time: "11:00", clicks: 541 },
  { time: "12:00", clicks: 1835 },
  { time: "12:00", clicks: 1835 },
  { time: "12:00", clicks: 1835 },
  { time: "12:00", clicks: 1835 },
  { time: "12:00", clicks: 1835 },
  { time: "12:00", clicks: 1835 },
  { time: "12:00", clicks: 1835 },
  { time: "12:00", clicks: 1835 },
]

const chartConfig = {
  clicks: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

type KPIClicksToday = {
    time: string,
    clicks: number
}

export default function KPIClicksToday({chartData}: {chartData: any}) {
  
  const [totalClicks, setTotalClicks] = useState<any>({today: 0, yesterday: 0})
  const shouldShowFooter = totalClicks.yesterday > 0 && (totalClicks.today > 0 || totalClicks.yesterday > 0);
  const trendPercentage = totalClicks.yesterday > 0 ? ((totalClicks.today - totalClicks.yesterday) / totalClicks.yesterday) * 100 : 0;

  const CreateClicksTodayData = (): KPIClicksToday[] => {
      const now = new Date();
      
      //Get today's & yesterdays's total clicks
      setTotalClicks({today: 0, yesterday:0})

      return Array.from({ length: 6 }, (_, index) => {
        const date = new Date(now);
        date.setHours(now.getHours() - (5 - index));
        return {
          time: date.getHours().toString().padStart(2, "0"),
          clicks:0,
        };
    })};
  return (
    <Card>
      <CardHeader>
        <CardTitle>Clicks Today</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={CreateClicksTodayData()}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 2)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="clicks"
              type="natural"
              stroke="var(--color-clicks)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      {shouldShowFooter && (
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none text-muted-foreground">
          {trendPercentage > 0 && (
            <>
              Trending up by {trendPercentage.toFixed(1)}% from yesterday
              <TrendingUp className="h-4 w-4" />
            </>
          )}

          {trendPercentage < 0 && (
            <>
              Trending down by {Math.abs(trendPercentage).toFixed(1)}% from yesterday
              <TrendingUp className="h-4 w-4 rotate-180" />
            </>
          )}

          {trendPercentage === 0 && <>No change from yesterday</>}
        </div>
      </CardFooter>
    )}
      
    </Card>
  )
}
