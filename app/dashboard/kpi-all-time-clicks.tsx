"use client"
import { Calendar } from "@/components/ui/calendar"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  CircleQuestionMark,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {Card,CardContent,CardDescription,CardHeader,CardTitle,} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
type KPIAllTimeClicksConfig = {
  date: string,
  allTimeClicks: number
}
export const description = "A KPI card showing "

const chartConfig = {
  views: {
    label: "All Time Clicks",
  },
  allTimeClicks: {
    label: "All Time Clicks",
    color: "var(--chart-1)",
  }
} satisfies ChartConfig


//Function Export
export function KPIAllTimeClicks({chartData}: {chartData: KPIAllTimeClicksConfig[]}) {

    const [customDateStart, setCustomDateStart] = React.useState<Date | undefined>(new Date())
    const [customDateEnd, setCustomDateEnd] = React.useState<Date | undefined>(new Date())

    const [open, setOpen] = React.useState(false)
    const isMobile = useIsMobile()

    const date = {
        day: new Date().getDate().toString(),
        month: new Date().getMonth().toString(),
        year: new Date().getFullYear().toString()
    }

    //ActiveChart State
    const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("allTimeClicks")
    
    const [label, setLabel] = React.useState("personal")
    


    //Total Reduction of allTimeClicks data
    const total = React.useMemo(() => ({ allTimeClicks: chartData.reduce((acc, curr) => acc + curr.allTimeClicks, 0),}),[])


    return (
        <Card className="py-4 sm:py-0">
        <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
            <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-3 sm:pb-0">
            <CardTitle>Raw All Clicks Data</CardTitle>
            <CardDescription>
                Showing total visitors for the past year
            </CardDescription>
            </div>

            

            
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-center justify-baseline items-stretch">
<ButtonGroup className="p-4 max-sm:w-full sm:justify-center items-center justify-between">
      <ButtonGroup className="hidden sm:flex">
        
        <HoverCard>
          <HoverCardTrigger delay={100} closeDelay={100} render={<Button variant="outline" size="icon" aria-label="">
          <CircleQuestionMark/>
        </Button>} />
          <HoverCardContent side={"bottom"}>
            <div className="flex flex-col gap-2">
                <h1 className="font-heading text-lg">What is this?</h1>
              <p className="text-sm text-neutral-600 font-sans">PlumURL makes it easy to interact with charts by letting you choose your search parameters.</p>
              <p className="text-sm text-neutral-600 font-sans">Choose your incrementation and how far back you want to search.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
        
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Past Year</Button>
        <Button variant="outline">Quarterly</Button>
      </ButtonGroup>
      <ButtonGroup>

        {/* Drawer */}
         <Drawer
      open={open}
      onOpenChange={setOpen}
      showSwipeHandle={isMobile}
      swipeDirection={isMobile ? "down" : "right"}
    >
      <DrawerTrigger render={<Button variant="outline">Custom</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Enter parameters</DrawerTitle>
          <DrawerDescription>
            Enter your start and end date to see all the data on this metric.
          </DrawerDescription>
        </DrawerHeader>
        <div className="hidden sm:flex sm:flex-col flex-row w-full h-full justify-center gap-4 items-center scroll-fade overflow-y-auto p-4">
            {/* Calendar Goes Here */}
            <Calendar
      mode="single"
      selected={customDateStart}
      onSelect={setCustomDateStart}
      className="rounded-lg border"
    />
    <p className="font-sans text-neutral-600">Enter Start Date</p>
        </div>
        <DrawerFooter>
          <Button className="h-[34px]">
            Confirm Delivery Time
          </Button>
          <DrawerClose render={<Button variant="outline">Cancel</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
        {/* <DropdownMenu>
          <DropdownMenuTrigger render={} />
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon />
                Start Date
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                End Date
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon />
                Add to Calendar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListFilterIcon />
                Add to List
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon />
                  Label As...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={label}
                    onValueChange={setLabel}
                  >
                    <DropdownMenuRadioItem value="personal">
                      Personal
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">
                      Work
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">
                      Other
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </ButtonGroup>
    </ButtonGroup>
        



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
