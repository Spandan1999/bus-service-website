import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";

import { useTheme } from "../../theme/ThemeProvider";

interface MotionCardProps
  extends HTMLMotionProps<"div"> {}

export default function MotionCard({
  children,
  ...props
}: MotionCardProps) {
  const { theme } = useTheme();

  const hoverDistance =
    theme.animation.intensity === "high"
      ? -8
      : theme.animation.intensity === "medium"
        ? -5
        : -2;

  const hoverScale =
    theme.animation.style === "dynamic"
      ? 1.02
      : theme.animation.style === "cinematic"
        ? 1.01
        : 1;

  return (
    <motion.div
      whileHover={{
        y: hoverDistance,
        scale: hoverScale,
      }}
      transition={{
        duration:
          theme.animation.style === "minimal"
            ? 0.2
            : 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}