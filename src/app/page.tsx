'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Navigation, Footer } from '@/components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGsapInit } from '@/hooks/useGsapInit';

// Dynamic imports to prevent hydration mismatch
const Hero = dynamic(() => import('@/components/Hero').then(mod => ({ default: mod.Hero })), { 
  ssr: false,
  loading: () => null 
});
const Portfolio = dynamic(() => import('@/components/Portfolio').then(mod => ({ default: mod.Portfolio })), { 
  ssr: false,
  loading: () => null 
});
const About = dynamic(() => import('@/components/About').then(mod => ({ default: mod.About })), { 
  ssr: false,
  loading: () => null 
});
const Contact = dynamic(() => import('@/components/Contact').then(mod => ({ default: mod.Contact })), { 
  ssr: false,
  loading: () => null 
});

gsap.registerPlugin(ScrollTrigger);

declare global {
  function Splitting(): void;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Initialize GSAP/ScrollTrigger
  useGsapInit();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !mounted) return;

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
  }, [mounted]);

  return (
    <main className="w-full overflow-x-hidden">
      {/* <LoadingScreen /> */}
      <Navigation />
      {mounted && (
        <>
          <Hero />
          <Portfolio />
          <About />
          <Contact />
        </>
      )}
      <Footer />
    </main>
  );
}
