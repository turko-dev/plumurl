"use client"
import { Calendar } from "@/components/ui/calendar"
import { useIsMobile } from "@/hooks/use-mobile"
import { ArrowUpIcon, MinusIcon, PlusIcon } from "lucide-react"
import {Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
import {CircleQuestionMark,} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {Card,CardContent,CardDescription,CardHeader,CardTitle,} from "@/components/ui/card"
import {ChartContainer,ChartTooltip,ChartTooltipContent,type ChartConfig,} from "@/components/ui/chart"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { useEffect } from "react"

export const description = "A KPI card showing "

type KPIAllTimeClicksConfig = { date: string, allTimeClicks: number }
type CustomCalendarConfig = {
  startDate: Date | undefined,
  endDate: Date | undefined,
  stepInWeeks: number,
  msg: string,
  calendarToggle: boolean
}
const chartConfig = {
  
  allTimeClicks: {
    label: "Total Clicks",
    color: "var(--chart-1)",
  }
} satisfies ChartConfig
type _AllTimeClicks = {
  date: string, 
  clicks: number
}


export function KPIAllTimeClicks({inputData}: {inputData: _AllTimeClicks[] | null | undefined}) {
  if(inputData !== null && inputData !== undefined) {


  const firstChar = (s: string) => {
    if(s[0] === "0") {
      return(s.slice(1))
    }
    else {
      return s
    }
  }

  //Date Format Helper Function
  const formatDate = (d: Date): string => {
      const year = d.getFullYear()
      const month = String(d.getMonth() + 1).toString()
      const day = String(d.getDate().toString())
      return `${year}-${month}-${day}`
  }
  
  // Function to create AllTimeClicks data for the past year (12 months + current month)
  const createAllTimeClicksData1Year = () => { //Creates AllTimeClicks Data for global dashboard data state
    const today = new Date()

    
    const data: KPIAllTimeClicksConfig[] = Array.from({ length: 13 }, (_, i) => {
      const offset = 12 - i
      let tempClicks = 0
      const date = new Date(today.getFullYear(), today.getMonth() - offset, 1)
      inputData?.filter(f => {
        if(firstChar(f.date.slice(8,10)) === (date.getMonth() + 1).toString()
        && f.date.slice(0, 4) === (date.getFullYear().toString())
        ) {
          tempClicks = f.clicks
        }

      })
      
      return {
        date: formatDate(date),
        allTimeClicks: tempClicks
      }
    })
      return data
  }

  //  Function to create AllTimeClicks data for quarterly intervals
const createAllTimeClicksDataQuarterly = (): KPIAllTimeClicksConfig[] => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const startYear = currentYear - 4;

  const quarterStarts: Date[] = [];

  for (let year = startYear; year <= currentYear; year++) {
    for (let quarterMonth = 0; quarterMonth < 12; quarterMonth += 3) {
      const quarterStart = new Date(year, quarterMonth, 1);

      if (quarterStart <= today) {
        quarterStarts.push(quarterStart);
      }
    }
  }

  const data: KPIAllTimeClicksConfig[] = quarterStarts.map((quarterStart) => {
    const quarterEnd = new Date(
      quarterStart.getFullYear(),
      quarterStart.getMonth() + 3,
      0
    );

    const allTimeClicks =
      inputData?.reduce((sum, item) => {
        const itemYear = Number(item.date.slice(0, 4));
        const itemDay = Number(item.date.slice(5, 7));
        const itemMonth = Number(item.date.slice(8, 10));

        const itemDate = new Date(itemYear, itemMonth - 1, itemDay);

        return itemDate >= quarterStart && itemDate <= quarterEnd
          ? sum + item.clicks
          : sum;
      }, 0) ?? 0;

    return {
      date: formatDate(quarterEnd),
      allTimeClicks: allTimeClicks,
    };
  });

  return data;
};

const createAllTimeClicksDataCustom = (
  startDate: Date,
  endDate: Date,
  stepInWeeks: number
): KPIAllTimeClicksConfig[] => {
  const data: KPIAllTimeClicksConfig[] = [];

  let current = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );

  const end = new Date(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate()
  );

  while (current <= end) {
    const periodStart = new Date(
      current.getFullYear(),
      current.getMonth(),
      current.getDate()
    );

    const periodEnd = new Date(
      current.getFullYear(),
      current.getMonth(),
      current.getDate() + stepInWeeks * 7 - 1
    );

    const allTimeClicks =
      inputData?.reduce((sum, item) => {
        const itemYear = Number(item.date.slice(0, 4));
        const itemDay = Number(item.date.slice(5, 7));
        const itemMonth = Number(item.date.slice(8, 10));

        const itemDate = new Date(itemYear, itemMonth - 1, itemDay);

        return itemDate >= periodStart && itemDate <= periodEnd
          ? sum + item.clicks
          : sum;
      }, 0) ?? 0;

    data.push({
      date: formatDate(periodStart),
      allTimeClicks,
    });

    current = new Date(
      current.getFullYear(),
      current.getMonth(),
      current.getDate() + stepInWeeks * 7
    );
  }

  return data;
};
  const [chartData, setChartData] = React.useState<KPIAllTimeClicksConfig[]>(createAllTimeClicksData1Year())
  const [chartOption, setChartOption] = React.useState<"1Y" | "Quarterly" | "Custom">("1Y")
  const [customCalendar, setCustomCalendar] = React.useState<CustomCalendarConfig>({
    startDate: undefined,
    endDate: undefined,
    stepInWeeks: 1,
    msg: "",
    calendarToggle: false,
  })
  const calendarProgress = () => {
      if(customCalendar.calendarToggle == false) {setCustomCalendar((prev) => ({...prev, calendarToggle: true}))}
      else {setCustomCalendar((prev) => ({...prev, calendarToggle: false})); 
        setOpen(false)
        if(customCalendar.startDate !== undefined && customCalendar.endDate !== undefined) {
          // pass
          setChartData(createAllTimeClicksDataCustom(customCalendar.startDate, customCalendar.endDate, customCalendar.stepInWeeks))
        }
      }

  }
  const [open, setOpen] = React.useState(false)
  const isMobile = useIsMobile()

  const [openValueStage, setOpenValueStage] = React.useState<"initial" | "final">("initial")
  useEffect(()=> {
    //Record open value in 2 step stage (this is for chart option number 3's use case behaviours)
    if(open == true) setOpenValueStage("final")
    if(openValueStage == "final" && open == false) setOpenValueStage("initial")
    if(customCalendar.startDate && customCalendar.endDate) {setChartOption("Custom")}
    else setChartOption("1Y")
  }, [open])

  //ActiveChart State
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("allTimeClicks")
    
  const [label, setLabel] = React.useState("personal")

  //Total Reduction of allTimeClicks data


  const total = inputData?.reduce((acc, curr) => acc + curr.clicks, 0);


    return (
        <Card className="py-4 sm:py-0">
        <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
            <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-3 sm:pb-0">
            <CardTitle>Raw All Clicks Data</CardTitle>
            <CardDescription>
                {chartOption === "1Y" && "All time clicks data for the past year."}
                {chartOption === "Quarterly" && "All time clicks (quarterly) for the past 5 years."}
                {chartOption === "Custom" && "All time clicks data for the custom date range."}
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
            <Button variant="outline" onClick={()=> {setChartData(createAllTimeClicksData1Year()); setChartOption("1Y")}}>Past Year</Button>
            <Button variant="outline" onClick={()=> {setChartData(createAllTimeClicksDataQuarterly()); setChartOption("Quarterly")}}>Quarterly</Button>
          </ButtonGroup>
          <ButtonGroup>

        {/* Drawer */}
         <Drawer
      open={open}
      onOpenChange={setOpen}
      
      showSwipeHandle={isMobile}
      swipeDirection={isMobile ? "down" : "right"}
    >
      <DrawerTrigger render={<Button variant="outline" onClick={()=> {setChartOption("Custom")}}>Custom</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Enter parameters</DrawerTitle>
          <DrawerDescription>
            Enter your start and end date to see all the data on this metric.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex sm:flex-col flex-col w-full h-full justify-center gap-4 items-center scroll-fade overflow-y-auto p-4">
            {/* Calendar Goes Here */}
            <p className="text-sm text-neutral-500 italic">{customCalendar.calendarToggle ? "Select an end date" : "Select a start date"}</p>
            {customCalendar.calendarToggle == false ?  
            <Calendar
              showOutsideDays
              mode="single"
              selected={customCalendar.startDate}
              onSelect={(date) => {
              setCustomCalendar((prev) => ({...prev, startDate: date}))}}
              className="rounded-lg min-h-75 border"
            /> :  <Calendar
              mode="single"
              selected={customCalendar.endDate}
              onSelect={(date) => {setCustomCalendar((prev) => ({...prev, endDate: date}))}}
              className="rounded-lg min-h-75 border"
            />}
        </div>
        <DrawerFooter>
        <div className="w-full h-fit flex flex-row justify-end items-center">
        <Button onClick={()=> {
          setCustomCalendar({
    startDate: undefined,
    endDate: undefined,
    stepInWeeks: 1,
    msg: "",
    calendarToggle: false,
  })
        }} variant="outline" aria-label="Submit">
            Reset
        </Button>

        </div>
           <div className="flex w-full min-h-12 flex-row justify-between items-center gap-4">
              <p><span className="text-sm text-neutral-500 italic">Step Duration:</span> {customCalendar.stepInWeeks} weeks(s)</p>
              <ButtonGroup
                orientation="horizontal"
                aria-label="Increment or decrement value"
                className="h-fit"
              >
                <Button variant="outline" size="icon" onClick={()=> setCustomCalendar((prev) => ({...prev, stepInWeeks: prev.stepInWeeks + 1}))}>
                  <PlusIcon />
                </Button>
                <Button variant="outline" size="icon" onClick={()=> {
                  if(customCalendar.stepInWeeks > 1) {setCustomCalendar((prev) => ({...prev, stepInWeeks: prev.stepInWeeks - 1}))}
                }}>
                  <MinusIcon />
                </Button>
              </ButtonGroup>
            </div>
          <Button className="h-8.5" onClick={()=> {calendarProgress()}}>
            {customCalendar.calendarToggle ? "I've chosen my end date": "I've chosen my start date"}
          </Button>
          <DrawerClose render={<Button variant="outline">Cancel</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
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
                    <span className="text-xs font-mono text-muted-foreground">
                    {chartConfig[chart].label}
                    </span>
                    <span className="text-lg leading-none font-heading font-bold sm:text-3xl">
                    {total ?? 0}
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
                    day: chartOption == "Custom" ? "numeric" : undefined
                    })
                }}
                />
                <ChartTooltip
                content={
                    <ChartTooltipContent
                    className="w-[150px]"
                    nameKey="allTimeClicks"
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

}
