import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseGSAPOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: number | boolean;
  markers?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

export function useGSAP(
  animation: (ctx: gsap.Context) => void,
  deps: React.DependencyList = []
) {
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {
      animation(ctxRef.current!);
    });

    return () => {
      ctxRef.current?.revert();
    };
  }, deps);

  const createScrollTrigger = useCallback(
    (trigger: string | Element, vars: gsap.TweenVars, opts: UseGSAPOptions = {}) => {
      return ScrollTrigger.create({
        trigger,
        start: opts.start || 'top 80%',
        end: opts.end || 'bottom 20%',
        scrub: opts.scrub,
        markers: opts.markers || false,
        onEnter: opts.onEnter,
        onLeave: opts.onLeave,
        onEnterBack: opts.onEnterBack,
        onLeaveBack: opts.onLeaveBack,
        animation: gsap.to(trigger, vars),
      });
    },
    []
  );

  return { ctx: ctxRef.current, createScrollTrigger };
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return reduced;
}

import { useState } from 'react';