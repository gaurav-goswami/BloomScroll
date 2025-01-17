'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MainSectionText = () => {
    const containerRef = useRef(null);

    // Track scroll progress for the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const dontWorryOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 0.5, 0]);
    const dontWorryY = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, -30, -50]);
    const doomscrollingOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.55], [0, 1, 0]);
    const doomscrollingY = useTransform(scrollYProgress, [0.25, 0.45, 0.55], [30, 0, -30]);
    const deadOpacity = useTransform(scrollYProgress, [0.55, 0.75, 1], [0, 1, 1]);
    const deadY = useTransform(scrollYProgress, [0.55, 0.75, 1], [30, 0, 0]);
    const deadScale = useTransform(scrollYProgress, [0.75, 1], [1, 30]);

    const backgroundColor = useTransform(
        scrollYProgress,
        [0.9, 1],
        ["#000", "#fff"]
    );

    return (
        <motion.div
            className="h-[220vh] relative py-40 font-protest text-white overflow-hidden"
            ref={containerRef}
            style={{ background: backgroundColor }}
        >
            <motion.div
                className="sticky top-0 h-full flex items-center justify-start overflow-hidden"
            >
                <motion.span
                    className="absolute text-center w-full text-7xl md:text-[150px] lg:text-[200px]"
                    style={{
                        opacity: dontWorryOpacity,
                        y: dontWorryY,
                    }}
                >
                    DON&apos;T WORRY
                </motion.span>

                <motion.span
                    className="absolute text-center w-full text-7xl md:text-[150px] lg:text-[200px]"
                    style={{
                        opacity: doomscrollingOpacity,
                        y: doomscrollingY,
                    }}
                >
                    Doomscrolling is now
                </motion.span>

                <motion.span
                    className="absolute text-center w-full text-7xl md:text-[150px] lg:text-[200px]"
                    style={{
                        fontSize: "200px",
                        opacity: deadOpacity,
                        y: deadY,
                        scale: deadScale,
                        left: 20
                    }}
                >
                    DEAD
                </motion.span>
            </motion.div>
        </motion.div>
    );
};

export default MainSectionText;
