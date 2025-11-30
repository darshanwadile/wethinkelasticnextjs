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

gsap.registerPlugin(ScrollTrigger);

declare global {
  function Splitting(): void;
}

export default function Home() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Initialize Splitting.js for text animations after a short delay
    const initSplitting = async () => {
      try {
        if (typeof window !== 'undefined' && (window as any).Splitting) {
          (window as any).Splitting();
        }
        // Refresh ScrollTrigger after Splitting
        ScrollTrigger.refresh();
      } catch (err) {
        console.log('Splitting init error:', err);
      }
    };

    // Wait for DOM to be ready and images to load
    const handleReady = () => {
      setTimeout(() => {
        initSplitting();
      }, 200);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleReady);
    } else {
      handleReady();
    }

    // Also refresh when window loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    });

    // Refresh on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (document.readyState === 'loading') {
        document.removeEventListener('DOMContentLoaded', handleReady);
      }
      window.removeEventListener('load', handleResize);
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
