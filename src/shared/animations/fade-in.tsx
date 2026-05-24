"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

export function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
