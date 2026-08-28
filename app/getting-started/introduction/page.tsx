
import PlumSidebar from "@/components/plum-sidebar";
import Navbar from "@/components/navbar";
import Page from "@/components/page";
import PageContent from "@/components/pagecontent";


export default function GettingStartedIntroduction() {
    return (
            <Page>
                <Navbar />
                <PageContent>
                    <PlumSidebar route="/getting-started/introduction" />
                </PageContent>
            </Page>
    )
}