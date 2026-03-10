"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
    "Web Development",
    "Cyber Security",
    "UI/UX Design",
    "Cloud Solutions",
    "Digital Strategy"
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Prevent scrolling while preloader is active
        document.body.style.overflow = "hidden";

        if (index === words.length - 1) {
            setTimeout(() => {
                document.body.style.overflow = "auto";
                onComplete();
            }, 600);
            return;
        }

        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, 500); // 500ms per word

        return () => clearTimeout(timeout);
    }, [index, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-black text-white"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
        >
            <div className="flex overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.15, ease: "easeInOut" }}
                        className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-accent"
                    >
                        {words[index]}
                    </motion.p>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
