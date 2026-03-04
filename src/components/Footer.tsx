"use client";

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white px-6 md:px-12 pt-32 pb-12 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/20 pb-16">

                <div className="flex flex-col gap-6 w-full max-w-2xl">
                    <motion.h4
                        className="text-white/50 text-xl font-normal uppercase tracking-[0.2em] font-bebas"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Have a project in mind?
                    </motion.h4>

                    <motion.div
                        className="relative group cursor-pointer inline-block"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-normal font-bebas tracking-tighter uppercase leading-[0.8]">
                            Let's Talk
                            <motion.span
                                className="inline-block ml-4 transform -rotate-45"
                                animate={{ rotate: [-45, 0, -45] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {"->"}
                            </motion.span>
                        </h2>

                        {/* Signature Effect Overlay */}
                        <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 pointer-events-none">
                            <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 md:w-56 overflow-visible opacity-40">
                                <motion.path
                                    d="M20,60 C40,40 80,40 100,60 C120,80 160,80 180,60 M40,30 L160,90"
                                    stroke="var(--accent)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                                />
                                <motion.path
                                    d="M50,80 Q80,20 150,50"
                                    stroke="var(--accent)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 2 }}
                                />
                            </svg>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col items-end gap-2 mt-12 md:mt-0 text-white/50 font-normal font-sans">
                    <a href="#" className="hover:text-white transition-colors">x.com/palmer</a>
                    <a href="#" className="hover:text-white transition-colors">instagram.com/palmer</a>
                    <div className="w-full h-[1px] bg-white/10 my-2"></div>
                    <a href="mailto:hello@palmer.com" className="hover:text-white text-lg transition-colors underline underline-offset-4 mt-2">hello@palmer.com</a>
                </div>

            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-white/40 uppercase tracking-wider font-normal font-bebas">
                <p>© {new Date().getFullYear()} Xzero® Studio. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <p className="mt-4 md:mt-0">Made with ❤️ for Framer Clone</p>
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span>Systems Online</span>
                </div>
            </div>
        </footer>
    );
}
