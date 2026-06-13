import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

/** Wraps children and fades them up when they scroll into view. */
export function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={visible ? "reveal visible" : "reveal"}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
