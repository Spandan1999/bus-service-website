import {
  motion,
  type Variants,
} from "framer-motion";

import { useTheme } from "../../theme/ThemeProvider";

import type { ReactNode } from "react";

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

export default function Stagger({
  children,
  className = "",
}: StaggerProps) {
  const { theme } = useTheme();

  const staggerVariants: Variants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren:
          theme.animation.intensity === "high"
            ? 0.12
            : theme.animation.intensity === "medium"
              ? 0.08
              : 0.05,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
}