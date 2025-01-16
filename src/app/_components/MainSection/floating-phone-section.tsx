import styles from "@/app/_components/MainSection/phone.module.css";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Phone from "./phone";

const FloatingPhoneSection = () => {
    const containerRef = useRef(null);
    const speed = 0.1;

    // Using useMotionValue for x and y coordinates
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const containerElement = containerRef.current;
        if (!containerElement) return;

        // @ts-expect-error: Unreachable code error
        const rect = containerElement.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const offsetX = e.clientX - rect.left - width / 2;
        const offsetY = e.clientY - rect.top - height / 2;

        const scaledX = offsetX * speed;
        const scaledY = offsetY * speed;

        const clampedX = Math.min(Math.max(scaledX, -width / 2), width / 2);
        const clampedY = Math.min(Math.max(scaledY, -height / 2), height / 2);

        x.set(clampedX);
        y.set(clampedY);
    };

    useEffect(() => {
        console.log("re-render");
    })
    
    return (
        <motion.div
            className={`overflow-hidden flex justify-center items-center ${styles.main} h-[110vh] bg-black`}
            onMouseMove={handleMouseMove}
            ref={containerRef}
        >
            <span className="text-white absolute place-content-center text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-center z-10 font-protest cursor-default selection:select-none">
                Tired of Mindless <br /> Scrolling?
            </span>

            <motion.div
                className={`overflow-hidden ${styles.plane} h-full`}
                style={{ x, y }}
            >
                <Phone isVid url="/wave.mp4" />
                <Phone isVid url="/vid-1.mp4" />
                <Phone isVid={false} url="/img-1.jpg" />
            </motion.div>

            <motion.div
                className={`overflow-hidden ${styles.plane} h-full`}
                style={{ x, y }}
            >
                <Phone isVid url="/vid-3.mp4" />
                <Phone isVid url="/wave-2.mp4" />
                <Phone isVid={false} url="/img-2.jpg" />
            </motion.div>

            <motion.div
                className={`overflow-hidden ${styles.plane} h-full`}
                style={{ x, y }}
            >
                <Phone isVid url="/wave.mp4" />
                <Phone isVid url="/vid-2.mp4" />
                <Phone isVid={false} url="/img-3.jpg" />
            </motion.div>
        </motion.div>
    );
};

export default FloatingPhoneSection;
