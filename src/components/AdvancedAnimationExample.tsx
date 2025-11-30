'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Example Advanced Component with Multiple Animation Types
 * This demonstrates best practices for complex animations
 */

interface AdvancedComponentProps {
  title?: string;
  description?: string;
}

export const AdvancedAnimationExample: React.FC<AdvancedComponentProps> = ({
  title = 'Advanced Animations',
  description = 'Explore complex animation patterns',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Main animation setup
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Timeline animation for intro
      const timeline = gsap.timeline();

      timeline
        .from('.title', {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
        })
        .from('.description', {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: 'power2.out',
        }, 0.2)
        .from('.card', {
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out',
        }, 0.4);

      // Scroll trigger animation
      gsap.from('.scroll-card', {
        scrollTrigger: {
          trigger: '.scroll-card',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          markers: false,
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });

      // Add hover effects to interactive elements
      gsap.utils
        .toArray<HTMLElement>('.interactive-card')
        .forEach((element) => {
          element.addEventListener('mouseenter', () => {
            gsap.to(element, {
              scale: 1.05,
              y: -10,
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          element.addEventListener('mouseleave', () => {
            gsap.to(element, {
              scale: 1,
              y: 0,
              boxShadow: '0 0px 0px rgba(59, 130, 246, 0)',
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Floating animation
  useEffect(() => {
    gsap.to('.float', {
      y: 15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 px-4 bg-gradient-to-b from-custom-dark to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="title text-4xl md:text-5xl font-bold mb-4 opacity-0">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="description text-gray-400 text-lg opacity-0">
            {description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="card interactive-card p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-all cursor-pointer opacity-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mb-4 float"></div>
              <h3 className="text-xl font-bold text-white mb-2">
                Feature {item}
              </h3>
              <p className="text-gray-400">
                Smooth animations with GSAP and React Hooks
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Section */}
        <div className="mt-20 pt-20 border-t border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Scroll Down to See Animations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="scroll-card p-8 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg border border-blue-700 opacity-0"
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  Scroll Card {item}
                </h4>
                <p className="text-blue-100">
                  This card animates in as you scroll down the page
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAnimationExample;
