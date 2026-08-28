"use client"

import * as React from "react"

import { SearchForm } from "@/components/search-form"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon, PlusIcon, MinusIcon } from "lucide-react"

// This is sample data.
type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  route: string
}

export function AppSidebar({ route, ...props }: AppSidebarProps) {
   const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "/getting-started",
      items: [
        {
          title: "Introduction",
          url: "/getting-started/introduction",
        },
        {
          title: "Workflow",
          url: "/getting-started/workflow",
        },
      ],
    },
    {
      title: "Features",
      url: "/features",
      items: [
        {
          title: "Track Clicks",
          url: "/features/track-clicks",
        },
        {
          title: "Custom Alias",
          url: "/features/custom-alias",
        },
        {
          title: "Analytics",
          url: "#",
          
        },
        {
          title: "Caching",
          url: "#",
        },
        {
          title: "Styling",
          url: "#",
        },
        {
          title: "Optimizing",
          url: "#",
        },
        {
          title: "Configuring",
          url: "#",
        },
        {
          title: "Testing",
          url: "#",
        },
        {
          title: "Authentication",
          url: "#",
        },
        {
          title: "Deploying",
          url: "#",
        },
        {
          title: "Upgrading",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
      ],
    },
  ],
}
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="mt-14">
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEndIcon className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">Documentation</span>
                <span className="">v1.0.0</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item: any, index: number) => (
              <Collapsible
                key={item.title}
                defaultOpen={true}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <SidebarMenuButton render={<CollapsibleTrigger />}>
                    {item.title}{" "}
                    <PlusIcon className="ml-auto group-aria-expanded/menu-button:hidden" />
                    <MinusIcon className="ml-auto hidden group-aria-expanded/menu-button:block" />
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item: any) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              isActive={item.url == route}
                              render={<a href={item.url} />}
                            >
                              {item.title}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
