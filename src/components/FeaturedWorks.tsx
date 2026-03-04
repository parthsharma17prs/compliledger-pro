"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const works = [
    { id: 1, title: 'Manila.', client: 'Brand Identity', img: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, title: 'Theo', client: 'Digital Experience', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop' },
    { id: 3, title: 'Horizon', client: 'Art Direction', img: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2070&auto=format&fit=crop' },
    { id: 4, title: 'Kroma', client: 'Web Development', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop' },
];

export default function FeaturedWorks() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white w-full border-t border-white/10">

            <div className="flex justify-between items-end mb-16">
                <h2 className="text-4xl md:text-6xl font-normal font-bebas tracking-tight uppercase">Featured Works©</h2>
                <motion.button
                    whileHover={{ x: 5 }}
                    className="text-sm md:text-base border-b border-white pb-1 hidden md:block"
                >
                    View All Projects
                </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {works.map((work, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        key={work.id}
                        className="group relative cursor-pointer flex flex-col gap-4"
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                    >
                        {/* Image Container */}
                        <div className="w-full aspect-[4/3] overflow-hidden bg-neutral-900 relative rounded-2xl">
                            <motion.img
                                src={work.img}
                                className="w-full h-full object-cover scale-105"
                                animate={{
                                    scale: hoveredIdx === idx ? 1.0 : 1.05,
                                    filter: hoveredIdx === idx ? "brightness(0.8)" : "brightness(1)",
                                }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                alt={work.title}
                            />

                            {/* Overlay on hover */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredIdx === idx ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-black/20 flex items-center justify-center backdrop-blur-[2px]"
                            >
                                <div className="bg-white text-black px-6 py-3 rounded-full font-medium tracking-wide uppercase text-sm">
                                    View Project
                                </div>
                            </motion.div>
                        </div>

                        {/* Text details */}
                        <div className="flex justify-between items-center text-lg md:text-xl font-medium pt-2">
                            <h3 className="tracking-wide">{work.title}</h3>
                            <span className="text-white/50 text-sm">{work.client}</span>
                        </div>

                        <motion.div
                            className="absolute bottom-0 left-0 h-[1px] bg-white w-full origin-left"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: hoveredIdx === idx ? 1 : 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                    </motion.div>
                ))}
            </div>

        </section>
    );
}
