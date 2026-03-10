"use client";

import { motion } from 'framer-motion';

const team = [
    { name: 'AXON v1.0', role: 'Chief Inference Engine', status: 'ACTIVE', bio: 'Specializing in recursive compliance mapping and automated risk classification across multi-cloud architectures.', img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2074&auto=format&fit=crop', id: 'AGNT_09A' },
    { name: 'SIGMA 0x', role: 'ZK Infrastructure Lead', status: 'STABLE', bio: 'Pioneering the application of PLONK and Halo2 circuits for private, high-throughput regulatory state verification.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop', id: 'AGNT_42B' },
    { name: 'KRONOS', role: 'Immutability Architect', status: 'ONLINE', bio: 'Expert in distributed ledger anchoring and cryptographic time-stamping for permanent audit integrity.', img: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop', id: 'AGNT_11X' },
];

export default function TeamPortraits() {
    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden xl:pl-32">

            <div className="flex flex-col md:flex-row justify-between items-end mb-32 relative z-10 border-l border-white/5 pl-12 font-bebas">
                <div className="flex flex-col gap-4">
                    <span className="text-accent-lime text-sm tracking-[0.4em] uppercase flex items-center gap-4">
                        Personnel <span className="text-white/10 text-[10px] tracking-widest font-sans">// AGENTIC_LEADERSHIP</span>
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tighter uppercase leading-[0.8]">
                        CORE <br /> <span className="text-white/20">FOUNDERS</span>
                    </h2>
                </div>
                <div className="text-right flex flex-col items-end gap-2 opacity-20">
                    <span className="text-xs uppercase tracking-widest font-black">Directory: PERSONNEL_RECORDS</span>
                    <span className="text-[10px] font-mono">HASH: 0x902_ALPHA_NODES</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full h-[800px] md:h-[650px] gap-4 relative z-10 border-l border-white/5 pl-4 md:pl-12 group/container">
                {team.map((member, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative flex-1 md:hover:flex-[3] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden rounded-3xl cursor-pointer bg-neutral-900 border border-white/10 md:hover:border-accent/40 flex flex-col justify-between p-6 md:p-10"
                    >
                        {/* Background Image */}
                        <img
                            src={member.img}
                            className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-125 group-hover:scale-100"
                            alt={member.name}
                        />
                        {/* Dark gradient overlay so text is readable */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-40 transition-all duration-[800ms]" />

                        {/* Top Meta info */}
                        <div className="flex justify-between items-start relative z-10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black font-mono text-white/50 tracking-tighter">{member.id}</span>
                            </div>
                            <div className={`px-2 py-0.5 rounded-sm border text-[9px] font-black uppercase tracking-tighter ${member.status === 'ACTIVE' ? 'border-accent-lime text-accent-lime bg-accent-lime/5' : 'border-white/20 text-white/40'}`}>
                                {member.status}
                            </div>
                        </div>

                        {/* Bottom Content */}
                        <div className="relative z-10 flex flex-col gap-2">
                            <h3 className="text-4xl md:text-5xl lg:text-7xl font-normal font-bebas uppercase tracking-tighter text-white group-hover:text-white transition-colors duration-500 whitespace-nowrap">
                                {member.name}
                            </h3>
                            {/* Description hidden until hover (on desktop) */}
                            <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                                <div className="overflow-hidden">
                                    <div className="pt-2 md:pt-4 flex flex-col gap-4">
                                        <span className="text-accent font-bebas text-xl md:text-2xl uppercase tracking-widest">{member.role}</span>
                                        <p className="text-white/70 text-sm md:text-base font-light leading-relaxed font-sans border-l border-white/20 pl-4 max-w-sm whitespace-normal">
                                            {member.bio}
                                        </p>

                                        <div className="mt-4 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/80 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                            <span>Access Profile</span>
                                            <span className="text-lg">→</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}

