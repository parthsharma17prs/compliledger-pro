"use client";

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white px-6 md:px-12 pt-32 pb-12 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/20 pb-16">

                <div className="flex flex-col gap-6 w-full max-w-2xl">
                    <motion.h4
                        className="text-white/50 text-xl font-medium uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Have a project in mind?
                    </motion.h4>

                    <motion.h2
                        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] group cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Let's Talk
                        <motion.span
                            className="inline-block ml-4 md:ml-8 transform -rotate-45"
                            whileHover={{ rotate: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {"->"}
                        </motion.span>
                    </motion.h2>
                </div>

                <div className="flex flex-col items-end gap-2 mt-12 md:mt-0 text-white/50 font-medium">
                    <a href="#" className="hover:text-white transition-colors">x.com/palmer</a>
                    <a href="#" className="hover:text-white transition-colors">instagram.com/palmer</a>
                    <div className="w-full h-[1px] bg-white/10 my-2"></div>
                    <a href="mailto:hello@palmer.com" className="hover:text-white text-lg transition-colors underline underline-offset-4 mt-2">hello@palmer.com</a>
                </div>

            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-white/40 uppercase tracking-wider font-medium">
                <p>© {new Date().getFullYear()} Palmer. All rights reserved.</p>
                <p className="mt-4 md:mt-0">Made with ❤️ for Framer Clone</p>
            </div>

        </footer>
    );
}
