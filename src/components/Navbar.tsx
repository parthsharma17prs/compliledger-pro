"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-8 mix-blend-difference"
            >
                <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center">
                    <span className="text-accent">+</span>CompliLedger<sup className="text-sm font-medium">®</sup>
                </Link>

                <button
                    onClick={() => setIsOpen(true)}
                    className="flex flex-col gap-[6px] w-[32px] hover:scale-105 transition-transform"
                >
                    <div className="w-full h-[2px] bg-white"></div>
                    <div className="w-2/3 h-[2px] bg-white self-end"></div>
                </button>
            </motion.nav>

            {/* Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[100] bg-[#111] text-white flex flex-col p-6 md:p-12 overflow-hidden"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <span className="text-2xl font-bold tracking-tight">
                                <span className="text-accent">+</span>CompliLedger<sup className="text-sm font-medium">®</sup>
                            </span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-accent transition-colors text-3xl font-light"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between h-full pt-12 md:pt-24 gap-12">
                            <div className="flex flex-col justify-end w-full md:w-1/3 order-3 md:order-1">
                                <span className="text-white/50 text-sm uppercase mb-2">Local Time</span>
                                <span className="text-accent text-5xl md:text-7xl font-bold tracking-tighter tabular-nums">{time}</span>
                            </div>

                            <div className="w-full md:w-1/3 flex flex-col gap-6 order-1 md:order-2">
                                {['Home', 'Infrastructure', 'Solutions', 'How it Works', 'Ecosystem'].map((item, idx) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                                    >
                                        <Link
                                            href="#"
                                            onClick={() => setIsOpen(false)}
                                            className="group flex items-center gap-4 text-5xl md:text-6xl font-bold hover:text-accent transition-colors tracking-tight"
                                        >
                                            {item}
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2">→</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="w-full md:w-1/3 flex flex-col items-start md:items-end gap-4 order-2 md:order-3">
                                <span className="text-white/50 text-sm uppercase mb-4">Socials</span>
                                {['Instagram', 'Twitter / X', 'LinkedIn', 'Dribbble'].map((soc, idx) => (
                                    <motion.a
                                        key={soc}
                                        href="#"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                                        className="text-2xl md:text-3xl font-medium hover:text-accent transition-colors flex items-center justify-between w-full md:w-auto md:gap-8 border-b border-white/10 md:border-none pb-2 md:pb-0"
                                    >
                                        {soc}
                                        <span className="text-sm">↗</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
