import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { TrendingUp } from "lucide-react"
import { DummyCalendar } from "./dummycalendar"

export function DummyCard1() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Give your short URL behaviours</CardTitle>
        <CardDescription>Change short URL destination on a specific day</CardDescription>
      </CardHeader>
      <CardContent className="h-full mb-6 lg:mb-0">
        <DummyCalendar ></DummyCalendar>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 lg:text-xs xl:text-sm text-sm hidden lg:flex">
        <div className="flex gap-2 leading-none font-medium">
          Current destination is <span className="blur-xs select-none">https://longurl.thatneedsto/be-shortened/UK</span>
        </div>
        <div className="leading-none text-muted-foreground">
          Changing destination to <span className="blur-xs select-none">https://anotherlong.url/that-needs-to/be-shortened/UK</span>
        </div>
      </CardFooter>
    </Card>
    
  )
}
