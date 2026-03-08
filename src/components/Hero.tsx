"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function Hero() {
    const textTitle = "Compliance without surveillance";
    const characters = textTitle.split("");

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

    const rotateX = useTransform(springY, [0, 1], [10, -10]);
    const rotateY = useTransform(springX, [0, 1], [-10, 10]);
    const imgX = useTransform(springX, [0, 1], [-20, 20]);
    const imgY = useTransform(springY, [0, 1], [-20, 20]);

    return (
        <section className="relative w-full min-h-screen pt-40 pb-32 px-6 lg:px-12 flex flex-col justify-center overflow-hidden bg-black selection:bg-accent selection:text-black">

            {/* Elegant Background Particles/Glow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.03, 0.08, 0.03],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[15%] -right-[10%] w-[1000px] h-[1000px] bg-accent blur-[200px] rounded-full"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-50 pointer-events-none mix-blend-overlay"></div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-32 relative z-10 w-full max-w-[1800px] mx-auto">
                {/* Left Content */}
                <div className="flex-1 w-full max-w-5xl">
                    <div className="flex items-center gap-4 mb-12 overflow-hidden">
                        <motion.span
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="w-12 h-[1px] bg-accent"
                        />
                        <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                            className="text-accent font-bebas text-sm tracking-[0.5em] uppercase"
                        >
                            Provable Compliance. Zero Data Exposure.
                        </motion.span>
                    </div>

                    <h1 className="text-7xl md:text-[8rem] lg:text-[11.5rem] font-normal font-bebas leading-[0.8] tracking-tighter uppercase">
                        {characters.map((char, index) => (
                            <motion.span
                                key={index}
                                className="inline-block"
                                initial={{ y: "100%", opacity: 0, scale: 0.8 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 1.2,
                                    delay: index * 0.012,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="mt-12 text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed"
                    >
                        Most compliance tools collect data, centralize evidence, and increase risk. CompliLedger works differently. We verify compliance state cryptographically.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 1 }}
                        className="mt-20 flex flex-col md:flex-row gap-12 md:items-center"
                    >
                        <button className="group relative px-12 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-full overflow-hidden transition-all duration-500 hover:text-white">
                            <div className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                            <span className="relative z-10">Explore Infrastructure</span>
                        </button>

                        <div className="flex flex-col gap-1">
                            <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">Anchored By Protocol Partners</span>
                            <div className="flex gap-4 opacity-50">
                                <span className="text-white font-bebas text-lg">Algorand</span>
                                <span className="text-white font-bebas text-lg">Aleo</span>
                                <span className="text-white font-bebas text-lg">Zcash</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Visual */}
                <div className="perspective-[2000px] w-full lg:w-[650px] flex-shrink-0 mt-20 lg:mt-0">
                    <motion.div
                        style={{ rotateX, rotateY }}
                        className="relative h-[700px] lg:h-[850px] overflow-hidden rounded-[4rem] bg-neutral-900 border border-white/10 shadow-[0_80px_150px_-30px_rgba(0,0,0,0.8)]"
                        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    >
                        <motion.img
                            style={{ x: imgX, y: imgY, scale: 1.15 }}
                            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop"
                            alt="Modern Elegance"
                            className="w-full h-full object-cover grayscale opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-accent/20 mix-blend-multiply" />

                        {/* Interactive Floating Card */}
                        <motion.div
                            style={{ x: useTransform(springX, [0, 1], [30, -30]), y: useTransform(springY, [0, 1], [30, -30]) }}
                            className="absolute bottom-12 left-12 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl w-[300px] shadow-2xl"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <span className="text-accent text-[10px] font-black uppercase tracking-widest">Selected Works</span>
                                    <span className="text-white/20 text-xs font-mono">2026.V1</span>
                                </div>
                                <h4 className="text-2xl font-normal font-bebas text-white leading-none">Aesthetic <br /> Precision</h4>
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-accent">
                                    <span className="text-xl">→</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Elegant Background Accents */}
            <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}
