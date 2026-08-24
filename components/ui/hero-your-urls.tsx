"use client"
import * as React from 'react'


import { Button } from "@/components/ui/button"
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
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {  CloudIcon } from 'lucide-react'
import { Input } from './input'

export default function HeroYourURLs() {
    
    
    return(
         <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline">View My URLs</Button>} />
      <DrawerContent>
        <DrawerHeader className="shimmer" >
          <DrawerTitle className="text-lg">Nothing here yet.</DrawerTitle>
          <DrawerDescription>You don't have any URLs at the moment.</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
          <div className="rounded-2xl flex-col flex justify-center items-center group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:h-80 group-data-[swipe-axis=y]/drawer-popup:w-full">
                {/* <div className="p-4 w-full max-w-114 flex gap-2 flex-col sm:flex-row justify-baseline items-center">
                        
                        <Button variant="outline">Shorten URL</Button>
                    </div>
                    <p className="">Error Msg</p> */}
          
          
                    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <CloudIcon />
        </EmptyMedia>
        <EmptyDescription>
          Paste your long URL here and we'll create a unique short URL for you.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
         <div className="w-full flex gap-2 flex-row justify-baseline items-center">
        <Input
                            type="url"
                            placeholder="https://long.url/example/foobar"
                        />
        <Button variant="outline">
          Shorten URL
        </Button>

         </div>
      </EmptyContent>
    </Empty>
          </div>
          
        </div>
        <DrawerFooter className="w-full h-fit flex justify-center items-center">
          <DrawerClose render={
                <Button>Close</Button>
        } />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    )
}