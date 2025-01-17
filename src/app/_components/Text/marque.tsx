'use client';

import { motion } from "framer-motion";

const Marque = () => {
    const marqueeVariants = {
        animate: {
            x: ["0%", "-100%"],
            transition: {
                x: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className="w-full h-40 overflow-hidden relative bg-black flex items-center gap-10">
            <motion.div
                className="flex whitespace-nowrap gap-10"
                variants={marqueeVariants}
                animate="animate"
            >
                <span className="text-[140px] text-gray-300">COMING SOON</span>
                <span className="text-[140px] text-gray-300">BLOOM SCROLL</span>
                <span className="text-[140px] text-gray-300">COMING SOON</span>
                <span className="text-[140px] text-gray-300">BLOOM SCROLL</span>
            </motion.div>
            <motion.div
                className="flex whitespace-nowrap gap-10"
                variants={marqueeVariants}
                animate="animate"
            >
                <span className="text-[140px] text-gray-300">COMING SOON</span>
                <span className="text-[140px] text-gray-300">BLOOM SCROLL</span>
                <span className="text-[140px] text-gray-300">COMING SOON</span>
                <span className="text-[140px] text-gray-300">BLOOM SCROLL</span>
            </motion.div>
        </div>
    );
};

export default Marque;
