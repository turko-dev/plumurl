import Page from "@/components/page";
import Navbar from "@/components/navbar";
import PageContent from "@/components/pagecontent";
import HeroForm from "@/components/hero-form";
import Section from "@/components/section";

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { ChartLine, Link, SearchIcon } from "lucide-react";
import { DummyChart1 } from "@/components/dummychart1";
import { DummyChart2 } from "@/components/dummychart2";
import { DummyChart3 } from "@/components/dummychart3";
import { DummyCard1 } from "@/components/dummycard1";
import { BasicCarousel } from "@/components/basiccarousel";
import { CoreFeaturesCarousel } from "@/components/corefeaturescarousel";
import { IndividualHoverCard } from "@/components/individual";


export default function Home() {
  return (
      <Page>
        <Navbar />
        <PageContent>

          {/* Hero Section */}
          <HeroForm></HeroForm>

          {/* Core Features Section */}
          <Section direction="row">
            <div className="flex w-full flex-col gap-12 py-12">
              <Marker className="shimmer"><MarkerContent><h1 className="font-mono text-lg">So, I can shorten hundreds of links. All for free?</h1></MarkerContent></Marker>
              <Marker className="shimmer" variant="separator">
                <MarkerIcon><Link /></MarkerIcon>
                <MarkerContent className="font-mono text-md">Up to 800 URLs</MarkerContent>
              </Marker>
              <CoreFeaturesCarousel />
            </div>
          </Section>

          
          {/* Analytics Section */}
          <Section direction="row">
            <div className="flex w-full flex-col gap-12 py-12">
            <Marker className="shimmer justify-end"><MarkerContent><h1 className="font-mono text-lg">And I get hundreds of different analytics from my clicks?</h1></MarkerContent></Marker>
            <Marker className="shimmer" variant="separator">
              <MarkerIcon><ChartLine /></MarkerIcon>
              <MarkerContent className="font-mono text-md">60+ types of analytical feedback</MarkerContent>
            </Marker>
            <div className="min-h-fit w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              <DummyChart1></DummyChart1>
              <DummyChart2></DummyChart2>
              <DummyChart3></DummyChart3>
              <DummyCard1></DummyCard1>
            </div>
            <BasicCarousel/>
            </div>
          </Section>

        
        </PageContent>
      </Page>
  );
}
