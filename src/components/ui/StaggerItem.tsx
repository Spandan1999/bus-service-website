import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";

import { useTheme } from "../../theme/ThemeProvider";
import { createAnimation } from "../../theme/animation";

interface StaggerItemProps
  extends HTMLMotionProps<"div"> {}

export default function StaggerItem({
  children,
  ...props
}: StaggerItemProps) {
  const { theme } = useTheme();

  const variants = createAnimation({
    preset: "fadeUp",
    intensity: theme.animation.intensity,
  });

  return (
    <motion.div
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
}