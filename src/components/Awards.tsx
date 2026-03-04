"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const awards = [
    { year: '2025', title: 'Awwwards – Site of the Day', project: 'Neozen', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800' },
    { year: '2024', title: 'FWA – Cutting Edge', project: 'Aerosound', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' },
    { year: '2024', title: 'Red Dot – Identity', project: 'Rently', img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800' },
    { year: '2023', title: 'CSSDA – Innovation', project: 'Pulse UI', img: 'https://images.unsplash.com/photo-1558655146-dbf53316982a?auto=format&fit=crop&q=80&w=800' },
    { year: '2023', title: 'D&AD – Graphite', project: 'NexGen', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800' },
];

export default function Awards() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="py-32 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden"
        >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
                <div className="flex flex-col gap-4">
                    <span className="text-accent font-bebas text-sm tracking-[0.4em] uppercase">Recognition</span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal font-bebas tracking-tighter uppercase leading-[0.8]">
                        AWARDS & <br /> <span className="text-white/20">RECOGNITION</span>
                    </h2>
                </div>

                <p className="text-xl text-white/50 max-w-sm leading-relaxed font-sans">
                    Pushing the boundaries of digital aesthetics and functional excellence since 2018.
                </p>
            </div>

            <div className="w-full border-t border-white/10">
                {awards.map((award, idx) => (
                    <AwardRow
                        key={idx}
                        award={award}
                        isHovered={hoveredIdx === idx}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                    />
                ))}
            </div>

            {/* Floating Image Reveal Logic */}
            <motion.div
                className="fixed pointer-events-none z-50 overflow-hidden rounded-xl w-[400px] h-[250px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
                style={{
                    left: mouseX,
                    top: mouseY,
                    x: "-50%",
                    y: "-50%",
                    scale: hoveredIdx !== null ? 1 : 0,
                    opacity: hoveredIdx !== null ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
            >
                {awards.map((award, i) => (
                    <motion.img
                        key={i}
                        src={award.img}
                        alt={award.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        animate={{ opacity: hoveredIdx === i ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </motion.div>
        </section>
    );
}

function AwardRow({ award, isHovered, onMouseEnter, onMouseLeave }: any) {
    return (
        <motion.div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="group relative flex flex-col md:flex-row items-center justify-between py-12 md:py-16 border-b border-white/10 transition-colors duration-500 ease-in-out hover:bg-white/[0.02]"
        >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-24 w-full md:w-2/3 relative z-10 transition-transform duration-500 group-hover:translate-x-4">
                <span className="text-accent/40 font-bebas text-2xl md:text-3xl tracking-tighter w-24 tabular-nums">
                    {award.year}
                </span>

                <div className="flex flex-col gap-2">
                    <h3 className={`text-3xl md:text-5xl lg:text-6xl font-normal font-bebas uppercase tracking-tighter leading-none transition-all duration-500 ${isHovered ? 'text-accent' : 'text-white'}`}>
                        {award.title}
                    </h3>
                    <span className="text-white/30 font-sans text-sm md:text-base uppercase tracking-widest">
                        Project: {award.project}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-6 mt-8 md:mt-0 relative z-10">
                <motion.div
                    animate={{ rotate: isHovered ? 45 : 0, scale: isHovered ? 1.2 : 1 }}
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center transition-colors duration-500 ${isHovered ? 'bg-accent border-accent text-black' : 'text-white'}`}
                >
                    <span className="text-2xl md:text-3xl">→</span>
                </motion.div>
            </div>

            {/* Background Text Reveal - adds to the "attractive" requirement */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isHovered ? 0.05 : 0, x: isHovered ? 0 : -20 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none text-[8rem] font-black font-bebas tracking-tighter uppercase whitespace-nowrap"
            >
                {award.project}
            </motion.div>
        </motion.div>
    );
}
