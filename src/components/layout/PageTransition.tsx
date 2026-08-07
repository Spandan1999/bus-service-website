import {
  motion,
  type Variants,
} from "framer-motion";

import type { ReactNode } from "react";

import { useTheme } from "../../theme/ThemeProvider";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({
  children,
}: PageTransitionProps) {
  const { theme } = useTheme();

  const duration =
    theme.animation.style === "cinematic"
      ? 0.8
      : theme.animation.style === "smooth"
        ? 0.5
        : 0.3;

  const variants: Variants = {
    initial: {
      opacity: 0,
      y: 15,
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },

    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: duration * 0.7,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}