"use client"
import { DashboardCardSkeleton } from "@/components/dashboard-card-skeleton";
import { DashboardCardSkeletonAlt } from "@/components/dashboard-card-skeleton-alt";
import DashboardMenu from "@/components/dashboard-menu";
import { KPIAllTimeClicks } from "./kpi-all-time-clicks";
import { useEffect, useState } from "react";
import KPIClicksToday from "./kpi-clicks-today";
import { DashboardLargeSkeleton } from "@/components/dashboard-large-skeleton";
import { KPIGeography } from "./kpi-geography";
import { KPIBrowser } from "./kpi-browser";
import { KPIComingSoon } from "./kpi-coming-soon";
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"
import { supabase } from "@/lib/supabase";

type _ClicksToday = {
  clicks: number
}
type _AllTimeClicks = {
  date: string, 
  clicks: number
}
type DashboardDataConfig = {
  clicksToday: _ClicksToday[],
  allTimeClicks: _AllTimeClicks[]
}

export default function Dashboard() {

  //dashboardData has all data for the user's links
  const [dashboardData, setDashboardData] = useState<DashboardDataConfig | null>(null)

  const getDashboardData = () => { //This function gets the dashboard data for the whole dashboard.
    //ALLTIMECLICKS DATA NEEDS TO BE COMPILED TO MONTHS BEFORE PUTTING INTO DASHBOARD DATA

    let temp = {
      clicksToday: [
        {clicks: 10},
        {clicks: 101},
        {clicks: 140},
        {clicks: 101},
        {clicks: 150},
        {clicks: 103},
      ],
      allTimeClicks: [
        {date: "2025-01-05", clicks: 100},
        {date: "2025-01-06", clicks: 1000},
        {date: "2025-01-07", clicks: 1500},
        {date: "2025-01-08", clicks: 1200},
        {date: "2026-01-05", clicks: 10},
        {date: "2026-01-06", clicks: 110},
        {date: "2026-01-07", clicks: 105},
        {date: "2026-01-08", clicks: 1110},
        {date: "2026-01-09", clicks: 10113},
      ],
      geography: {
        
      },
      browsers: [

      ]
    }
    setDashboardData(temp)
  }

  //Validate 
  const valid = (attr: any) => {return attr === undefined || attr === null}

  const [loading, setLoading] = useState<boolean>(false);
  const [auth, setAuth] = useState<boolean>(false)
  
  const authenticate = async () => {
    const {data} = await supabase.auth.getUser()
    if(data.user != null) setAuth(true)
    else window.location.href = "/log-in"
  }
  useEffect(()=> {
    // This is a hook made for testing purposes
    getDashboardData()
    authenticate()
  }, [])
  const addToast = (description: string, type: 'success' | 'error' | 'info') => {
    toast.add({ description: description, type:type})
  }
  return auth && (
      <>
        {loading  ? // Skeleton Start (true when still loading, false when content is ready)
        <DashboardMenu route={"/dashboard"}>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6"><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /></div>
          <div className="grid auto-rows-min gap-4 h-full md:grid-cols-2"><DashboardCardSkeleton /><div className="flex flex-row md:flex-row h-full gap-4"><DashboardCardSkeletonAlt /><DashboardCardSkeletonAlt /></div></div>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6"><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /></div>
        </DashboardMenu> //Skeleton End
        :
        <DashboardMenu route={"/dashboard"}>
          {valid(dashboardData?.allTimeClicks) ? <DashboardLargeSkeleton/> : <div><KPIAllTimeClicks inputData={dashboardData?.allTimeClicks} /></div>}
          <div></div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {valid(dashboardData?.clicksToday) ? <DashboardCardSkeleton /> : <KPIClicksToday inputData={dashboardData?.clicksToday} />}
            {valid(dashboardData?.clicksToday) ? <DashboardCardSkeleton /> : <KPIGeography />}
            {valid(dashboardData?.clicksToday) ? <DashboardCardSkeleton /> : <KPIBrowser />}
            <KPIComingSoon />
          </div>
          <Button onClick={()=> addToast("Hi there", "success")}>Add</Button>
        </DashboardMenu>}
      </>
  )
}