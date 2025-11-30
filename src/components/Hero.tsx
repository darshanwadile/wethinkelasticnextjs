'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  useEffect(() => {
    // Trigger hero animations after Splitting.js initializes
    const triggerHeroAnimations = () => {
      const heroTimeline = gsap.timeline({ delay: 0.3 });

      // Animate individual characters in "hello" - DRAMATIC ENTRANCE
      const helloChars = document.querySelectorAll('#container-hello h2 .char');

      if (helloChars.length > 0) {
        heroTimeline.from(helloChars, {
          opacity: 0,
          y: 150,
          rotateX: -90,
          rotateZ: 15,
          skewY: 10,
          stagger: {
            amount: 0.6,
            ease: 'power2.inOut',
          },
          duration: 1.2,
          ease: 'elastic.out(1.2, 0.8)',
        }, 0.2);
      }

      // Animate hero subtitle lines - slide in from left
      heroTimeline.from('.text-hello p', {
        x: -80,
        opacity: 0,
        stagger: 0.12,
        duration: 1.9,
        ease: 'power3.out',
      }, 0.4);

      // Hero parallax effect
      gsap.to('#container-hello', {
        scrollTrigger: {
          trigger: '#container-hello',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: -150,
        opacity: 0.5,
        ease: 'none',
      });

      // Video section animation
      gsap.from('#container-video-start', {
        scrollTrigger: {
          trigger: '#container-video-start',
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        scale: 0.8,
        opacity: 0,
        ease: 'power2.out',
      });

      // Typography title animations
      const titleChars = document.querySelectorAll('.hero-main-title .char');
      gsap.from(titleChars, {
        scrollTrigger: {
          trigger: '.typoTitle',
          start: 'top 70%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Animate content lines
      const contentLines = document.querySelectorAll('.content-typo-title p');
      gsap.from(contentLines, {
        scrollTrigger: {
          trigger: '.content-typo-title',
          start: 'top 75%',
          end: 'top 40%',
          toggleActions: 'play none none reverse',
        },
        x: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    // Wait for Splitting.js to process the text (after DOM ready)
    const timer = setTimeout(() => {
      triggerHeroAnimations();
    }, 500);

    window.addEventListener('load', () => {
      clearTimeout(timer);
      triggerHeroAnimations();
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div id="container-hello">
        <h2 data-splitting="chars">hello</h2>
        <div className="text-hello" data-splitting="items">
          <p>
            <span>We are the team</span>
          </p>
          <p>
            <span>we think elastic</span>
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div id="container-video-start">
        <video
          className="hero-video"
          src="/assets/video-start.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>

      {/* Typography Title Section */}
      <div className="container-typo-title">
        <div className="typoTitle">
          <h3 className="hero-main-title" data-splitting="chars">
            <span className="italic-we">we</span> HELP<br />
            THE BRANDS<br />
            <span className="italic-to">to</span> GROW<br />
            FASTER
          </h3>
        </div>
        <div className="content-typo-title" data-splitting="items">
          <p>
            <span>THROUGH STORYTELLING</span>
          </p>
          <p>
            <span>IMPACTING ⚡ AN IDENTITY</span>
          </p>
          <p>
            <span>STRONG VISUAL ◐ INTERFACES</span>
          </p>
        </div>
      </div>
    </>
  );
};
