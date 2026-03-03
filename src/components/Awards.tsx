"use client";

import { motion } from 'framer-motion';

const awards = [
    { year: '2025', title: 'Awwwards – Site of the Day', project: 'Neozen' },
    { year: '2024', title: 'FWA – Cutting Edge Award', project: 'Aerosound' },
    { year: '2024', title: 'Red Dot Design Award – Brand Identity', project: 'Rently' },
    { year: '2023', title: 'CSS Design Awards – Innovation', project: 'Pulse UI' },
    { year: '2023', title: 'D&AD – Graphite Pencil / Digital', project: 'NexGen' },
];

export default function Awards() {
    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white w-full border-t border-white/10">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight uppercase max-w-xl leading-[1.1]">
                    Awards & Recognition
                </h2>

                <p className="text-xl text-white/60 max-w-sm">
                    A showcase of our commitment to pushing the boundaries of aesthetics and functionality.
                </p>
            </div>

            <div className="w-full border-t border-white/10">
                {awards.map((award, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-10 border-b border-white/10 group cursor-pointer"
                    >
                        {/* Year & Title */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 w-full md:w-2/3">
                            <span className="text-accent font-bold text-lg md:text-xl relative w-24">
                                {award.year}
                                <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </span>
                            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter group-hover:text-white/80 transition-colors">
                                {award.title}
                            </h3>
                        </div>

                        {/* Project Info & Link */}
                        <div className="flex items-center justify-between w-full md:w-1/3 mt-6 md:mt-0">
                            <span className="text-lg md:text-xl font-medium text-white/50">
                                {award.project}
                            </span>

                            <div className="flex items-center gap-3 text-accent font-bold uppercase text-sm tracking-widest relative overflow-hidden group/btn">
                                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">View Project</span>
                                <span className="w-8 h-8 rounded-full border border-accent flex items-center justify-center relative z-10 group-hover/btn:border-white transition-colors duration-300">
                                    <span className="transform -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300 text-lg group-hover/btn:text-white">{"->"}</span>
                                </span>

                                {/* Red Fill on Hover */}
                                <div className="absolute inset-x-[-10%] inset-y-[-10%] bg-accent scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-300 z-0"></div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
