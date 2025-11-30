import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapInit = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Reset ScrollTrigger on mount to ensure clean state
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Refresh after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);
};
