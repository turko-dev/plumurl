
import PlumSidebar from "@/components/plum-sidebar";
import Navbar from "@/components/navbar";
import Page from "@/components/page";
import PageContent from "@/components/pagecontent";


export default function GettingStartedWorkflow() {
    return (
            <Page>
                <Navbar />
                <PageContent>
                    <PlumSidebar route="/getting-started/workflow" />
                </PageContent>
            </Page>
    )
}