import { Hero } from "@/components/sections/Hero";
import { PinnedManifesto } from "@/components/sections/PinnedManifesto";
import { About } from "@/components/sections/About";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Difference } from "@/components/sections/Difference";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { LeadershipSpotlight } from "@/components/sections/LeadershipSpotlight";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Seo, orgJsonLd } from "@/components/common/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Landmark Capital — Institutional real estate investing"
        description="Landmark Capital delivers institutional-grade real estate investment and advisory solutions built on expertise, transparency and disciplined execution across India."
        path="/"
        jsonLd={orgJsonLd}
        raw
      />
      <Hero />
      <PinnedManifesto />
      <About />
      <WhatWeDo />
      <Difference />
      <TrackRecord />
      <WhoWeServe />
      <LeadershipSpotlight />
      <ContactCTA />
    </>
  );
}
