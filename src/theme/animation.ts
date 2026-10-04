import type {
  Transition,
  Variants,
} from "framer-motion";

import type {
  AnimationIntensity,
  AnimationPreset,
} from "./animationTypes";

interface AnimationConfig {
  preset?: AnimationPreset;
  intensity?: AnimationIntensity;
  delay?: number;
}

function getDistance(
  intensity: AnimationIntensity
): number {
  switch (intensity) {
    case "low":
      return 15;

    case "high":
      return 60;

    case "medium":
    default:
      return 30;
  }
}

function getDuration(
  intensity: AnimationIntensity
): number {
  switch (intensity) {
    case "low":
      return 0.45;

    case "high":
      return 1;

    case "medium":
    default:
      return 0.65;
  }
}

export function createAnimation(
  config: AnimationConfig = {}
): Variants {
  const {
    preset = "fadeUp",
    intensity = "medium",
    delay = 0,
  } = config;

  const distance = getDistance(intensity);
  const duration = getDuration(intensity);

  const transition: Transition = {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1],
  };

  const cinematicTransition: Transition = {
    duration: Math.max(duration, 0.8),
    delay,
    ease: [0.16, 1, 0.3, 1],
  };

  const hidden = {
    opacity: 0
  };

  const visible = {
    opacity: 1,
    transition,
  };

  switch (preset) {
    case "fade":
      return {
        hidden,
        visible,
      };

    case "fadeUp":
      return {
        hidden: {
          ...hidden,
          y: distance,
        },
        visible: {
          ...visible,
          y: 0,
        },
      };

    case "fadeDown":
      return {
        hidden: {
          ...hidden,
          y: -distance,
        },
        visible: {
          ...visible,
          y: 0,
        },
      };

    case "fadeLeft":
      return {
        hidden: {
          ...hidden,
          x: distance,
        },
        visible: {
          ...visible,
          x: 0,
        },
      };

    case "fadeRight":
      return {
        hidden: {
          ...hidden,
          x: -distance,
        },
        visible: {
          ...visible,
          x: 0,
        },
      };

    case "scale":
      return {
        hidden: {
          ...hidden,
          scale: 0.92,
        },
        visible: {
          ...visible,
          scale: 1,
        },
      };

    case "blur":
      return {
        hidden: {
          ...hidden,
          filter: "blur(12px)",
        },
        visible: {
          ...visible,
          filter: "blur(0px)",
        },
      };

    case "cinematic":
      return {
        hidden: {
          opacity: 0,
          y: distance,
          scale: 0.97,
          filter: "blur(8px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: cinematicTransition,
        },
      };

    default:
      return {
        hidden,
        visible,
      };
  }
}