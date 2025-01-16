'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Entrance = () => {
    const [bgColor, setBgColor] = useState("white");
    const [startWhiteCircle, setStartWhiteCircle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBgColor("black");
            setStartWhiteCircle(true);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`relative w-full h-full overflow-hidden bg-${bgColor}`}>
            <motion.div
                className="w-7 h-7 bg-black rounded-full fixed top-1/2 left-0 transform -translate-y-1/2"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        x: "-50vw",
                        scale: 1,
                    },
                    visible: {
                        x: "50vw",
                        scale: 100,
                    },
                }}
                transition={{
                    x: {
                        type: "spring",
                        stiffness: 80,
                        damping: 10,
                        duration: 0.8,
                    },
                    scale: {
                        type: "spring",
                        stiffness: 50,
                        damping: 8,
                        delay: 0.8,
                    },
                }}
            />
            {startWhiteCircle && (
                <motion.div
                    className="w-7 h-7 bg-white rounded-full fixed top-1/2 right-0 transform -translate-y-1/2"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            x: "50vw",
                            scale: 1,
                        },
                        visible: {
                            x: "-50vw",
                            scale: 100,
                        },
                    }}
                    transition={{
                        delay: 2,
                        x: {
                            type: "spring",
                            stiffness: 80,
                            damping: 10,
                            duration: 0.8,
                        },
                        scale: {
                            type: "spring",
                            stiffness: 50,
                            damping: 8,
                            delay: 0.8,
                        },
                    }}
                    onAnimationComplete={() => {
                        setBgColor("white");
                    }}
                />
            )}
        </div>
    );
};

export default Entrance;
