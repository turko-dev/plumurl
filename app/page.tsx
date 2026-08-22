import Page from "@/components/page";
import Navbar from "@/components/navbar";
import PageContent from "@/components/pagecontent";
import HeroForm from "@/components/hero-form";
export default function Home() {
  return (
      <Page>
        <Navbar />
        <PageContent>
          <HeroForm>

          </HeroForm>

          <div className="w-full h-screen"></div>
        
        </PageContent>
      </Page>
  );
}
