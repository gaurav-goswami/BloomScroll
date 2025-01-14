'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Entrance from "./entrance";

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-[100%] w-full flex items-center justify-center">
            {!isLoaded ? (
                <Entrance />
            ) : (
                <motion.div className="w-full h-full flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <span>Hello</span>
                </motion.div>
            )}
        </div>
    );
};

export default HeroSection;
