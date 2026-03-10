"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import GiantText from '@/components/GiantText';
import FeaturedWorks from '@/components/FeaturedWorks';
import WhatWeDo from '@/components/WhatWeDo';
import ProcessGrid from '@/components/ProcessGrid';
import MetricGrid from '@/components/MetricGrid';
import CounterSection from '@/components/CounterSection';
import SystemBlueprint from '@/components/SystemBlueprint';
import CoreManifesto from '@/components/CoreManifesto';
import TeamPortraits from '@/components/TeamPortraits';
import GoodWords from '@/components/GoodWords';
import Awards from '@/components/Awards';
import LabNotes from '@/components/LabNotes';
import StickySection from '@/components/StickySection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-black text-white selection:bg-accent selection:text-black"
      >
        <Navbar />
        <Hero />
        <Marquee text="Provable Compliance  •  Zero Data Exposure  •  Zero-Knowledge Proofs  •  " />
        <WhatWeDo />
        <MetricGrid />
        <CounterSection />
        <ProcessGrid />

        <SystemBlueprint />

        <GiantText text="+COMPLILEDGER®" />

        <StickySection index={1}>
          <FeaturedWorks />
        </StickySection>

        <StickySection index={2}>
          <CoreManifesto />
        </StickySection>

        <StickySection index={3}>
          <Awards />
        </StickySection>

        <StickySection index={4}>
          <TeamPortraits />
        </StickySection>

        <StickySection index={5}>
          <GoodWords />
        </StickySection>

        <StickySection index={6}>
          <LabNotes />
        </StickySection>

        <CallToAction />
        <Footer />
      </motion.main>
    </>
  );
}
