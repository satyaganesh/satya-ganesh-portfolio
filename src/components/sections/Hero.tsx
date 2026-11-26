import { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, useGLTF, useAnimations, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { siteConfig } from '@/data';

const AVATAR_URL = '/models/avatar.glb';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 600;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12 - 3;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.025;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#c9a96e" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-4.5, 1.5, -3]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#c9a96e" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[4.5, -1, -2]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#a8a49e" wireframe transparent opacity={0.4} />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5}>
        <mesh position={[0, 2.5, -4]}>
          <torusGeometry args={[0.6, 0.2, 12, 24]} />
          <meshStandardMaterial color="#efebe4" wireframe transparent opacity={0.35} />
        </mesh>
      </Float>
    </>
  );
}

function AvatarModel({ animation }: { animation: string }) {
  const { scene, animations } = useGLTF(AVATAR_URL);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const action = actions[animation] || Object.values(actions)[0];
    if (action) {
      Object.values(actions).forEach((a) => a?.stop());
      action.reset().fadeIn(0.3).play();
    }
    return () => { action?.fadeOut(0.3); };
  }, [animation, actions]);

  return <primitive object={scene} scale={2.2} position={[3.2, -1.8, 0]} />;
}

function AvatarFallback() {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.5, 1.5, 8, 16]} />
        <meshStandardMaterial color="#c9a96e" wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

function Scene({ avatarAnimation, hasAvatar }: { avatarAnimation: string; hasAvatar: boolean }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#c9a96e" />
      <pointLight position={[-5, 3, -5]} intensity={0.6} color="#a8a49e" />
      <ParticleField />
      <FloatingShapes />
      {hasAvatar ? (
        <Suspense fallback={<AvatarFallback />}>
          <AvatarModel animation={avatarAnimation} />
          <ContactShadows position={[3.2, -2.8, 0]} opacity={0.3} scale={8} blur={2.5} far={4} color="#c9a96e" />
        </Suspense>
      ) : (
        <AvatarFallback />
      )}
    </>
  );
}

export function Hero() {
  const [hasAvatar, setHasAvatar] = useState(false);
  const [avatarAnimation, setAvatarAnimation] = useState('Idle');

  useEffect(() => {
    fetch(AVATAR_URL, { method: 'HEAD' })
      .then((r) => setHasAvatar(r.ok))
      .catch(() => setHasAvatar(false));
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0.5, 10], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={null}>
            <Scene avatarAnimation={avatarAnimation} hasAvatar={hasAvatar} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0e0e0f_65%)]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none">
        <span className="font-display text-[25vw] leading-none text-ivory/[0.04] uppercase tracking-tight whitespace-nowrap">
          SATYA
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-32 lg:ml-[8%] lg:mr-[35%]">
        <div className="inline-flex items-center gap-3 mb-10 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-silver">Open to opportunities</span>
        </div>

        <p className="eyebrow mb-6 animate-slide-up">{siteConfig.title}</p>

        <h1 className="font-display text-6xl lg:text-8xl xl:text-[9rem] leading-[0.85] tracking-tight uppercase mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-ivory">SATYA</span>
          <br />
          <span className="text-gradient">GANESH</span>
        </h1>

        <p className="font-serif italic text-xl lg:text-2xl text-mist max-w-xl mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {siteConfig.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a href="#projects" className="btn-primary">Explore my work</a>
          <a href="#contact" className="btn-secondary">Contact me</a>
        </div>

        {hasAvatar && (
          <div className="flex justify-center gap-2 mt-8 animate-fade-in">
            {['Wave', 'Idle', 'Walking', 'Yes', 'ThumbsUp'].map((anim) => (
              <button
                key={anim}
                onClick={() => setAvatarAnimation(anim)}
                className={`px-3 py-1.5 text-[10px] uppercase tracking-wider transition-all ${
                  avatarAnimation === anim ? 'bg-accent text-ink' : 'bg-graphite/60 text-silver border border-slate/30'
                }`}
              >
                {anim}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}

useGLTF.preload(AVATAR_URL);