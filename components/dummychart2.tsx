"use client"

import { Bar, BarChart, XAxis } from "recharts"

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
import { Globe, Globe2Icon, TrendingUp } from "lucide-react"

export const description = "A stacked bar chart with a legend"
export const iframeHeight = "600px"
export const containerClassName =
  "[&>div]:w-full [&>div]:max-w-md flex items-center justify-center min-h-svh"

const chartData = [
  { date: "2026-08-24", intranational: 450, international: 300 },
  { date: "2026-08-25", intranational: 380, international: 420 },
  { date: "2026-08-26", intranational: 520, international: 120 },
  { date: "2026-08-27", intranational: 140, international: 550 },
  { date: "2026-08-28", intranational: 600, international: 350 },
  { date: "2026-08-29", intranational: 480, international: 400 },
]

const chartConfig = {
  intranational: {
    label: "UK",
    color: "var(--chart-1)",
  },
  international: {
    label: "International",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function DummyChart2() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gather geographical data about your clicks</CardTitle>
        <CardDescription>
          Showing data for the week of the 29th of August
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                })
              }}
            />
            <Bar
              dataKey="intranational"
              stackId="a"
              fill="var(--color-intranational)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="international"
              stackId="a"
              fill="var(--color-international)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip

              labelClassName="min-w-32"
        
              content={<ChartTooltipContent />}
              cursor={false}
              defaultIndex={1}

            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}
