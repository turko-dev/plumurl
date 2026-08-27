"use client"
import Autoplay from "embla-carousel-autoplay"


import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"



import { Separator } from "@/components/ui/separator"



export function BasicCarousel() {

    let data: React.ReactNode[] = [
        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="leading-none font-medium">Click Tracking</div>
                    <div className="text-muted-foreground">Count the amount of clicks each link gets.</div>
                </div>
        <Separator />
        </div>,

        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="leading-none font-medium">Time-series analytics</div>
                    <div className="text-muted-foreground">Clicks over time (hourly, daily, weekly).</div>
                </div>
        <Separator />
        </div>,

        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="leading-none font-medium">Geolocation data</div>
                    <div className="text-muted-foreground">Country, region, or city where clicks originate.</div>
                </div>
        <Separator />
        </div>,

        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="leading-none font-medium">Device & platform information</div>
                    <div className="text-muted-foreground">Desktop/mobile, OS, browser, search engine.</div>
                </div>
        <Separator />
        </div>,

        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="leading-none font-medium">Referrer tracking</div>
                    <div className="text-muted-foreground">Where clicks came from (social, email, direct, etc).</div>
                </div>
        <Separator />
        </div>,

        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="leading-none font-medium">Campaign-level aggregation</div>
                    <div className="text-muted-foreground">Group links into campaigns for roll-up anaytics.</div>
                </div>
        <Separator />
        </div>,
        
        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="leading-none font-medium">UTM parameter builder</div>
                    <div className="text-muted-foreground">Auto-append or manage UTM tags for marketing purposes.</div>
                </div>
        <Separator />
        </div>,

        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="leading-none font-medium">Scheduled launch page</div>
                    <div className="text-muted-foreground">Set a date and time to change your long URL.</div>
                </div>
        <Separator />
        </div>,

    ]

  return (
    <Carousel
      opts={{
        align: "center",
      }}
      plugins={[
        Autoplay({
          delay: 1700, stopOnMouseEnter: true, stopOnInteraction: false
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {Array.from(data).map((reactNode, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex lg:aspect-square sm:aspect-16/9 xl:aspect-16/9 aspect-square  items-center justify-center p-6">
                  <div className="w-full h-full">
                   {reactNode}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
