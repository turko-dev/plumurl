"use client"

import * as React from "react"
import {Menu} from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"

import Logo from "./ui/logo"
import { MobileNavbarItem } from "./mobilenavbaritem"
import { Badge } from "./ui/badge"



export function MobileNavbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      showSwipeHandle={true}
      swipeDirection="down"
    >
      <DrawerTrigger render={<Button variant="secondary"><Menu /></Button>} />
      <DrawerContent>
        <DrawerHeader>
          <Logo></Logo>
        </DrawerHeader>

        <div className="flex flex-col justify-baseline items-center gap-4 scroll-fade overflow-y-auto p-4 gap-2">
            <MobileNavbarItem title="Log In" href="/log-in" action={<Badge variant="outline">Log in to PlumURL </Badge>} />
            <MobileNavbarItem title="Sign Up" href="/sign-up" action={<Badge variant="outline">Sign up to PlumURL</Badge>} />
            <MobileNavbarItem title="Features" href="/features/" description="View the vast list of features found on PlumURL." />
            <MobileNavbarItem title="Platform" href="/platform/" description="See what integrations work with the PlumURL platform." />
            <MobileNavbarItem title="Use Cases" href="/use-cases/" description="Explore the use cases of PlumURL." />


        </div>

        <DrawerFooter>
          <a href="/dashboard" className="w-full"><Button className="w-full">Dashboard</Button></a>
          <DrawerClose render={<Button variant="outline">Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
