'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  useEffect(() => {
    // Contact section animations
    const containerContactText = document.querySelector('.container-contact-text');
    
    if (containerContactText) {
      gsap.from('.container-contact-text p', {
        scrollTrigger: {
          trigger: '.contact',
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play none none none',
        },
        x: 50,
        stagger: 0.15,
        duration: 1,
        ease: 'power2.out',
      });
    }

    // Underline animation on hover
    const underlineLinks = document.querySelectorAll('.underline');
    underlineLinks.forEach((link) => {
      link.addEventListener('mouseenter', function () {
        gsap.to(this, {
          '--line-width': '100%',
          duration: 0.4,
          ease: 'power2.out',
        } as any);
      });

      link.addEventListener('mouseleave', function () {
        gsap.to(this, {
          '--line-width': '0%',
          duration: 0.4,
          ease: 'power2.out',
        } as any);
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="contact" className="contact">
      <div className="container-contact-text" data-splitting="items">
        <p>
          <span>You have a beautiful</span>
        </p>
        <p>
          <span>Project? Let's talk</span>
        </p>
        <p>
          <span>about it.&nbsp;</span>
        </p>
        <p>
          <span>
            around a{' '}
            <a
              className="underline"
              href="mailto:uncafe@wethinkelastic.com"
              title="Contact"
            >
              {' '}
              Good coffee
            </a>
          </span>
        </p>
      </div>
      <div className="gif">
        <img src="/assets/cafe.gif" alt="Coffee animation" className="coffee-gif" />
      </div>
    </div>
  );
};
