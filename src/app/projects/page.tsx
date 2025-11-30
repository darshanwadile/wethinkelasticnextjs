'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Splitting from 'splitting';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Peugeot',
    category: 'Branding',
    image: '/assets/thumbnail-peugeot-ac01e927d1befcd7.webp',
    type: 'image',
  },
  {
    id: 2,
    title: 'HEC Paris IEC',
    category: 'Branding, Digital, Stratégie',
    video: '/assets/thumnail-IEC.mp4',
    type: 'video',
  },
  {
    id: 3,
    title: 'White Coffee',
    category: 'Branding, Stratégie',
    image: '/assets/thumbnail-white-coffee-b1aada7092b251dc.webp',
    type: 'image',
  },
  {
    id: 4,
    title: 'Beev',
    category: 'Branding, Digital, Stratégie',
    video: '/assets/thumnail-beev.mp4',
    type: 'video',
  },
  {
    id: 5,
    title: 'Kreme',
    category: 'Branding, Stratégie',
    image: '/assets/thumbnail-kreme-47f2f7370631b92f.webp',
    type: 'image',
  },
];

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Heading text animation with Splitting
      try {
        const heading = document.querySelector('.discover-heading');
        if (heading) {
          Splitting({ target: heading, by: 'chars' });
          const chars = document.querySelectorAll('.discover-heading .char');
          gsap.from(chars, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.discover-heading',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }
      } catch (err) {
        console.log('Splitting error:', err);
      }

      // Staggered projects animation (left-right alternating)
      const projectItems = document.querySelectorAll('.projects-list .project-item');
      if (projectItems.length > 0) {
        projectItems.forEach((project: any, i: number) => {
          const isEven = i % 2 === 0;
          const fromX = isEven ? -100 : 100; // Even indices come from left, odd from right

          gsap.from(project, {
            x: fromX,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: project,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            delay: i * 0.15,
          });
        });
      }

      // Project item hover animation
      projectItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            scale: 1.05,
            duration: 0.4,
            ease: 'power2.out',
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
          });
        });
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navigation />
      <main className="w-full bg-custom-dark">
        {/* Full viewport hero section */}
        <section className="w-full h-screen flex flex-col items-center justify-center pt-32 px-8 relative">
          <h1 className="discover-heading text-9xl md:text-8xl sm:text-6xl font-bold text-center mb-16" style={{ letterSpacing: '-0.08em' }}>
            <span style={{ color: '#f3c77c' }}>DISCOVER</span>
            <br />
            <span style={{ color: '#e7ceb0' }}>our </span> <span style={{ color: '#f3c77c' }}>PROJECTS</span>
          </h1>

          <div className="w-full max-w-6xl">
            {/* Filter buttons */}
            <div className="flex justify-center gap-4 mb-20 flex-wrap">
              <button className="px-6 py-2 border-2 border-custom-light text-custom-light font-semibold rounded-full hover:bg-custom-light hover:text-custom-dark transition-all duration-300">
                ALL
              </button>
              <button className="px-6 py-2 border-2 border-custom-light text-custom-light font-semibold rounded-full hover:bg-custom-light hover:text-custom-dark transition-all duration-300">
                STRATEGY
              </button>
              <button className="px-6 py-2 border-2 border-custom-light text-custom-light font-semibold rounded-full hover:bg-custom-light hover:text-custom-dark transition-all duration-300">
                BRANDING
              </button>
              <button className="px-6 py-2 border-2 border-custom-light text-custom-light font-semibold rounded-full hover:bg-custom-light hover:text-custom-dark transition-all duration-300">
                DIGITAL
              </button>
            </div>
          </div>
        </section>

        {/* Projects List */}
        <section className="w-full bg-custom-dark px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="projects-list space-y-24">
              {projects.map((project, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={project.id}
                    className={`project-item flex items-center gap-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Project Image/Video */}
                    <div className="w-1/2 flex-shrink-0">
                      <div className="rounded-lg overflow-hidden bg-gray-800 aspect-square">
                        {project.type === 'image' ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <video
                            src={project.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                          ></video>
                        )}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="w-1/2 flex-shrink-0">
                      <h3 className="text-5xl md:text-4xl font-bold text-custom-light mb-4">
                        {project.title}
                      </h3>
                      <p className="text-xl text-custom-light/80 font-semibold mb-8">
                        {project.category}
                      </p>
                      <a
                        href="#"
                        className="inline-block px-8 py-3 border-2 border-custom-light text-custom-light font-semibold rounded-full hover:bg-custom-light hover:text-custom-dark transition-all duration-300"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
