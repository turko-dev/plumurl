"use client"




import { CirclePlus, LibraryBig, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

export function NavMain({
  items, route
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
  }[], route: string
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton className="min-w-8 bg-primary cursor-pointer text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground">
              <CirclePlus />
              <span className="shimmer font-mono">Shorten URL</span>
            </SidebarMenuButton>


            <Tooltip>
              <TooltipTrigger delay={0} render={
                <a href="/resources">
                <Button size="icon" className="size-8 group-data-[collapsible=icon]:opacity-0" variant="outline">
                  <LibraryBig strokeWidth={2} color={"var(--primary-foreground)"} />
                </Button></a>
              } />
              <TooltipContent className="text-primary-foreground font-mono text-sm">
                View Resources
              </TooltipContent>
            </Tooltip>
            
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <a href={item.url} key={item.title}><SidebarMenuItem >
              <SidebarMenuButton isActive={route == item.url} tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            </a>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
