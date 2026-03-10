"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Magnetic from './Magnetic';

export default function CallToAction() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const [isHovered, setIsHovered] = useState(false);

    return (
        <section ref={containerRef} className="py-40 md:py-60 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden flex flex-col items-center justify-center">

            {/* Ambient Red Glow on Hover */}
            <motion.div
                animate={{
                    scale: isHovered ? 1.5 : 0.8,
                    opacity: isHovered ? 0.2 : 0
                }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[800px] h-[800px] bg-accent blur-[150px] rounded-full pointer-events-none -z-10"
            />

            <div className="text-center relative z-10">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.4, y: 0 }}
                    viewport={{ once: true }}
                    className="text-accent font-bebas text-sm md:text-xl tracking-[0.6em] uppercase mb-12 block"
                >
                    Secure Your Infrastructure
                </motion.span>

                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative"
                >
                    <Magnetic strength={0.2}>
                        <motion.h2
                            className={`text-7xl md:text-[12rem] lg:text-[16rem] font-normal font-bebas leading-[0.8] tracking-tighter uppercase cursor-pointer transition-all duration-700 ${isHovered ? 'text-white' : 'text-white/20'}`}
                            style={{
                                textShadow: isHovered ? '0 0 80px rgba(100, 116, 139, 0.5)' : 'none'
                            }}
                        >
                            LET'S WORK <br /> <span className={isHovered ? 'text-accent' : 'text-white/20'}>TOGETHER</span>
                        </motion.h2>
                    </Magnetic>
                </div>

                <div className="mt-20 flex flex-col items-center gap-8">
                    <p className="text-white/40 text-lg md:text-2xl font-light max-w-xl">
                        Ready to replace invasive audits with <span className="text-white italic">persistent, cryptographic verification</span>?
                    </p>

                    <Magnetic strength={0.3}>
                        <button className="group relative px-16 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] rounded-full overflow-hidden transition-all duration-500 hover:text-white">
                            <div className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                            <span className="relative z-10">Initialize Connection</span>
                        </button>
                    </Magnetic>
                </div>
            </div>

            {/* Decorative Background Marquee */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.02] pointer-events-none select-none overflow-hidden">
                <motion.div
                    animate={{ x: [0, -2000] }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="flex whitespace-nowrap text-[30rem] font-black font-bebas leading-none uppercase"
                >
                    &nbsp; CONTACT AGENT &nbsp; COMPLIANCE NODE &nbsp; START NODE &nbsp; CONTACT AGENT &nbsp;
                </motion.div>
            </div>
        </section>
    );
}
