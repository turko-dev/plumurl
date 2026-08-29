"use client"

import * as React from "react"

import { QrCode,AppWindow,Link,CirclePoundSterling,Bolt} from "lucide-react"
import {Sidebar,SidebarContent,SidebarFooter,SidebarTrigger} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import Logo from "./ui/logo"
import { useIsMobile } from "@/hooks/use-mobile"


const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: AppWindow,
    },
    {
      title: "URLs",
      url: "/dashboard/urls",
      icon: Link,
    },
    {
      title: "QR Codes",
      url: "/dashboard/qr-codes",
      icon: QrCode,
    },
    {
      title: "Billing",
      url: "/dashboard/billing",
      icon: CirclePoundSterling,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Bolt,
    },
  ],
}

export function DashboardSidebar({ route, ...props }:  {route:string, props?: React.ComponentProps<typeof Sidebar>}) {
    const isMobile = useIsMobile()
    return (
    <Sidebar collapsible="offcanvas" {...props}>
        <header className="flex h-14 shrink-0 items-center justify-baseline gap-2 px-4">
            {isMobile ? <SidebarTrigger className="-ml-1" /> : null}
            <Logo></Logo>
        </header>
      <SidebarContent>
        <NavMain route={route} items={data.navMain} />
{/* 

        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}

        
      </SidebarFooter>
    </Sidebar>
  )
}
