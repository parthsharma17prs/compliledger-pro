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
import Awards from '@/components/Awards';
import LabNotes from '@/components/LabNotes';
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
        <ProcessGrid />
        <FeaturedWorks />
        <GiantText text="+PROOF®" />
        <Awards />
        <LabNotes />
        <Footer />
      </motion.main>
    </>
  );
}
