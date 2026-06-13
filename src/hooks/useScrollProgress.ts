import { useEffect, useRef } from "react";

/**
 * Tracks page scroll as 0..1 in a ref (not state — no re-renders).
 * Consumed inside useFrame so the 3D scene can react to scrolling.
 */
export function useScrollProgress() {
  const progress = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current = max > 0 ? window.scrollY / max : 0;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}
