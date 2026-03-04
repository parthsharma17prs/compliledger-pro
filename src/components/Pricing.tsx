"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Pricing() {
    const [isSubscription, setIsSubscription] = useState(true);

    return (
        <section className="py-40 px-6 md:px-12 bg-black text-white w-full relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        x: [0, 100, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[150px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.1, 0.05],
                        x: [0, -100, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]"
                />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12 relative z-10">
                <div className="flex flex-col gap-4">
                    <span className="text-accent font-bebas text-sm tracking-[0.4em] uppercase">Investment</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl lg:text-9xl font-normal font-bebas tracking-tighter uppercase leading-[0.8]"
                    >
                        WHAT IT COSTS <br />
                        <span className="text-white/20">TO DO IT RIGHT</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col gap-6">
                    <p className="text-xl text-white/50 max-w-sm font-sans leading-relaxed">
                        Flexible engagement models designed for high-growth teams and innovative startups.
                    </p>

                    {/* Toggle Switch */}
                    <div className="relative p-1.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex gap-2 w-fit">
                        <motion.div
                            layout
                            className="absolute inset-y-1.5 bg-accent rounded-xl shadow-[0_0_20px_rgba(255,77,0,0.3)]"
                            initial={false}
                            animate={{
                                x: isSubscription ? 0 : 'calc(100% + 8px)',
                                width: isSubscription ? '140px' : '120px'
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <button
                            onClick={() => setIsSubscription(true)}
                            className={`relative px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors duration-300 z-10 ${isSubscription ? 'text-black' : 'text-white/40'}`}
                        >
                            Subscription
                        </button>
                        <button
                            onClick={() => setIsSubscription(false)}
                            className={`relative px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-colors duration-300 z-10 ${!isSubscription ? 'text-black' : 'text-white/40'}`}
                        >
                            Project
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Visual Accent Column */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-square rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-12 relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <span className="text-accent font-bebas text-2xl">Pricing Philosophy //</span>
                            <p className="text-3xl md:text-4xl font-normal font-bebas leading-tight uppercase tracking-tighter">
                                Quality is never an accident. It is always the result of intelligent effort.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-12 h-[1px] bg-white/40 mt-3"></div>
                                <span className="text-white/40 font-bebas text-xl">Xzero® Methodology</span>
                            </div>
                        </div>

                        {/* Decorative Circles */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-white/10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                        <div className="absolute -bottom-20 -right-20 w-60 h-60 border border-white/5 rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
                    </motion.div>
                </div>

                {/* Pricing Card Column */}
                <div className="lg:col-span-7 h-[650px] relative">
                    <AnimatePresence mode="wait">
                        {isSubscription ? (
                            <PricingCard
                                key="sub"
                                title="RETAINER PLAN"
                                price="$4,995"
                                period="/mo"
                                badge="Most Popular"
                                description="Continuous high-velocity design and development for ambitious teams."
                                features={[
                                    "One request at a time",
                                    "Average 48 hour delivery",
                                    "Unlimited revisions",
                                    "Pause or cancel anytime",
                                    "Direct communication channel"
                                ]}
                                buttonText="Start Subscription"
                            />
                        ) : (
                            <PricingCard
                                key="proj"
                                title="FIXED SCOPE"
                                price="$12,500"
                                period="+"
                                badge="Elite Builds"
                                description="High-impact builds for specific milestones and new product launches."
                                features={[
                                    "End-to-end design & dev",
                                    "Dedicated project lead",
                                    "Strategic discovery phase",
                                    "Custom motion design",
                                    "Post-launch support"
                                ]}
                                buttonText="Request Quote"
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

function PricingCard({ title, price, period, badge, description, features, buttonText }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, rotateY: -10, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, rotateY: 10, scale: 0.95, x: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-10 md:p-14 flex flex-col justify-between shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
        >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>

            <div className="relative">
                <div className="flex justify-between items-start mb-8">
                    <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] font-bebas">{title}</span>
                    <div className="bg-accent text-black text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest shadow-[0_0_20px_rgba(255,77,0,0.4)]">
                        {badge}
                    </div>
                </div>

                <div className="flex items-baseline gap-2">
                    <h3 className="text-7xl md:text-9xl font-normal font-bebas tabular-nums tracking-tighter text-white">
                        {price}
                    </h3>
                    <span className="text-2xl font-bebas text-white/20 uppercase tracking-widest">{period}</span>
                </div>

                <p className="mt-10 text-xl text-white/50 leading-relaxed max-w-md font-sans">
                    {description}
                </p>

                <ul className="mt-12 flex flex-col gap-6">
                    {features.map((feature: string, i: number) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                            className="flex items-center gap-5 group"
                        >
                            <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-black transition-colors"></div>
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">{feature}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>

            <motion.button
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-7 mt-12 bg-white text-black font-black uppercase tracking-[0.2em] text-sm rounded-2xl shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] hover:bg-accent hover:shadow-[0_20px_50px_-10px_rgba(255,77,0,0.4)] transition-all duration-500"
            >
                {buttonText}
            </motion.button>
        </motion.div>
    );
}
