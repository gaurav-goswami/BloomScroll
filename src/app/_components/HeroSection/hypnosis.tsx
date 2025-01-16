'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useMemo, useRef } from "react";
import NavigationDock from "../navigationDock";
import { MouseIcon } from "lucide-react";

const CIRCLES = 30;

const Hypnosis = () => {
    const maxSize = 100;
    const minSize = 20;
    const borderMaxWidth = 5;
    const borderMinWidth = 1;

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const circleProps = useMemo(() => {
        return Array.from({ length: CIRCLES }).map((_, index) => {
            const size = minSize + (maxSize - minSize) * ((index * (index / 1.2)) / (CIRCLES - 1));
            const borderWidth = borderMinWidth + (borderMaxWidth - borderMinWidth) * (index / (CIRCLES - 1));
            return { size, borderWidth };
        });
    }, []);

    const scaleCenter = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const zoom = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const circleScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const borderProgress = useTransform(scrollYProgress, [0, 1], [0, 20]);
    const backgroundColor = useTransform(
        scrollYProgress,
        [0.9, 1],
        ["#fff", "#000"]
    );

    const zeroCircleScale = useTransform(scrollYProgress, [0, 1], [1, 35]);

    return (
        <motion.div className="relative w-full h-[200vh] bg-white" ref={containerRef} style={{ backgroundColor }}>
            <motion.div className="flex flex-col gap-2 items-center text-black sticky top-0 h-[100vh] overflow-hidden">
                <motion.section
                    className="w-full h-full absolute top-0 flex flex-col justify-center items-center"
                    style={{ scale: scaleCenter }}
                >
                    <motion.h1
                        className="text-4xl font-bold mb-8 z-10"
                        style={{ scale: zoom }}
                    >
                    </motion.h1>
                    {circleProps.map((props, index) => (
                        <motion.div
                            key={index}
                            className={`absolute rounded-full ${index === 0 ? 'bg-black' : ''}`}
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            style={{
                                width: `${props.size}px`,
                                height: `${props.size}px`,
                                top: "50%",
                                left: "50%",
                                x: "-50%",
                                y: "-50%",
                                scale: index === 0 ? zeroCircleScale : circleScale,
                                borderColor: "black",
                                borderWidth: borderProgress,
                            }}
                        />
                    ))}
                </motion.section>
                <NavigationDock />
                <motion.span className="absolute bottom-10 flex items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}>
                    <MouseIcon className="mr-2" size={24} />
                </motion.span>
            </motion.div>
        </motion.div>
    );
};

export default React.memo(Hypnosis);
