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
import { Spinner } from "@/components/ui/spinner"

export const description = "A line chart"

const chartConfig = {
  clicks: {
    label: "Clicks",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

type _ClicksToday = {
  clicks: number
}

export default function KPIClicksToday({inputData}: {inputData: _ClicksToday[] | null | undefined}) {
  if(inputData !== null && inputData !== undefined) {
      const createTotalLinksData = () => {
      const now = new Date();
      return Array.from({ length: 6 }, (_, index) => {
        const d = new Date(now);
        d.setHours(now.getHours() - (5 - index));
        return {
          time: `${d.getHours().toString()}:00`,
          clicks: inputData[index].clicks,
        };
      });
    };
    const chartData = createTotalLinksData()
 
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
             data={chartData}
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
               tickFormatter={(value) => value.slice(0, 5)}
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
       <CardFooter className="flex-col items-start gap-2 text-sm">
         <div className="flex gap-2 leading-none text-xs text-muted-foreground">
           Lorem ipsum dolor sit amet.
         </div>
       </CardFooter>
       
     </Card>
   )

 }
}
