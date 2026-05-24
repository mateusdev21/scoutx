"use client";

import { motion } from "framer-motion";

interface StaggerContainerProps {
  children: React.ReactNode;
}

export function StaggerContainer({ children }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},

        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
