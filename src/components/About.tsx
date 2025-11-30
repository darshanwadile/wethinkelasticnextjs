'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useEffect(() => {
    const setupHorizontalScroll = () => {
      const horizontalScroll = document.querySelector('.horizontal-text-scroll') as HTMLElement;
      if (!horizontalScroll) return;

      const text = horizontalScroll.querySelector('.text') as HTMLElement;
      if (!text) return;

      gsap.set(text, { willChange: 'transform' });

      // Calculate the distance for horizontal scroll based on text width
      const scrollDistance = -(text.scrollWidth - window.innerWidth);

      // Create animation for the text scroll
      gsap.to(text, {
        x: scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalScroll,
          start: 'top top',
          end: () => `+=${horizontalScroll.scrollHeight * 3}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
          markers: false,
        },
      });

      // Animate images with parallax
      const images = text.querySelectorAll('span');
      images.forEach((img, index) => {
        gsap.to(img, {
          x: -60 * (index + 1),
          ease: 'none',
          scrollTrigger: {
            trigger: horizontalScroll,
            start: 'top top',
            end: () => `+=${horizontalScroll.scrollHeight * 3}`,
            scrub: 1.2,
          },
        });
      });
    };

    // Wait for elements to be in DOM
    const timer = setTimeout(() => {
      setupHorizontalScroll();
    }, 300);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', setupHorizontalScroll);
    window.addEventListener('resize', handleResize);

    // Expertise cards animation - only animate position, not opacity
    setTimeout(() => {
      const expertiseCards = document.querySelectorAll('.list-horizontal-text li');
      gsap.from(expertiseCards, {
        scrollTrigger: {
          trigger: '.list-horizontal-text',
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play none none none',
        },
        x: 100,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      });

      // Logos section
      const logosTrack = document.querySelector('.logos-track') as HTMLElement;
      if (logosTrack) {
        // Infinite scroll animation for logos
        gsap.to(logosTrack, {
          x: -logosTrack.scrollWidth / 2,
          duration: 20,
          ease: 'none',
          repeat: -1,
        });
      }

      const logoItems = document.querySelectorAll('.logo-item');
      gsap.from(logoItems, {
        scrollTrigger: {
          trigger: '#logos',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        scale: 0.5,
        stagger: 0.05,
        duration: 0.6,
        ease: 'back.out(1.7)',
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', setupHorizontalScroll);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Horizontal Scroll Section */}
      <div id="Expertise" className="container-horizontal">
        <div className="horizontal-text-scroll">
          <div className="text">
            <p>Expertise</p>
            <span>
              <img src="/assets/556ce542d7fdbd78d032e.svg" alt="We think Elastic" />
            </span>
            <span>
              <img src="/assets/6a714ad31db5d83bc967b.svg" alt="We think Elastic" />
            </span>
            <span>
              <img src="/assets/8a2db0cd90582eb4b877d.svg" alt="We think Elastic" />
            </span>
          </div>
        </div>
        <ul className="list-horizontal-text">
          <li>
            <h4>Strategy & Ideas</h4>
            <p>Positioning</p>
            <p>Brand platform</p>
            <p>Digital strategy</p>
            <p>Social strategy</p>
            <p>Content Marketing</p>
          </li>
          <li>
            <h4>Brand Identity</h4>
            <p>Logo</p>
            <p>Graphic identity</p>
            <p>Graphic charter</p>
            <p>Editorial charter</p>
            <p>Content creation</p>
            <p>Social media guidelines</p>
          </li>
          <li>
            <h4>Digital Experience</h4>
            <p>UI design</p>
            <p>Audit and UX design</p>
            <p>Showcase site</p>
            <p>E-commerce site</p>
            <p>Web Application</p>
            <p>Mobile Application</p>
          </li>
        </ul>
      </div>

      {/* Logos Section */}
      <div id="logos">
        <div className="logos-scroll-container">
          <div className="logos-track">
            <img src="/assets/clients/10c9b9eb661788ed09261f.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/11dc1bdfff517735151c01.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/12875d4d9e8bb95bfa429a.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/17c7455d574fc6222d226.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/27275550faa69b382a7d9.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/36984a1f5516144b66b9f.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/4de000aa0c2fcb4105f0b.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/5f9435b780f885130afd4.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/6ab6b3724d98d20326313.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/7317ec5c8943977044c6d.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/83862fc8dc3642ac61cbe.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/96ed762b4556f90f0f409.svg" alt="Client Logo" className="logo-item" />
            {/* Duplicate for seamless loop */}
            <img src="/assets/clients/10c9b9eb661788ed09261f.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/11dc1bdfff517735151c01.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/12875d4d9e8bb95bfa429a.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/17c7455d574fc6222d226.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/27275550faa69b382a7d9.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/36984a1f5516144b66b9f.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/4de000aa0c2fcb4105f0b.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/5f9435b780f885130afd4.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/6ab6b3724d98d20326313.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/7317ec5c8943977044c6d.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/83862fc8dc3642ac61cbe.svg" alt="Client Logo" className="logo-item" />
            <img src="/assets/clients/96ed762b4556f90f0f409.svg" alt="Client Logo" className="logo-item" />
          </div>
        </div>
      </div>
    </>
  );
};
