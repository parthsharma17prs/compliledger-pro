"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
    { quote: "CompliLedger didn't just automate our audits; they replaced them with mathematical certainty. Invaluable infrastructure.", author: "Parth Sharma", role: "CTO @ Global FinStream" },
    { quote: "The ZK implementation is the most robust we've seen. We now verify our governance protocols without exposing a single line of sensitive metadata.", author: "Dr. Elena Vance", role: "Head of Infrastructure @ Protocol Labs" },
    { quote: "Finally, a solution that understands enterprise privacy. Persistent verification is the new standard for government standards.", author: "Agent X-90", role: "Security Architect @ Cyber Command" },
    { quote: "Their agentic AI system caught a logic vulnerability in our smart contracts that three human audits missed. Truly next-level.", author: "Satoshi Nakamoto (Simulated)", role: "Lead Dev @ Nexus Protocol" },
    { quote: "The speed of proof generation is breathtaking. We can now run real-time compliance checks across 50,000 nodes simultaneously.", author: "Sarah Jenkins", role: "VP Engineering @ CloudScale" },
    { quote: "CompliLedger is the missing piece in the puzzle of institutional DeFi. Privacy and transparency in perfect harmony.", author: "David Wu", role: "Managing Director @ BlackBlock Capital" },
    { quote: "A revolutionary approach to regulatory technology. They've turned compliance from a bottleneck into a competitive advantage.", author: "Linda Park", role: "General Counsel @ Fintech Global" },
    { quote: "The most significant advancement in compliance since the introduction of SOC2. A complete paradigm shift.", author: "Robert Chen", role: "Head of Risk @ Axiom Bank" },
    { quote: "Immutable audit trails on Algorand provide our stakeholders with unprecedented transparency without compromising our privacy.", author: "Sofia Rodriguez", role: "COO @ Vertigo Assets" },
    { quote: "Zero-Knowledge proofs are the future of digital trust, and CompliLedger is leading the charge with elegant, scalable solutions.", author: "Alan Turing (Legacy AI)", role: "Chief Scientist @ Cipher Labs" },
    { quote: "We've reduced our compliance costs by 70% while improving our security posture by 10x. The ROI is undeniable.", author: "Vikram Desai", role: "CFO @ TechHorizon" },
];


export default function GoodWords() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={sectionRef} className="py-20 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden xl:pl-32">

            <div className="flex flex-col md:flex-row justify-between items-end mb-32 relative z-10 border-l border-white/5 pl-12">
                <div className="flex flex-col gap-4">
                    <span className="text-accent font-bebas text-sm tracking-[0.4em] uppercase flex items-center gap-4">
                        Validation <span className="text-white/10 text-[10px] tracking-widest font-sans">// TRUST_SIGNAL</span>
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-normal font-bebas tracking-tighter uppercase leading-[0.9] py-2">
                        GOOD <br /> <span className="text-white/20">WORDS</span>
                    </h2>
                </div>
            </div>

            <div className="flex flex-col gap-0 relative z-10 border-l border-white/5 pl-12">
                {testimonials.map((t, idx) => (
                    <TestimonialRow
                        key={idx}
                        t={t}
                        idx={idx}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>

        </section>
    );
}

function TestimonialRow({ t, idx, scrollYProgress }: any) {
    // Each row has a different drift speed and direction
    const driftRange = 300 + (idx % 3) * 150;
    const direction = idx % 2 === 0 ? 1 : -1;
    const x = useTransform(scrollYProgress, [0, 1], [-driftRange * direction, driftRange * direction]);
    const y = useTransform(scrollYProgress, [0, 1], [30 * direction, -30 * direction]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="py-16 md:py-24 border-b border-white/10 group cursor-default transition-all duration-700 hover:bg-white/[0.01]"
        >
            <motion.div
                style={{ x, y }}
                className="flex flex-col md:flex-row gap-12 md:gap-24 items-start whitespace-nowrap lg:whitespace-normal"
            >
                <span className="text-accent font-bebas text-2xl lg:text-4xl tabular-nums opacity-20">0{idx + 1}</span>
                <div className="flex flex-col gap-8 max-w-5xl">
                    <p className="text-4xl md:text-5xl lg:text-7xl font-normal font-bebas uppercase leading-[0.85] tracking-tighter group-hover:text-white transition-colors duration-500 text-white/40 italic">
                        "{t.quote}"
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="h-[1px] w-12 bg-accent opacity-30" />
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-bebas uppercase tracking-widest text-white">{t.author}</span>
                            <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">{t.role}</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
