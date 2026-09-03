import { Hero } from "@/components/sections/Hero";
import { ServicesStatement } from "@/components/sections/ServicesStatement";
import { PinnedManifesto } from "@/components/sections/PinnedManifesto";
import { About } from "@/components/sections/About";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Difference } from "@/components/sections/Difference";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { Interviews } from "@/components/sections/Interviews";
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
      <ServicesStatement />
      <PinnedManifesto />
      <About />
      <WhatWeDo />
      <Difference />
      <TrackRecord />
      <WhoWeServe />
      <Interviews />
      <ContactCTA />
    </>
  );
}
