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

    // Initialize Splitting.js for text animations after fonts load
    const initSplitting = async () => {
      try {
        // Wait for DOM and fonts
        await new Promise(resolve => setTimeout(resolve, 600));
        
        if (typeof window !== 'undefined' && (window as any).Splitting) {
          (window as any).Splitting();
        }
        
        // Refresh ScrollTrigger after everything is ready
        ScrollTrigger.refresh();
      } catch (err) {
        console.log('Splitting init error:', err);
      }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initSplitting();
      }, { once: true });
    } else {
      initSplitting();
    }

    // Also refresh when fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
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
