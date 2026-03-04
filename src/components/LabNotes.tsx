"use client";

import { motion } from 'framer-motion';

export default function LabNotes() {
    const posts = [
        {
            id: 1,
            title: 'The Power of Minimalism: Why Less is More in Design',
            category: 'Design Theory',
            date: 'Oct 12, 2025'
        },
        {
            id: 2,
            title: 'The Future of Web Design: Trends You Can’t Ignore',
            category: 'Web Trends',
            date: 'Sep 28, 2025'
        },
        {
            id: 3,
            title: 'My Web Design Process: From Concept to Completion',
            category: 'Process',
            date: 'Sep 15, 2025'
        },
        {
            id: 4,
            title: 'Why Investing in Good Design Pays Off for Your Business',
            category: 'Business Value',
            date: 'Aug 04, 2025'
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 bg-black text-white w-full border-t border-white/10 relative overflow-hidden">

            {/* Background massive text overlay */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[20vw] font-black text-white/5 whitespace-nowrap uppercase tracking-tighter mix-blend-screen pointer-events-none z-0">
                NOTES FROM THE LAB
            </h2>

            <div className="flex justify-between items-center mb-16 relative z-10 border-b border-white/10 pb-12">
                <motion.h2
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl lg:text-9xl font-normal font-bebas tracking-tighter uppercase leading-[0.8]"
                >
                    Lab <br /><span className="text-accent underline decoration-8 underline-offset-8">Notes</span>
                </motion.h2>

                <div className="flex flex-col items-end gap-4 text-right">
                    <p className="text-white/40 max-w-[200px] text-xs font-medium uppercase tracking-[0.2em] hidden md:block">
                        Thoughts on design, motion, and digital craftsmanship.
                    </p>
                    <button className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs group">
                        <span className="group-hover:text-accent transition-colors">Everything</span>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                            <span className="text-lg">→</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
                {posts.map((post, idx) => (
                    <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="group cursor-pointer bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 hover:border-accent/40 transition-all duration-500 relative flex flex-col justify-between aspect-square lg:aspect-auto min-h-[400px]"
                    >
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-12">
                                <span className="text-white/30 text-xs font-bold uppercase tracking-[0.3em] font-bebas">
                                    /{post.id.toString().padStart(2, '0')}
                                </span>
                                <span className="text-[10px] font-black text-accent uppercase tracking-widest border border-accent/20 px-3 py-1 rounded-full">
                                    {post.category}
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-4xl lg:text-3xl font-normal font-bebas uppercase tracking-tighter leading-none group-hover:text-accent transition-colors duration-300">
                                {post.title}
                            </h3>
                        </div>

                        <div className="mt-12 flex items-center justify-between relative z-10 border-t border-white/5 pt-8">
                            <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">{post.date}</span>
                            <div className="w-8 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-accent transition-all duration-500"></div>
                        </div>

                        {/* Topographic mask/glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                    </motion.article>
                ))}
            </div>

        </section>
    );
}
