'use client';
import { motion } from "framer-motion";
import Marque from "./marque";

const DURATION = 0.25;
const STAGGER = 0.025;
const TEXT = "BLOOM SCROLL";

const BloomScroll = () => {


    return (
        <div className="h-full w-full flex flex-col justify-between items-center py-20 font-protest">
            <motion.div className="relative overflow-hidden whitespace-nowrap uppercase lg:text-[200px] md:text-[100px] text-5xl" initial="initial" whileHover="hovered">
                <div>
                    {TEXT.split("").map((e, i) => {
                        return <motion.span key={i}
                            variants={{
                                initial: {
                                    y: 0
                                },
                                hovered: {
                                    y: "-100%",
                                    background: "#fff"
                                }
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i
                            }}
                            className="inline-block bg-[#08f3f3]"
                        >{e === " " ? "\u00A0" : e}</motion.span>
                    })}
                </div>
                <div className="absolute inset-0">
                    {TEXT.split("").map((e, i) => {
                        return <motion.span key={i}
                            variants={{
                                initial: {
                                    y: "100%"
                                },
                                hovered: {
                                    y: 0,
                                    background: "#fff"
                                }
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i
                            }}
                            className="inline-block"
                        >{e === " " ? "\u00A0" : e}</motion.span>
                    })}
                </div>
            </motion.div>
            <Marque />
        </div>
    )
};

export default BloomScroll;