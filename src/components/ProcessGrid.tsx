"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const steps = [
    { id: '01', title: 'Ingest Securely', desc: 'Instead of full data access, we ingest minimal metadata, control signals, and configuration fingerprints.' },
    { id: '02', title: 'Analyze Automatically', desc: 'AI agents map and classify compliance requirements, identifying gaps and testing controls autonomously.' },
    { id: '03', title: 'Prove Cryptographically', desc: 'Leverage ZKPs to validate controls are operating correctly without revealing the underlying sensitive data.' },
    { id: '04', title: 'Anchor Immutably', desc: 'Verification events are anchored across distributed ledgers for permanent, tamper-proof proof of compliance.' }
];

export default function ProcessGrid() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section className="py-32 px-6 md:px-12 bg-black text-white w-full border-t border-white/10">

            <div className="flex justify-between items-end mb-24 overflow-hidden">
                <motion.h2
                    initial={{ y: 100 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-9xl font-normal font-bebas tracking-tighter uppercase flex items-baseline gap-4"
                >
                    HOW WE <span className="text-accent underline underline-offset-[20px] decoration-accent/20">WORK</span>
                </motion.h2>

                <p className="text-white/20 text-xs font-black uppercase tracking-[0.4em] hidden md:block pb-4">Our Collaborative Process</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
                {steps.map((step, idx) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className={`group relative p-8 h-[350px] md:h-[400px] border-r border-b border-white/10 flex flex-col justify-between cursor-pointer overflow-hidden transition-colors duration-500`}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        animate={{
                            backgroundColor: hoveredIdx === idx ? 'var(--accent)' : 'transparent',
                            color: hoveredIdx === idx ? '#fff' : '#fff'
                        }}
                    >
                        <div className="text-xl md:text-2xl font-bold opacity-50 relative z-10 transition-opacity">
                            {step.id}
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4 tracking-tighter">
                                {step.title}
                            </h3>

                            <motion.p
                                className="text-lg md:text-xl font-medium"
                                animate={{
                                    opacity: hoveredIdx === idx ? 1 : 0.6,
                                }}
                            >
                                {step.desc}
                            </motion.p>
                        </div>

                        {/* Background Arrow that scales up on hover */}
                        <motion.div
                            className="absolute top-8 right-8 text-8xl md:text-[150px] font-thin opacity-0 -rotate-45 pointer-events-none"
                            animate={{
                                opacity: hoveredIdx === idx ? 0.2 : 0,
                                x: hoveredIdx === idx ? 0 : -20,
                                y: hoveredIdx === idx ? 0 : 20,
                                scale: hoveredIdx === idx ? 1 : 0.5
                            }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            →
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
