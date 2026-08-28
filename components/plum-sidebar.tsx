import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function PlumSidebar({route, children}: {route: string, children: React.ReactNode}) {
   


  return (
    <SidebarProvider>
      <AppSidebar route={route} />
      {children}
     
    </SidebarProvider>
  )
}
