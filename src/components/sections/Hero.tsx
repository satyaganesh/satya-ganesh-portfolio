import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { siteConfig } from '@/data';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 1200;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#c9a96e" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function FloatingGeometry() {
  return (
    <>
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[-6, 2, -4]}>
          <icosahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#c9a96e" wireframe transparent opacity={0.25} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[6, -1, -3]}>
          <octahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color="#a8a49e" wireframe transparent opacity={0.2} />
        </mesh>
      </Float>
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <ParticleField />
      <FloatingGeometry />
    </>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 1.5]}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0e0e0f_80%)]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none">
        <span className="font-display text-[25vw] leading-none text-ivory/[0.03] uppercase tracking-tight whitespace-nowrap">
          SATYA
        </span>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 py-32">
        <div className="inline-flex items-center gap-3 mb-10 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-silver">Open to opportunities</span>
        </div>

        <p className="eyebrow mb-6 animate-slide-up">{siteConfig.title}</p>

        <h1 className="font-display text-7xl lg:text-9xl xl:text-[10rem] leading-[0.85] tracking-tight uppercase mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-ivory">SATYA</span>
          <br />
          <span className="text-gradient">GANESH</span>
        </h1>

        <p className="font-serif italic text-2xl lg:text-3xl text-mist max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {siteConfig.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a href="#projects" className="btn-primary">Explore my work</a>
          <a href="#contact" className="btn-secondary">Contact me</a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}