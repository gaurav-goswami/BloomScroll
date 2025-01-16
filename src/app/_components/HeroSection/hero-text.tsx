'use client';

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const HeroText = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scrollYProgress (0 to 1) to background color
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.9, 1],
    ["#000000", "#ffffff"]
  );

  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <motion.div
      className="w-full h-[300vh] text-gray-200 font-protest gap-5 relative"
      ref={containerRef}
      style={{ backgroundColor }}
    >
      <div className="flex flex-col gap-2 items-center text-white sticky top-0 h-[100vh] overflow-hidden">
        <motion.section
          className="w-full h-full absolute top-0 flex flex-col justify-center items-center overflow-hidden"
          style={{ scale: scaleText }}
        >
          <span className="text-9xl" style={{ fontSize: "135px" }}>
            Tired of
          </span>
          <span className="text-9xl" style={{ fontSize: "135px" }}>
            Mindless Scrolling ?
          </span>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default HeroText;
