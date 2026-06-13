import { Canvas } from "@react-three/fiber";
import { HeroBlob } from "./HeroBlob";
import type { RefObject } from "react";

type Props = {
  scrollRef: RefObject<number>;
};

/** Fixed full-viewport canvas sitting behind the scrolling HTML. */
export function Scene({ scrollRef }: Props) {
  return (
    <div className="canvas-container" aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <HeroBlob scrollRef={scrollRef} />
      </Canvas>
    </div>
  );
}
