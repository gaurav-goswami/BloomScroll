'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Entrance from "../entrance";
import NavigationDock from "../navigationDock";
import Hypnosis from "./hypnosis";

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
                <motion.div className="h-[400vh] bg-black" initial={{opacity: 0}} animate={{ opacity: 1 }}>
                    {/* <HeroText /> */}
                    <Hypnosis />
                    <NavigationDock />
                    <span className="text-white">I am here</span>
                </motion.div>
            )
            }
        </>
    );
};

export default HeroSection;
