// components/FadeInWhenVisible.tsx
"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const FadeInWhenVisible = ({
  children,
  direction = "up", // "left", "right", "up", "down"
  delay = 0.1,
}: {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const directionVariants: any = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, y: 0, opacity: 1, transition: { duration: 0.6, delay } });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};
