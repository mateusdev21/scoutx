"use client";

import { motion } from "framer-motion";

interface StaggerItemProps {
  children: React.ReactNode;
}

export function StaggerItem({ children }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
}
