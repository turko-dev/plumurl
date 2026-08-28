
import PlumSidebar from "@/components/plum-sidebar";
import Navbar from "@/components/navbar";
import Page from "@/components/page";
import PageContent from "@/components/pagecontent";
import { SidebarInset } from "@/components/ui/sidebar";


export default function GettingStartedWorkflow() {
    return (
            <Page>
                <Navbar />
                <PageContent>

                    
                    <PlumSidebar route="/getting-started/workflow">
                         <SidebarInset>
                            <div className="flex mt-14 flex-1 flex-col gap-4 p-4">
                            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                                <div className="aspect-video rounded-xl bg-muted/50" />
                                <div className="aspect-video rounded-xl bg-muted/50" />
                                <div className="aspect-video rounded-xl bg-muted/50" />
                            </div>
                            <div className="min-h-screen flex-1 rounded-xl bg-muted/50 md:min-h-min" />
                            </div>
                        </SidebarInset>
                    </PlumSidebar>


                </PageContent>
            </Page>
    )
}