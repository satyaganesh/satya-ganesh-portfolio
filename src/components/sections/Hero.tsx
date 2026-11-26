import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { siteConfig } from '@/data';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 2000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#0ea5e9" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-4, 1, -2]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#0ea5e9" wireframe transparent opacity={0.6} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[4, -1, -3]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>
      <Float speed={1} rotationIntensity={1} floatIntensity={3}>
        <mesh position={[0, 2, -4]}>
          <torusGeometry args={[0.6, 0.2, 16, 32]} />
          <meshStandardMaterial color="#22c55e" wireframe transparent opacity={0.4} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={2.5} floatIntensity={2}>
        <mesh position={[-2, -2, -1]}>
          <dodecahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#f59e0b" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
      <ParticleField />
      <FloatingShapes />
      <Environment preset="night" />
      <ContactShadows position={[0, -5, 0]} opacity={0.3} scale={10} blur={2} far={4} />
    </>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-dark-950">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Scene />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent z-0" />

      <div className="relative z-10 text-center max-w-4xl mx-auto py-20 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/80 border border-dark-700 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="text-xs font-medium text-primary-400 tracking-wider uppercase">{siteConfig.title}</span>
          <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
        </div>
        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight mb-6 animate-slide-up">
          <span className="text-dark-50">Hi, I'm </span>
          <br />
          <span className="text-gradient">{siteConfig.name}</span>
        </h1>
        <p className="text-lg lg:text-xl text-dark-400 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up pointer-events-auto" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="btn-primary px-8 py-4 text-lg">View Work</a>
          <a href="#contact" className="btn-secondary px-8 py-4 text-lg">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}