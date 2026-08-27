

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
import { Badge } from "./ui/badge"
import { IndividualHoverCard } from "./individual"



              
export function CoreFeaturesCarousel() {

    let data: React.ReactNode[] = [
        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="leading-none font-medium">800 URLs</div>
                    <div className="text-muted-foreground">With PlumURL Free, get up to 800 URLs.</div>
                </div>
        <Separator />
        
        </div>,

        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="leading-none font-medium">Short URL Social Cards</div>
                    <div className="text-muted-foreground">Add social cards to your shortened URLs.</div>
                </div>
        <Separator />
        </div>,

        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="flex flex-row gap-1.5 justify-baseline items-center">
                        <div className="leading-none font-medium">Evolving Alias Length</div>
                        <Badge variant="secondary">Rare Offer</Badge>
                    </div>
                    <div className="text-muted-foreground">Utilise ultra-short URL aliases starting from 1 character.</div>
                </div>
        <Separator />
        </div>,

        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="leading-none font-medium">Add Custom Alias</div>
                    <div className="text-muted-foreground">Add your own alias to your short URL.</div>
                </div>
        <Separator />
        </div>,

        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="flex flex-row gap-1.5 justify-baseline items-center">
                        <div className="leading-none font-medium text-primary shimmer">Unlimited URLs</div>
                        <Badge variant="default">PlumURL Ultra</Badge>
                    </div>
                    <div className="text-muted-foreground">Get unlimited URLs with our ultra plan.</div>
                </div>
        <Separator />
        </div>,

        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
            <div className="flex flex-col gap-1.5">
                    <div className="flex flex-row gap-1.5 justify-baseline items-center">
                        <div className="leading-none font-medium text-primary shimmer">APIs</div>
                        <Badge variant="default">PlumURL Ultra</Badge>
                    </div>
                    <div className="text-muted-foreground gap-2 flex">Create short URLs in your application.</div>
            </div>
            <Separator />
        </div>,

        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
            <div className="flex flex-col gap-1.5">
                <div className="flex flex-row gap-1.5 justify-baseline items-center">
                        <div className="leading-none font-medium text-primary shimmer">Ultra Plan</div>
                        <Badge variant="default">PlumURL Ultra</Badge>
                </div>
                <div className="text-muted-foreground">Made affordable for you, <IndividualHoverCard />, not the enterprise.</div>
            </div>
        <Separator />
        </div>,
        <div className="flex h-full max-w-sm flex-col gap-4 text-sm justify-center">
                <div className="flex flex-col gap-1.5">
                    <div className="flex flex-row gap-1.5 justify-baseline items-center">
                        <div className="leading-none font-medium">Scheduled launch page</div>
                        <Badge variant="outline">Soon</Badge>
                </div>
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
          delay: 2000, stopOnMouseEnter: true, stopOnInteraction: false
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {Array.from(data).map((reactNode, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex lg:aspect-square sm:aspect-16/9 xl:aspect-16/9 aspect-square items-center justify-center p-6">
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
