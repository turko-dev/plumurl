import Page from "@/components/page";
import Navbar from "@/components/navbar";
import PageContent from "@/components/pagecontent";
import HeroForm from "@/components/hero-form";
import Section from "@/components/section";

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { SearchIcon } from "lucide-react";


export default function Home() {
  return (
      <Page>
        <Navbar />
        <PageContent>
          <HeroForm></HeroForm>
          <Section direction="row">
            <div className="flex w-full flex-col gap-12 py-12">
            <Marker>
              <MarkerContent><h1 className="font-mono text-lg">So, I can shorten thousands of links. All for free?</h1></MarkerContent>
            </Marker>
            <Marker variant="separator">
              <MarkerIcon><SearchIcon /></MarkerIcon>
              <MarkerContent className="font-mono text-md">Up to 2,400 URLs</MarkerContent>
            </Marker>
            <div className="min-h-screen flex w-full flex-col gap-4 p-4 bg-primary rounded-xl"></div>
            
            </div>

          </Section>

        
        </PageContent>
      </Page>
  );
}
