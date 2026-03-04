"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function GiantText({ text }: { text: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Dramatic Scaling from smallish to "filling the frame"
    const scale = useTransform(scrollYProgress, [0, 0.7], [0.5, 2.5]);

    // Smooth transition from scaling to swiping up
    // Once it reaches 70% scroll, it starts moving up fast
    const y = useTransform(scrollYProgress, [0.7, 1], [0, -400]);

    // Fading out at the very end
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

    return (
        <section ref={containerRef} className="h-[250vh] w-full bg-black relative">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale, y, opacity }}
                    className="flex flex-col items-center justify-center"
                >
                    <motion.h2
                        className="text-[20vw] font-normal font-bebas tracking-tighter uppercase whitespace-nowrap text-white"
                        transition={{ ease: "easeOut" }}
                    >
                        {text}
                    </motion.h2>

                    {/* Visual Depth Accents - adds to the "attractive" requirement */}
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.4]) }}
                        className="mt-4 flex gap-8 items-center text-accent/50 font-bebas text-2xl uppercase tracking-[1em]"
                    >
                        <span>CRAFTING</span>
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <span>FUTURE</span>
                    </motion.div>
                </motion.div>

                {/* Background "Glow" that expands with the text */}
                <motion.div
                    style={{
                        scale: useTransform(scrollYProgress, [0, 0.8], [0.8, 1.5]),
                        opacity: useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 0.1, 0])
                    }}
                    className="absolute inset-0 bg-accent rounded-full blur-[150px] -z-10"
                />
            </div>
        </section>
    );
}
