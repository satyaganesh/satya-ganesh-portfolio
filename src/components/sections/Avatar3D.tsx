import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const MODEL_URL = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/RobotExpressive/RobotExpressive.glb';

type AnimName = 'Idle' | 'Walking' | 'Yes' | 'No' | 'Wave' | 'Punch' | 'ThumbsUp';

function Avatar({ animation }: { animation: AnimName }) {
  const { scene, animations } = useGLTF(MODEL_URL);
  const { actions } = useAnimations(animations, scene);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const action = actions[animation];
    if (action) {
      Object.values(actions).forEach((a) => a?.stop());
      action.reset().fadeIn(0.3).play();
    }
    return () => {
      action?.fadeOut(0.3);
    };
  }, [animation, actions]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1.5} position={[0, -1, 0]} />
    </group>
  );
}

function AvatarScene({ animation }: { animation: AnimName }) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#0ea5e9" />
      <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#8b5cf6" />
      <Suspense fallback={null}>
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
          <Avatar animation={animation} />
        </Float>
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={8} blur={2.5} far={4} color="#0ea5e9" />
      </Suspense>
    </>
  );
}

const animations: { name: AnimName; label: string; icon: string }[] = [
  { name: 'Wave', label: 'Say Hi', icon: '👋' },
  { name: 'Walking', label: 'Walk', icon: '🚶' },
  { name: 'Yes', label: 'Nod', icon: '✅' },
  { name: 'ThumbsUp', label: 'Approve', icon: '👍' },
  { name: 'Idle', label: 'Idle', icon: '🧍' },
];

export function Avatar3D() {
  const [current, setCurrent] = useState<AnimName>('Wave');

  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto">
      <div className="absolute inset-0 rounded-2xl overflow-hidden border border-dark-700 bg-gradient-to-b from-dark-900 to-dark-950">
        <Canvas camera={{ position: [0, 1, 6], fov: 40 }}>
          <AvatarScene animation={current} />
        </Canvas>
      </div>

      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap justify-center gap-1.5">
        {animations.map((anim) => (
          <button
            key={anim.name}
            onClick={() => setCurrent(anim.name)}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              current === anim.name
                ? 'bg-primary-500 text-dark-950'
                : 'bg-dark-800/80 text-dark-300 hover:bg-dark-700 border border-dark-600'
            }`}
          >
            <span className="mr-1">{anim.icon}</span>
            {anim.label}
          </button>
        ))}
      </div>
    </div>
  );
}

useGLTF.preload(MODEL_URL);