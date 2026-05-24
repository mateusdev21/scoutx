"use client";

import { motion } from "framer-motion";

interface HoverCardProps {
  children: React.ReactNode;
}

export function HoverCard({ children }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
