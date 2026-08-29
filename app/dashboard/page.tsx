"use client"

import { DashboardCardSkeleton } from "@/components/dashboard-card-skeleton";
import { DashboardCardSkeletonAlt } from "@/components/dashboard-card-skeleton-alt";
import DashboardMenu from "@/components/dashboard-menu";
import { KPIAllTimeClicks } from "./kpi-all-time-clicks";
import { timeout } from "@/lib/timeout-test";
import { useEffect, useState } from "react";


export default function Dashboard() {


  //Getting data for dashboard

  //Fetch 1: All Time Clicks

  //Get todays date.

  //Create a KPIAllTimeClicks object and feed it into the first component




  const [loading, setLoading] = useState<boolean>(true);
  useEffect(()=> {
    // This is a hook made for testing purposes
    const toggleLoading = async () => {
      await timeout(400).then(()=> {
        setLoading(false)
      })
    }
    toggleLoading()
  }, [])

  return(
      <>
        {loading ? // Skeleton Start (true when still loading, false when content is ready)
        <DashboardMenu route={"/dashboard"}>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6"><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /></div>
          <div className="grid auto-rows-min gap-4 h-full md:grid-cols-2"><DashboardCardSkeleton /><div className="flex flex-row md:flex-row h-full gap-4"><DashboardCardSkeletonAlt /><DashboardCardSkeletonAlt /></div></div>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6"><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /><DashboardCardSkeleton /></div>
        </DashboardMenu> //Skeleton End
        : 
        <DashboardMenu route={"/dashboard"}>

          
          <div><KPIAllTimeClicks data={null} /></div>

        </DashboardMenu>}
      </>
  )
}