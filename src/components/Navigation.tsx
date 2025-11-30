'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Navigation = () => {
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navListRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    let lastScrollY = 0;
    let headerHidden = false;

    // Header scroll hide/show animation
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        if (!headerHidden && header) {
          gsap.to(header, {
            y: -100,
            duration: 0.3,
            ease: 'power2.inOut',
          });
          headerHidden = true;
        }
      } else {
        if (headerHidden && header) {
          gsap.to(header, {
            y: 0,
            duration: 0.3,
            ease: 'power2.inOut',
          });
          headerHidden = false;
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Mobile menu toggle
    const menuButton = menuButtonRef.current;
    const nav = navListRef.current;

    const handleMenuClick = () => {
      if (nav) {
        nav.classList.toggle('active');

        if (nav.classList.contains('active')) {
          gsap.from('nav ul li', {
            x: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power2.out',
          });
        }
      }
    };

    if (menuButton) {
      menuButton.addEventListener('click', handleMenuClick);
    }

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (nav) {
          nav.classList.remove('active');
        }
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (menuButton) {
        menuButton.removeEventListener('click', handleMenuClick);
      }
    };
  }, []);

  return (
    <header
      ref={headerRef}
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 px-12 py-6 flex justify-between items-center bg-custom-dark h-auto"
    >
      <h1 className="m-0">
        <a
          href="/"
          title="We Think Elastic - Branding • Digital • Ideas"
          className="flex items-center"
        >
          <img
            src="/assets/favicon.png"
            alt="We Think Elastic"
            className="logo-img h-16 w-auto"
          />
        </a>
      </h1>

      <button
        ref={menuButtonRef}
        type="button"
        id="button-nav"
        aria-label="Menu"
        className="bg-none border-none cursor-pointer p-2 relative z-10 hidden sm:block"
      >
        <svg
          viewBox="0 0 30 30"
          className="w-8 h-8"
          style={{ fill: '#f2e2c2' }}
        >
          <rect x="0" y="10.5" width="30" height="2"></rect>
          <rect x="0" y="17.5" width="30" height="2"></rect>
        </svg>
      </button>

      <nav
        ref={navListRef}
        role="navigation"
        className="flex gap-28 items-center"
      >
        <ul className="flex gap-28 items-center">
          <li>
            <Link
              href="/projects"
              className="text-base font-semibold text-custom-light transition-colors duration-300 hover:text-orange-600 active:text-orange-600"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              href="/expertise"
              className="text-base font-semibold text-custom-light transition-colors duration-300 hover:text-orange-600 active:text-orange-600"
            >
              Expertise
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className="text-base font-semibold text-custom-light transition-colors duration-300 hover:text-orange-600 active:text-orange-600"
            >
              The team
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-base font-semibold text-custom-light transition-colors duration-300 hover:text-orange-600 active:text-orange-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
