"use client"

import { DashboardCardSkeleton } from "@/components/dashboard-card-skeleton";
import { DashboardCardSkeletonAlt } from "@/components/dashboard-card-skeleton-alt";
import DashboardMenu from "@/components/dashboard-menu";
import { KPIAllTimeClicks } from "./kpi-all-time-clicks";
import { timeout } from "@/lib/timeout-test";
import { useEffect, useState } from "react";
type KPIAllTimeClicksConfig = {
  date: string,
  allTimeClicks: number
}
type DashboardDataConfig = {
  allTimeClicks: KPIAllTimeClicksConfig[]
}

export default function Dashboard() {

  const formatDate = (d: Date): string => {
      const year = d.getFullYear()
      const month = String(d.getMonth() + 1).toString()
      const day = String(d.getDate().toString())
      return `${year}-${month}-${day}`
    }


  //Getting data for dashboard

  //Fetch 1: All Time Clicks

  //Get todays date.

  //Create a KPIAllTimeClicks object and feed it into the first component

  const createAllTimeClicksData1Year = () => { //Creates AllTimeClicks Data for global dashboard data state
    const today = new Date()
    const data: KPIAllTimeClicksConfig[] = Array.from({ length: 13 }, (_, i) => {
      const offset = 12 - i
      const date = new Date(today.getFullYear(), today.getMonth() - offset, 1)
      return {
        date: formatDate(date),
        allTimeClicks: 0
      }
    })
      return data
  }



  const createAllTimeClicksDataQuarterly = () => {
    const today = new Date();
    const data: KPIAllTimeClicksConfig[] = Array.from({ length: 13 }, (_, i) => {
      const offset = (4 - i) * 3;
      const date = new Date(today.getFullYear(), today.getMonth() - offset, 1);
      return {
        date: formatDate(date),
        allTimeClicks: 0,
      };
    });
    return data;
  };

  const createAllTimeClicksDataCustom = (
  startDate: string,
  endDate: string,
  stepInMonths: number
) => {
  const parseDate = (dateString: string): Date => {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  const data: KPIAllTimeClicksConfig[] = [];
  let current = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate()
  );

  while (current <= end) {
    data.push({
      date: formatDate(current),
      allTimeClicks: 0,
    });

    current = new Date(
      current.getFullYear(),
      current.getMonth() + stepInMonths,
      current.getDate()
    );
  }

  return data;
};

  

  const [dashboardData, setDashboardData] = useState<DashboardDataConfig>({
    allTimeClicks: createAllTimeClicksDataCustom("2024-10-5", "2025-10-5", 2)
  })


  const getDashboardData = () => { //This function gets the dashboard data for the whole dashboard.
    console.log(dashboardData)
  }



  const [loading, setLoading] = useState<boolean>(true);
  useEffect(()=> {
    // This is a hook made for testing purposes
    const toggleLoading = async () => {
      await timeout(400).then(()=> {
        setLoading(false)
      })
    }
    toggleLoading()
    getDashboardData()

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

          <div><KPIAllTimeClicks chartData={dashboardData.allTimeClicks} /></div>

        </DashboardMenu>}
      </>
  )
}