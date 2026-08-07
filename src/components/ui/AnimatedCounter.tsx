import {
  useEffect,
  useRef,
  useState,
} from "react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  duration = 1.6,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  const started = useRef(false);

  const elementRef =
    useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element =
      elementRef.current;

    if (!element) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting &&
            !started.current
          ) {
            started.current = true;

            const startTime =
              performance.now();

            const animate = (
              currentTime: number
            ) => {
              const elapsed =
                currentTime - startTime;

              const progress = Math.min(
                elapsed /
                  (duration * 1000),
                1
              );

              const eased =
                1 -
                Math.pow(
                  1 - progress,
                  3
                );

              setCount(
                Math.round(
                  value * eased
                )
              );

              if (progress < 1) {
                requestAnimationFrame(
                  animate
                );
              }
            };

            requestAnimationFrame(
              animate
            );
          }
        },
        {
          threshold: 0.35,
        }
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span ref={elementRef}>
      {count}
    </span>
  );
}