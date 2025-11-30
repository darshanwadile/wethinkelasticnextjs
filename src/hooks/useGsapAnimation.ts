import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimation = (options?: {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Set up scroll trigger animations
      if (options?.trigger) {
        gsap.to('.scroll-trigger', {
          scrollTrigger: {
            trigger: options.trigger,
            start: options.start || 'top 80%',
            end: options.end || 'bottom 20%',
            scrub: options.scrub || false,
            markers: options.markers || false,
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [options]);

  return containerRef;
};

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-animate]').forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
            markers: false,
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

export const useTextAnimation = (text: string) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !text) return;

    const ctx = gsap.context(() => {
      const words = containerRef.current?.querySelectorAll('.word-break');
      gsap.to(words, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  return containerRef;
};
