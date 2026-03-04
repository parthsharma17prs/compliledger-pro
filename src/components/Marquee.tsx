"use client";

import { motion } from 'framer-motion';

export default function Marquee({ text }: { text: string }) {
    // Duplicate the text multiple times to ensure seamless scrolling
    const fullText = text.repeat(10);

    return (
        <div className="w-full border-t border-b border-white/10 bg-white text-black py-6 md:py-8 overflow-hidden relative flex">
            <motion.div
                className="whitespace-nowrap flex font-normal font-bebas text-4xl md:text-6xl lg:text-8xl uppercase tracking-tighter pl-4 gap-16 md:gap-32"
                animate={{ x: [0, -2000] }}
                transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
            >
                {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-16 md:gap-32">
                        <span>{text}</span>
                        <span className="text-accent opacity-30">•</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
