"use client";

import { motion } from 'framer-motion';

export default function LabNotes() {
    const posts = [
        {
            id: '01',
            title: 'Proof-Based Compliance: A Shift to State Verification',
            category: 'Infrastructure',
            date: 'Oct 12, 2025',
            img: 'https://framerusercontent.com/images/klui2LLRQBdbyFubR7YMjvGySA.jpg'
        },
        {
            id: '02',
            title: 'Zero-Knowledge Proofs in Regulatory Frameworks',
            category: 'Cryptography',
            date: 'Sep 28, 2025',
            img: 'https://framerusercontent.com/images/WmDGeUasQkCARkfUExK22qAlDFc.png'
        },
        {
            id: '03',
            title: 'Autonomizing Audits: AI in Continuous Assurance',
            category: 'Agentic AI',
            date: 'Sep 15, 2025',
            img: 'https://framerusercontent.com/images/8rcXl0j3NquReHM8SwF3VK8zQ.png'
        },
        {
            id: '04',
            title: 'The Future of Privacy: Secure Compliance Logic',
            category: 'Innovation',
            date: 'Aug 04, 2025',
            img: 'https://framerusercontent.com/images/VT310qn9CgKuOTrXFOLhZALciE.png'
        }
    ];

    return (
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-black via-slate-900/40 to-black text-white w-full border-t border-white/10 relative overflow-hidden xl:pl-32">

            {/* Phase Indicator */}
            <div className="absolute left-6 top-60 hidden xl:flex flex-col items-center gap-12 z-20">
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Archive Phase</span>
                <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <span className="text-accent font-bebas text-2xl tracking-tighter tabular-nums">006</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 relative z-10 border-l border-white/5 pl-12 gap-8">
                <div className="flex flex-col gap-4">
                    <span className="text-accent font-bebas text-sm tracking-[0.4em] uppercase flex items-center gap-4">
                        Deep Insights <span className="text-white/10 text-[10px] tracking-widest font-sans">// THEORY_LAB</span>
                    </span>
                    <motion.h2
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl lg:text-[7rem] font-normal font-bebas tracking-tighter uppercase leading-[0.9] py-2"
                    >
                        INTEL & <br /><span className="bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(100,116,139,0.3)] underline underline-offset-[20px] decoration-accent/40">REPORTS</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col items-end gap-12 text-right">
                    <p className="text-xl text-white/40 max-w-sm font-light leading-relaxed">
                        Philosophy on privacy, cryptography, and the <span className="text-white">autonomous future</span> of regulatory technology.
                    </p>
                    <button className="flex items-center gap-6 text-white font-black uppercase tracking-widest text-xs group">
                        <span className="group-hover:text-accent transition-colors">Enter Archive</span>
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all">
                            <span className="text-2xl">→</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-white/5 relative z-10">
                {posts.map((post, idx) => (
                    <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="group cursor-pointer border-r border-b border-white/10 p-10 hover:bg-accent/[0.05] hover:border-r-accent/30 hover:border-b-accent/30 hover:shadow-[0_0_30px_rgba(100,116,139,0.1)] transition-all duration-700 relative flex flex-col justify-between min-h-[350px] overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none">
                            <img src={post.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-16">
                                <span className="text-white/30 text-2xl font-bebas tracking-tighter">
                                    /{post.id}
                                </span>
                                <span className="text-[10px] font-black text-accent-lime uppercase tracking-widest border border-accent-lime/20 px-3 py-1 rounded-sm bg-accent-lime/5">
                                    {post.category}
                                </span>
                            </div>

                            <h3 className="text-3xl lg:text-4xl font-normal font-bebas uppercase tracking-tighter leading-none group-hover:text-accent transition-colors duration-500">
                                {post.title}
                            </h3>
                        </div>

                        <div className="mt-12 flex items-center justify-between relative z-10 border-t border-accent/20 pt-8">
                            <span className="text-white/20 text-[10px] font-black uppercase tracking-widest">{post.date}</span>
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                                <span className="text-xl">+</span>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

        </section>
    );
}
