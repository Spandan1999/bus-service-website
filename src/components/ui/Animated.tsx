import {
  motion,
  type HTMLMotionProps,
  useInView,
} from "framer-motion";

import { useRef } from "react";

import { useTheme } from "../../theme/ThemeProvider";
import { createAnimation } from "../../theme/animation";

import type { AnimationPreset } from "../../theme/animationTypes";

interface AnimatedProps extends HTMLMotionProps<"div"> {
  preset?: AnimationPreset;
  delay?: number;
}

export default function Animated({
  children,
  preset = "fadeUp",
  delay = 0,
  ...props
}: AnimatedProps) {
  const {
    animationsEnabled,
    animationIntensity,
  } = useTheme();

  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.05,
  });

  /*
   * If animations are disabled,
   * content is immediately visible.
   */
  if (!animationsEnabled) {
    return (
      <motion.div
        initial={false}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  const variants = createAnimation({
    preset,
    intensity: animationIntensity,
    delay,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      {...props}
    >
      {children}
    </motion.div>
  );
}