'use client';

import { useEffect, useState } from "react";
import Entrance from "../entrance";
import NavigationDock from "../navigationDock";
import HeroText from "./hero-text";
import { motion } from "framer-motion";

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {!isLoaded ? (
                <Entrance />
            ) : (
                <motion.div className="h-[400vh] bg-white" initial={{opacity: 0}} animate={{ opacity: 1 }}>
                    <HeroText />
                    <NavigationDock />
                </motion.div>
            )
            }
        </>
    );
};

export default HeroSection;
