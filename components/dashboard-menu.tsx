import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DashboardSidebar } from "./dashboard-sidebar"

export default function DashboardMenu({route, children}: {route: string, children?: React.ReactNode}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "12rem",
        } as React.CSSProperties
      }
    >
      <DashboardSidebar route={route} />
      <SidebarInset className="">
        <header className="flex h-14 shrink-0 items-center justify-between gap-2 px-4">
          <div className="flex flex-row gap-4 items-center">
            <SidebarTrigger className="-ml-1" />
          </div>
          {/* <ResourcesNavbar /> */}

        </header>
        
        <div className="w-full min-h-screen flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
