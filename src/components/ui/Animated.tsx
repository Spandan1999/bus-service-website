import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";

import { useTheme } from "../../theme/ThemeProvider";
import { createAnimation } from "../../theme/animation";

import type { AnimationPreset } from "../../theme/animationTypes";

interface AnimatedProps
  extends HTMLMotionProps<"div"> {
  preset?: AnimationPreset;
  delay?: number;
}

export default function Animated({
  children,
  preset = "fadeUp",
  delay = 0,
  ...props
}: AnimatedProps) {
  const { theme } = useTheme();

  const variants = createAnimation({
    preset,
    intensity: theme.animation.intensity,
    delay,
  });

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}