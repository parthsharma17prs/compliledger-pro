"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function Hero() {
    const textTitle = "PATTERN DIMENSIONS AND MOMENTS THAT CONNECT AND LEAVE A BOLD イメージ.";
    const characters = textTitle.split("");

    // Parallax logic for image
    const mouseX = useMotionValue(0.5); // normalized 0 to 1
    const mouseY = useMotionValue(0.5);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Springy parallax values
    const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

    const rotateX = useTransform(springY, [0, 1], [8, -8]);
    const rotateY = useTransform(springX, [0, 1], [-8, 8]);
    const imgX = useTransform(springX, [0, 1], [-15, 15]);
    const imgY = useTransform(springY, [0, 1], [-15, 15]);

    return (
        <section
            className="relative w-full min-h-screen pt-40 pb-32 px-6 lg:px-12 flex flex-col justify-center overflow-hidden bg-black"
        >
            {/* Ambient Animated Depth Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.15, 0.05],
                        x: [0, 100, 0],
                        y: [0, -100, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] bg-accent blur-[180px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.03, 0.1, 0.03],
                        x: [0, -100, 0],
                        y: [0, 100, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-white blur-[150px] rounded-full"
                />
            </div>

            {/* Premium Animated Top Border */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-28 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent origin-center"
            />

            <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 relative z-10 w-full max-w-screen-2xl mx-auto">

                {/* Left Side: Character Reveal Animation */}
                <div className="flex-1 w-full relative group cursor-default max-w-4xl">
                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-[10rem] font-normal font-bebas leading-[0.85] tracking-tighter"
                    >
                        {characters.map((char, index) => (
                            <motion.span
                                key={index}
                                className="inline-block"
                                initial={{ y: 200, opacity: 0, rotateX: -90 }}
                                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                transition={{
                                    duration: 1.5,
                                    delay: index * 0.015,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 2.2, duration: 1.2, ease: "circOut" }}
                        className="mt-16 flex items-center gap-8 origin-left"
                    >
                        <div className="w-24 h-[1px] bg-accent"></div>
                        <div className="flex flex-col">
                            <p className="text-white/60 text-xs font-black uppercase tracking-[0.6em]">Digital Agency of the Future</p>
                            <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] mt-2">Crafting premium experiences since 2018</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Tilt Parallax Image Wrapper */}
                <div className="perspective-[1000px] w-full lg:w-[550px] flex-shrink-0">
                    <motion.div
                        style={{ rotateX, rotateY }}
                        className="relative h-[650px] lg:h-[750px] overflow-hidden rounded-[3rem] bg-neutral-900 border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] group"
                        initial={{ opacity: 0, y: 150, rotateY: -15 }}
                        animate={{ opacity: 1, y: 0, rotateY: 0 }}
                        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    >
                        <motion.img
                            style={{ x: imgX, y: imgY, scale: 1.1 }}
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                            alt="Visual Craft"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 pointer-events-none" />

                        {/* Interactive Float Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.5 }}
                            className="absolute bottom-12 left-12 right-12 flex items-center justify-between pointer-events-none"
                        >
                            <div className="flex flex-col gap-1 text-white">
                                <span className="text-xs uppercase tracking-[0.3em] font-bold text-accent">Visual Art</span>
                                <span className="text-2xl font-bebas tracking-widest text-white/50 lowercase">© DIMENSION_01</span>
                            </div>
                        </motion.div>

                        {/* Glassmorphic Play/Next Button */}
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 backdrop-blur-3xl rounded-full flex items-center justify-center border border-white/10 hover:bg-accent hover:border-accent hover:text-white transition-all duration-700 cursor-pointer pointer-events-auto group-hover:opacity-100 opacity-0 lg:opacity-0"
                        >
                            <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth={1}>
                                <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>
                    </motion.div>
                </div>

            </div>

            {/* Minimalist Foot Detail */}
            <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.6em] font-black text-white/10 border-t border-white/5 pt-10 gap-6">
                <div className="flex gap-12">
                    <span>Scroll to explore</span>
                    <span className="text-accent/30 tracking-[0.2em] animate-pulse">Available for work</span>
                </div>
                <div className="flex gap-12">
                    <span className="hover:text-white transition-colors cursor-pointer">Instagram</span>
                    <span className="hover:text-white transition-colors cursor-pointer">Dribbble</span>
                    <span className="hover:text-white transition-colors cursor-pointer">Twitter</span>
                </div>
            </div>
        </section>
    );
}
