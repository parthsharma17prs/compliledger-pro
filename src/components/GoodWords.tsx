"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const testimonials = [
    {
        id: 1,
        text: "The transformation was radical and instant. Their design thinking gave us a new identity we never imagined possible.",
        author: "JANE D.",
        company: "ACME CORP.",
        logo: "Logo_01"
    },
    {
        id: 2,
        text: "Efficiency meets aesthetics. My business conversion jumped by 140% after the relaunch. Simply incredible.",
        author: "MIKE SMITH",
        company: "TECH_TITAN",
        logo: "Logo_02"
    },
    {
        id: 3,
        text: "Not just designers, but partners in every sense. The bold approach they take is exactly what we needed to stand out.",
        author: "SARA J.",
        company: "MODERN LABS",
        logo: "Logo_03"
    },
    {
        id: 4,
        text: "Visionaries of the digital age. They redefined how our customers interact with the platform.",
        author: "TONY STARK",
        company: "STARK IND.",
        logo: "Logo_04"
    }
];

export default function GoodWords() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Move the whole row horizontally as we scroll past
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

    // States for hover reveal
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section
            ref={containerRef}
            className="w-full bg-black text-white px-6 md:px-12 py-40 overflow-hidden relative"
        >
            {/* Background Massive Accent Text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                <h2 className="text-[25vw] font-normal font-bebas uppercase leading-none">+TRUSTED_BY</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                <motion.h2
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-9xl font-normal font-bebas uppercase leading-tight"
                >
                    GOOD <span className="text-accent underline underline-offset-[16px] decoration-accent/10 italic">WORDS</span>
                </motion.h2>
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/20 select-none">←</div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xs text-white/20 select-none">→</div>
                </div>
            </div>

            {/* Horizontal Scroll Row */}
            <div className="relative w-full">
                <motion.div
                    style={{ x }}
                    className="flex gap-8 cursor-grab active:cursor-grabbing w-max"
                >
                    {testimonials.map((test, idx) => (
                        <motion.div
                            key={test.id}
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            className="w-[400px] md:w-[600px] h-[500px] md:h-[600px] bg-[#0A0A0A] border border-white/5 rounded-[4rem] p-12 md:p-16 flex flex-col justify-between relative group overflow-hidden transition-all duration-700"
                        >
                            {/* Hover Reveal Highlight */}
                            <motion.div
                                animate={{
                                    opacity: hoveredIdx === idx ? 1 : 0,
                                    scale: hoveredIdx === idx ? 1 : 0.9
                                }}
                                className="absolute inset-0 bg-accent transition-all duration-700 pointer-events-none z-0"
                            />

                            <div className="relative z-10 flex flex-col gap-12">
                                <span className={`text-xs font-black uppercase tracking-[0.6em] ${hoveredIdx === idx ? 'text-black' : 'text-accent'} transition-colors duration-500`}>
                                    {test.logo}
                                </span>

                                <p className={`text-3xl md:text-[2.5rem] font-black leading-[1.1] uppercase tracking-tighter ${hoveredIdx === idx ? 'text-white' : 'text-white/80'} transition-all duration-500`}>
                                    "{test.text}"
                                </p>
                            </div>

                            <div className="relative z-10 flex justify-between items-end">
                                <div className="flex flex-col gap-2">
                                    <h4 className={`text-3xl font-normal font-bebas uppercase tracking-widest ${hoveredIdx === idx ? 'text-black' : 'text-white'}`}>{test.author}</h4>
                                    <span className={`text-[10px] uppercase tracking-[0.3em] font-black ${hoveredIdx === idx ? 'text-black/40' : 'text-white/20'}`}>{test.company}</span>
                                </div>
                                <div className={`w-12 h-12 rounded-full border ${hoveredIdx === idx ? 'border-black/20 text-black' : 'border-white/10 text-white/40'} flex items-center justify-center transition-all duration-500`}>
                                    "
                                </div>
                            </div>

                            {/* Decorative Grid on Hover */}
                            <div className={`absolute top-0 right-0 w-32 h-32 border-l border-b ${hoveredIdx === idx ? 'border-black/10' : 'border-white/5'} transition-all`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indication Line */}
            <div className="mt-24 w-full h-[1px] bg-white/5 relative">
                <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="absolute inset-0 bg-accent origin-left"
                />
            </div>
        </section>
    );
}
