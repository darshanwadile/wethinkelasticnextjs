'use client';

import { useEffect } from 'react';
import {
  Navigation,
  Hero,
  Portfolio,
  About,
  Contact,
  Footer,
  LoadingScreen,
} from '@/components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGsapInit } from '@/hooks/useGsapInit';

gsap.registerPlugin(ScrollTrigger);

declare global {
  function Splitting(): void;
}

export default function Home() {
  // Initialize GSAP/ScrollTrigger
  useGsapInit();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Refresh ScrollTrigger on window load
    const handleLoad = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    };
    window.addEventListener('load', handleLoad);

    // Refresh on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      {/* <LoadingScreen /> */}
      <Navigation />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
