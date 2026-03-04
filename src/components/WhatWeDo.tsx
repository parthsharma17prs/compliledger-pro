"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const services = [
    { id: '01', title: 'Website Design', tools: 'Figma / Framer / Webflow', desc: 'Crafting premium, award-winning digital experiences that connect with audiences and drive conversion.' },
    { id: '02', title: 'Digital Products', tools: 'React / Next.js / Tailwind', desc: 'Building scalable and responsive applications with the most advanced technology stacks.' },
    { id: '03', title: 'Motion & Content', tools: 'After Effects / Spline / Rive', desc: 'Adding a layer of dynamism that breathes life into interfaces through fluid micro-interactions.' },
    { id: '04', title: 'Strategy & Positioning', tools: 'Miro / Notion / FigJam', desc: 'Aligning business objectives directly with user needs through comprehensive research and planning.' },
];

export default function WhatWeDo() {
    const [openId, setOpenId] = useState<string | null>('01');

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white w-full border-t border-white/10">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16 overflow-hidden">
                <motion.h2
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-5xl font-normal font-bebas tracking-tight uppercase flex-shrink-0 w-full md:w-1/3"
                >
                    What We Do <span className="text-accent ml-2">●</span>
                </motion.h2>
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl font-medium text-white/70 max-w-2xl"
                >
                    We transform creative vision into reality. Partnering with forward-thinking agencies and ambitious brands to craft premium digital experiences.
                </motion.p>
            </div>

            <div className="w-full border-t border-white/10">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="border-b border-white/10 overflow-hidden cursor-pointer group"
                        onClick={() => toggle(service.id)}
                    >
                        <div className={`py-8 md:py-12 flex items-center justify-between transition-colors ${openId === service.id ? 'text-accent' : 'text-white group-hover:text-accent'}`}>
                            <div className="flex items-center gap-6 md:gap-12">
                                <span className="text-sm md:text-lg font-medium opacity-50 block w-8">
                                    {service.id}
                                </span>
                                <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">
                                    {service.title}
                                </h3>
                            </div>
                            <motion.div
                                animate={{ rotate: openId === service.id ? 45 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-10 h-10 border border-current rounded-full flex items-center justify-center flex-shrink-0"
                            >
                                <span className="text-xl font-light">+</span>
                            </motion.div>
                        </div>

                        <AnimatePresence>
                            {openId === service.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-12 pl-14 md:pl-24 flex flex-col md:flex-row gap-8 justify-between text-white">
                                        <p className="text-xl md:text-2xl font-medium text-white/80 max-w-xl">
                                            {service.desc}
                                        </p>
                                        <div className="flex flex-col gap-2 border-l border-white/10 pl-6 md:pl-12 min-w-[250px]">
                                            <span className="text-white/40 text-sm uppercase tracking-wider font-bold">Tools & Stack</span>
                                            <span className="text-lg">{service.tools}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
