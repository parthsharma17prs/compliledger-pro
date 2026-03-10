"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Magnetic from './Magnetic';

export default function Hero() {
    const lines = ["Compliance", "without", "surveillance"];
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

    const rotateX = useTransform(springY, [0, 1], [15, -15]);
    const rotateY = useTransform(springX, [0, 1], [-15, 15]);
    const imgX = useTransform(springX, [0, 1], [-40, 40]);
    const imgY = useTransform(springY, [0, 1], [-40, 40]);

    // Background watermark drift
    const watermarkX = useTransform(scrollYProgress, [0, 1], [0, -400]);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen pt-40 pb-32 px-6 lg:px-12 flex flex-col justify-center overflow-hidden bg-black selection:bg-accent selection:text-black">

            {/* Vertical Phase Indicator */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 z-20">
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Phase // System Baseline</span>
                <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <span className="text-accent font-bebas text-2xl tracking-tighter tabular-nums">001</span>
            </div>

            {/* Background Watermark */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.02] flex items-center">
                <motion.div
                    style={{ x: watermarkX }}
                    className="text-[40rem] font-black font-bebas whitespace-nowrap leading-none uppercase select-none will-change-transform"
                >
                    TRUST_PROTOCOL &nbsp; COMPLIANCE_NODE &nbsp; ZERO_DATA &nbsp;
                </motion.div>
            </div>

            {/* Elegant Background Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.03, 0.08, 0.03],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -right-[5%] w-[1200px] h-[1200px] bg-accent blur-[250px] rounded-full will-change-transform"
                />
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-32 relative z-10 w-full max-w-[1800px] mx-auto xl:pl-24">
                {/* Left Content */}
                <div className="flex-1 w-full max-w-5xl">
                    <div className="flex items-center gap-4 mb-12">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.2, ease: "circOut" }}
                            className="w-12 h-[1px] bg-accent origin-left"
                        />
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-accent font-bebas text-sm tracking-[0.5em] uppercase flex items-center gap-4"
                        >
                            <span>Provable Compliance. Zero Data Exposure.</span>
                            <span className="text-white/10 hidden md:inline">// REF: 0x902_BASELINE</span>
                        </motion.span>
                    </div>

                    <h1 className="text-7xl md:text-[8rem] lg:text-[12rem] font-normal font-bebas leading-[0.8] tracking-tighter uppercase mb-12">
                        {lines.map((line, index) => (
                            <div key={index} className="overflow-hidden relative">
                                <motion.span
                                    className={`inline-block ${line === "surveillance" ? "text-white/20" : "text-white"} relative`}
                                    initial={{ y: "110%", skewY: 10 }}
                                    animate={{ y: 0, skewY: 0 }}
                                    transition={{
                                        duration: 1.4,
                                        delay: index * 0.15,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                >
                                    {line}

                                    {/* Light Sweep Effect for main words */}
                                    {line !== "surveillance" && (
                                        <motion.div
                                            animate={{ left: ['-100%', '200%'] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
                                            className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none"
                                        />
                                    )}
                                </motion.span>
                            </div>
                        ))}
                    </h1>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="text-xl md:text-2xl text-white/50 max-w-xl leading-relaxed font-light"
                        >
                            Most compliance tools <span className="text-white/80">collect data</span>, centralize evidence, and increase risk. CompliLedger works differently. We verify compliance state <span className="text-accent italic font-medium tracking-tight">cryptographically</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="flex flex-col gap-6 justify-end border-l border-white/5 pl-8 md:pl-12"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-black">System Status</span>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                    <span className="text-xl font-bebas text-white uppercase tracking-widest">Protocol Sync Global</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-white font-bebas text-lg opacity-40">Load: 12.4%</span>
                                <span className="text-white font-bebas text-lg opacity-40">Latency: 4ms</span>
                                <span className="text-white font-bebas text-lg opacity-40">Proof: Verified</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                        className="mt-20 flex flex-col md:flex-row gap-12 md:items-center"
                    >
                        <Magnetic strength={0.25}>
                            <button className="group relative px-16 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] rounded-full overflow-hidden transition-all duration-700 hover:text-white">
                                <div className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
                                <span className="relative z-10">Explore Infrastructure</span>
                            </button>
                        </Magnetic>

                        <div className="flex gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                            {["Algorand", "Aleo", "Zcash"].map((p) => (
                                <span key={p} className="text-white font-bebas text-2xl tracking-tighter uppercase">{p}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Visual */}
                <div className="perspective-[2500px] w-full lg:w-[700px] flex-shrink-0 mt-20 lg:mt-0">
                    <motion.div
                        style={{ rotateX, rotateY }}
                        className="relative h-[800px] lg:h-[950px] overflow-hidden rounded-[4rem] bg-neutral-900 border border-white/5 shadow-[0_120px_200px_-50px_rgba(0,0,0,0.9)] will-change-transform"
                        initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    >
                        <motion.img
                            style={{ x: imgX, y: imgY, scale: 1.15 }}
                            src="https://framerusercontent.com/images/klui2LLRQBdbyFubR7YMjvGySA.jpg"
                            alt="Technical Infrastructure"
                            className="w-full h-full object-cover brightness-[0.8] will-change-transform"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-transparent to-accent/5" />

                        {/* Interactive Floating Card */}
                        <motion.div
                            style={{ x: useTransform(springX, [0, 1], [30, -30]), y: useTransform(springY, [0, 1], [30, -30]) }}
                            className="absolute bottom-16 left-16 p-10 bg-black/80 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] w-[380px] shadow-2xl group transition-all duration-700 hover:border-accent/40 will-change-transform"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between items-start">
                                    <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em]">System Node // 0xFE</span>
                                    <span className="text-white/20 text-xs font-mono font-bold tracking-widest">v2.01_PROD</span>
                                </div>
                                <h4 className="text-4xl font-normal font-bebas text-white leading-none tracking-tighter">Cryptographic <br /> <span className="text-accent">Integrity</span></h4>

                                <div className="flex items-center gap-6 mt-4">
                                    <div className="w-14 h-[1px] bg-white/10 group-hover:w-full transition-all duration-700 origin-left" />
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">Online</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        </section>
    );
}

