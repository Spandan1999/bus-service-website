import type { Transition } from "framer-motion";

export const smoothTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const cinematicTransition: Transition = {
  duration: 1,
  ease: [0.16, 1, 0.3, 1],
};

export const fastTransition: Transition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1],
};