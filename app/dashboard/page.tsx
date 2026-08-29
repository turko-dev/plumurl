import { DashboardCardSkeleton } from "@/components/dashboard-card-skeleton";
import { DashboardCardSkeletonAlt } from "@/components/dashboard-card-skeleton-alt";
import DashboardMenu from "@/components/dashboard-menu";

export default function Dashboard() {
  return(
      <DashboardMenu route={"/dashboard"}>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
          </div>
          <div className="grid auto-rows-min gap-4 h-full md:grid-cols-2">
            <DashboardCardSkeleton />
            <div className="flex flex-row md:flex-row h-full gap-4">
              <DashboardCardSkeletonAlt />
              <DashboardCardSkeletonAlt />
            </div>
          </div>

      </DashboardMenu>
  )
}