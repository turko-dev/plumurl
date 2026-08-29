"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "An interactive line chart"



const chartData = [
  { date: "2023-12-01", allTimeClicks: 0 },
  { date: "2024-01-01", allTimeClicks: 0 },
  { date: "2024-02-01", allTimeClicks: 0 },
  { date: "2024-03-01", allTimeClicks: 0 },
  { date: "2024-04-01", allTimeClicks: 0 },
  { date: "2024-06-01", allTimeClicks: 0 },
  { date: "2024-05-01", allTimeClicks: 0 },
  { date: "2024-07-01", allTimeClicks: 0 },
  { date: "2024-08-01", allTimeClicks: 0 },
  { date: "2024-09-01", allTimeClicks: 0 },
  { date: "2024-10-01", allTimeClicks: 0 },
  { date: "2024-11-01", allTimeClicks: 0 },
  { date: "2024-12-01", allTimeClicks: 0 },
]

const chartConfig = {
  views: {
    label: "All Clicks",
  },
  allTimeClicks: {
    label: "All Clicks",
    color: "var(--chart-1)",
  }
} satisfies ChartConfig

export function KPIAllTimeClicks({data}: {data: any}) {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("allTimeClicks")

  const total = React.useMemo(
    () => (

    {    
      allTimeClicks: chartData.reduce((acc, curr) => 
        
        acc + curr.allTimeClicks, 0
    
    ),
    }),
    []
  )

  return (
    <Card className="py-4 sm:py-0">
      <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-3 sm:pb-0">
          <CardTitle>Line Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["allTimeClicks"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  year:"numeric"
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
