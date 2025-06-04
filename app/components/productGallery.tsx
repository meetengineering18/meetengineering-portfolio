"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./lamp"

export function ProductGallery() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 "
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}
