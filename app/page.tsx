import Page from "@/components/page";
import Navbar from "@/components/navbar";
import PageContent from "@/components/pagecontent";
import HeroForm from "@/components/hero-form";
import Section from "@/components/section";

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { SearchIcon } from "lucide-react";
import { DummyChart1 } from "@/components/dummychart1";
import { DummyChart2 } from "@/components/dummychart2";


export default function Home() {
  return (
      <Page>
        <Navbar />
        <PageContent>
          <HeroForm></HeroForm>
          <Section direction="row">
            <div className="flex w-full flex-col gap-12 py-12">
            <Marker className="shimmer">
              <MarkerContent><h1 className="font-mono text-lg">So, I can shorten thousands of links. All for free?</h1></MarkerContent>
            </Marker>
            <Marker className="shimmer" variant="separator">
              <MarkerIcon><SearchIcon /></MarkerIcon>
              <MarkerContent className="font-mono text-md">Up to 2,400 URLs</MarkerContent>
            </Marker>
            <div className="min-h-fit w-full grid grid-cols-2 gap-4">
             <DummyChart1></DummyChart1>
             <DummyChart2></DummyChart2>

            </div>
            </div>

          </Section>

        
        </PageContent>
      </Page>
  );
}
