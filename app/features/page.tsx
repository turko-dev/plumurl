import PlumSidebar from "@/components/plum-sidebar";
import Navbar from "@/components/navbar";
import Page from "@/components/page";
import PageContent from "@/components/pagecontent";


// WARNING - THIS PAGE IS NOT FOR USE, REDIRECT TO /introduction ALWAYS


export default function Features() {
    return(
        <Page>
            {/* Navbar */}
            <Navbar />
            
            <PageContent>
                <PlumSidebar route="/features" />
            </PageContent>

        </Page>
    )
}