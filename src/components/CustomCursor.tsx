"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { stiffness: 120, damping: 20, mass: 0.5 }; // Smoother, floatier cursor
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", moveCursor, { passive: true });
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                x: "-50%",
                y: "-50%",
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0,
            }}
            transition={{ opacity: { duration: 0.15 }, scale: { duration: 0.2, ease: "easeOut" } }}
        >
            <div className="absolute inset-0 bg-accent rounded-full opacity-40" />
        </motion.div>
    );
}
