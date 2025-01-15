'use client';

import { motion } from "framer-motion";

const CIRCLES = 16;

const Hypnosis = () => {
    const maxSize = 100;
    const minSize = 20;
    const borderMaxWidth = 5;
    const borderMinWidth = 1;

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {Array.from({ length: CIRCLES }).map((_, index) => {
                // Calculate size of the circles based on their position
                const size = minSize + (maxSize - (minSize * 2.2)) * ((index * (index / 1.2)) / (CIRCLES - 1));
                const borderWidth = borderMinWidth + (borderMaxWidth - borderMinWidth) * (index / (CIRCLES - 1));

                return (
                    <motion.div key={index}
                        className={`absolute border-gray-100 rounded-full ${index === 0 ? 'bg-black': ''}`}
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            borderWidth: `${borderWidth}px`,
                        }}
                    >
                        {/* Content goes here */}
                    </motion.div>
                );
            })}
        </div >
    );
};

export default Hypnosis;
