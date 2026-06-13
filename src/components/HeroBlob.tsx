import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Environment,
  Float,
  Sparkles,
} from "@react-three/drei";
import type { Group } from "three";
import type { RefObject } from "react";

type Props = {
  scrollRef: RefObject<number>;
};

/**
 * The hero scene: a metallic distorted blob with environment lighting,
 * a sparse particle field, mouse parallax, and a scroll reaction.
 * No custom shaders — everything is a drei built-in.
 */
export function HeroBlob({ scrollRef }: Props) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    const g = group.current;
    if (!g) return;

    // Mouse parallax: lerp the group's rotation toward the pointer.
    g.rotation.y += (state.pointer.x * 0.4 - g.rotation.y) * 0.05;
    g.rotation.x += (-state.pointer.y * 0.3 - g.rotation.x) * 0.05;

    // Scroll reaction: drift up and shrink slightly as sections scroll over.
    const scroll = scrollRef.current ?? 0;
    g.position.y += (scroll * 1.6 - g.position.y) * 0.06;
    const targetScale = 1 - scroll * 0.35;
    g.scale.setScalar(g.scale.x + (targetScale - g.scale.x) * 0.06);
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <Environment preset="city" />

      <group ref={group}>
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
          <mesh>
            <icosahedronGeometry args={[1.6, 48]} />
            <MeshDistortMaterial
              distort={0.45}
              speed={2}
              roughness={0.1}
              metalness={0.9}
              color="#5b21b6"
            />
          </mesh>
        </Float>
        <Sparkles count={120} scale={8} size={2} speed={0.4} opacity={0.5} />
      </group>
    </>
  );
}
