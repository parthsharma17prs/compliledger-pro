"use client";

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const services = [
    { id: '01', title: 'Continuous Compliance', tools: 'Agentic AI / OSCAL / NIST', desc: 'Automated monitoring of systems and policies to ensure persistent adherence to regulatory standards through continuous posture verification.' },
    { id: '02', title: 'AI-Driven Analysis', tools: 'LLM / Reasoning Agents / Python', desc: 'Agentic AI that autonomously maps, classifies, and tests compliance requirements against complex system metadata and configurations.' },
    { id: '03', title: 'ZK Evaluation', tools: 'Aleo / Leo / ZKPs', desc: 'Validating security controls using Zero-Knowledge Proofs, allowing compliance logic to execute privately without revealing sensitive data.' },
    { id: '04', title: 'Immutable Anchoring', tools: 'Algorand / Zcash / Blockchain', desc: 'Creating a tamper-proof audit trail by anchoring verification events across distributed ledgers for permanent, provable assurance.' },
];

export default function WhatWeDo() {
    const [openId, setOpenId] = useState<string | null>(null);
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="py-40 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden">

            {/* Ambient Red Splash Background Logic */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <AnimatePresence>
                    {hoveredId && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.15 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="absolute bg-accent w-[600px] h-[600px] rounded-full blur-[120px]"
                            style={{
                                left: hoveredId === '01' ? '10%' : hoveredId === '02' ? '40%' : hoveredId === '03' ? '60%' : '80%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                        />
                    )}
                </AnimatePresence>
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32 relative z-10">
                <div className="flex flex-col gap-4 w-full md:w-1/3">
                    <span className="text-accent font-bebas text-sm tracking-[0.4em] uppercase">Expertise</span>
                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl font-normal font-bebas tracking-tighter uppercase leading-[0.8]"
                    >
                        WHat <br /> <span className="text-white/20">We Do</span>
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl font-normal text-white/50 max-w-xl leading-relaxed mt-auto"
                >
                    We transform creative vision into reality. Partnering with forward-thinking agencies and ambitious brands to craft premium digital experiences.
                </motion.p>
            </div>

            <div className="w-full border-t border-white/10 relative z-10">
                {services.map((service, idx) => (
                    <ServiceRow
                        key={service.id}
                        service={service}
                        idx={idx}
                        isOpen={openId === service.id}
                        isHovered={hoveredId === service.id}
                        onToggle={() => setOpenId(openId === service.id ? null : service.id)}
                        onHover={() => setHoveredId(service.id)}
                        onLeave={() => setHoveredId(null)}
                    />
                ))}
            </div>
        </section>
    );
}

function ServiceRow({ service, idx, isOpen, isHovered, onToggle, onHover, onLeave }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onToggle}
            className={`border-b border-white/10 transition-all duration-700 cursor-pointer overflow-hidden group ${isHovered ? 'bg-white/[0.02]' : ''}`}
        >
            <div className={`py-12 md:py-20 flex items-center justify-between px-4 transition-all duration-500 ease-in-out`}>
                <div className="flex items-center gap-8 md:gap-24 overflow-hidden">
                    <span className={`text-2xl font-bebas transition-colors duration-500 ${isHovered || isOpen ? 'text-accent' : 'text-white/20'}`}>
                        {service.id}
                    </span>
                    <h3 className={`text-5xl md:text-9xl font-normal font-bebas uppercase tracking-tighter transition-all duration-700 leading-none ${isOpen || isHovered ? 'text-white' : 'text-white/40'}`}>
                        {service.title}
                    </h3>
                </div>

                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0, scale: isHovered ? 1.2 : 1 }}
                    className={`w-14 h-14 md:w-20 md:h-20 border rounded-full flex items-center justify-center transition-all duration-500 ${isOpen || isHovered ? 'border-accent bg-accent text-black' : 'border-white/20 text-white/20'}`}
                >
                    <span className="text-3xl md:text-5xl font-light">+</span>
                </motion.div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, y: -20 }}
                        animate={{ height: 'auto', opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-20 pl-16 md:pl-44 flex flex-col md:flex-row gap-12 md:gap-24 justify-between pr-12">
                            <p className="text-2xl md:text-4xl font-normal text-white/80 max-w-3xl leading-tight font-bebas uppercase tracking-tight">
                                {service.desc}
                            </p>
                            <div className="flex flex-col gap-4 border-l border-accent/30 pl-8 min-w-[300px]">
                                <span className="text-accent text-xs uppercase tracking-[0.4em] font-black">Expertise Tools</span>
                                <span className="text-xl md:text-2xl font-normal font-bebas uppercase tracking-widest text-white/60">
                                    {service.tools}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
