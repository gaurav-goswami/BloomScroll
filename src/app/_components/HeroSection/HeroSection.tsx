'use client';

import { motion } from "framer-motion";
import Hypnosis from "./hypnosis";

const HeroSection = () => {
    return (
        <motion.div className="h-[170vh] bg-black" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Hypnosis />
        </motion.div>
    );
};

export default HeroSection;
