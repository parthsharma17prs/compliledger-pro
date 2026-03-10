"use client";

import { motion } from 'framer-motion';

const partners = [
    { year: 'ANCHOR', title: 'Algorand Protocol', project: 'Immutable Audit Anchoring', img: 'https://framerusercontent.com/images/m1X3CPZ5JCv6sVqH5a9SzUuuXTo.jpg', status: 'SYNCHRONIZED' },
    { year: 'PRIVACY', title: 'Aleo Network', project: 'Private ZK Computation', img: 'https://framerusercontent.com/images/r0qjn23eNOAVLQfk3TzhfFjNhe4.jpg', status: 'ACTIVE_NODE' },
    { year: 'PROOF', title: 'Zcash Protocol', project: 'Confidential Attestations', img: 'https://framerusercontent.com/images/VT310qn9CgKuOTrXFOLhZALciE.png', status: 'VALIDATING' },
    { year: 'OSCAL', title: 'NIST Standards', project: 'Standardized Compliance', img: 'https://framerusercontent.com/images/WmDGeUasQkCARkfUExK22qAlDFc.png', status: 'STANDARDIZED' },
    { year: 'REGULATORY', title: 'ISO/IEC Frameworks', project: 'Global Compliance Mapping', img: 'https://framerusercontent.com/images/8rcXl0j3NquReHM8SwF3VK8zQ.png', status: 'CERTIFIED' },
    { year: 'TRUST', title: 'Ethereum Foundation', project: 'Smart Contract Assurance', img: 'https://framerusercontent.com/images/VT310qn9CgKuOTrXFOLhZALciE.png', status: 'OPERATIONAL' },
];

export default function Awards() {
    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden xl:pl-32">

            {/* Phase Indicator */}
            <div className="absolute left-6 top-60 hidden xl:flex flex-col items-center gap-12 z-20">
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Distribution Phase</span>
                <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <span className="text-accent font-bebas text-2xl tracking-tighter tabular-nums">004</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8 relative z-10 border-l border-white/5 pl-12">
                <div className="flex flex-col gap-4">
                    <span className="text-accent font-bebas text-sm tracking-[0.4em] uppercase flex items-center gap-4">
                        Ecosystem <span className="text-accent-lime text-[10px] tracking-widest font-sans">// SHARED_RESOURCES</span>
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal font-bebas tracking-tighter uppercase leading-[0.8]">
                        NETWORK & <br /> <span className="text-white/20">PARTNERS</span>
                    </h2>
                </div>

                <p className="text-xl md:text-2xl text-white/50 max-w-sm leading-relaxed font-light">
                    Leveraging <span className="text-white">world-class</span> blockchain protocols and regulatory frameworks to deliver <span className="text-accent-lime">provable</span> compliance.
                </p>
            </div>

            <div className="flex flex-col border-t border-l border-white/5 relative z-10 w-full">
                {partners.map((partner, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="group border-r border-b border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:bg-accent/[0.05] hover:pl-16 transition-all duration-700 relative overflow-hidden"
                    >
                        {/* Background Reveal */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none">
                            <img src={partner.img} className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105" alt="" />
                        </div>
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-cover mix-blend-overlay" />

                        <div className="flex items-center gap-12 w-full md:w-1/3 relative z-10">
                            <span className="text-accent font-bebas text-3xl md:text-5xl tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity duration-500">/{partner.year}</span>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-sm border border-white/5 group-hover:border-accent/40 transition-colors duration-500">
                                <div className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/80">{partner.status}</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full md:w-1/3 relative z-10">
                            <h3 className="text-4xl md:text-6xl font-normal font-bebas uppercase tracking-tighter text-white group-hover:text-accent group-hover:drop-shadow-[0_0_15px_rgba(100,116,139,0.8)] transition-all duration-500">
                                {partner.title}
                            </h3>
                            <p className="text-xl font-bebas text-white/40 uppercase tracking-tight leading-none italic group-hover:text-white/80 transition-colors duration-500">
                                {partner.project}
                            </p>
                        </div>

                        <div className="mt-8 md:mt-0 relative z-10 flex items-center justify-end w-full md:w-1/3">
                            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:bg-accent group-hover:border-accent group-hover:text-black group-hover:scale-110 transition-all duration-500 shadow-[0_0_0_rgba(100,116,139,0)] group-hover:shadow-[0_0_30px_rgba(100,116,139,0.5)]">
                                <span className="text-2xl">→</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

