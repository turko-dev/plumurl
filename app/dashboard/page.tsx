"use client"

import { DashboardCardSkeleton } from "@/components/dashboard-card-skeleton";
import { DashboardCardSkeletonAlt } from "@/components/dashboard-card-skeleton-alt";
import DashboardMenu from "@/components/dashboard-menu";
import { KPIAllTimeClicks } from "./kpi-all-time-clicks";
import { useEffect, useState } from "react";
import KPIClicksToday from "./kpi-clicks-today";
import { DashboardLargeSkeleton } from "@/components/dashboard-large-skeleton";


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
//Date Format Helper Function
  const formatDate = (d: Date): string => {
      const year = d.getFullYear()
      const month = String(d.getMonth() + 1).toString()
      const day = String(d.getDate().toString())
      return `${year}-${month}-${day}`
  }

  const [dashboardData, setDashboardData] = useState<DashboardDataConfig | null>(null)

  const getDashboardData = () => { //This function gets the dashboard data for the whole dashboard.
    // setDashboardData({
    //   clicksToday: [10, 20, 231, 412, 120, 214]
    // })

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
        {date: "2025-01-09", clicks: 10},
        {date: "2025-01-10", clicks: 110},
        {date: "2025-01-11", clicks: 105},
        {date: "2025-01-12", clicks: 1110},
        {date: "2026-01-01", clicks: 10113},
      ]
    }
    setDashboardData(temp)

  }
  const valid = () => {
    return dashboardData?.clicksToday === undefined || dashboardData?.clicksToday === null
  }

  const [loading, setLoading] = useState<boolean>(false);
  useEffect(()=> {
    // This is a hook made for testing purposes
    getDashboardData()
  }, [])

  return(
      <>
        {loading  ? // Skeleton Start (true when still loading, false when content is ready)
        <DashboardMenu route={"/dashboard"}>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6"><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /></div>
          <div className="grid auto-rows-min gap-4 h-full md:grid-cols-2"><DashboardCardSkeleton /><div className="flex flex-row md:flex-row h-full gap-4"><DashboardCardSkeletonAlt /><DashboardCardSkeletonAlt /></div></div>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6"><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /></div>
        </DashboardMenu> //Skeleton End
        :   
        <DashboardMenu route={"/dashboard"}>
          

          {valid() ? <DashboardLargeSkeleton/> : <div><KPIAllTimeClicks /></div>}
          <div></div>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          
            {valid() ? <DashboardCardSkeleton /> : <KPIClicksToday inputData={dashboardData?.clicksToday} />}

          </div>
          
        </DashboardMenu>}
      </>
  )
}