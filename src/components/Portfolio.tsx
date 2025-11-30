'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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

export const Portfolio = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const setupPortfolioAnimations = () => {
      try {
        // Ribbon rotation animation
        const ribbon = document.querySelector('.ribbon-svg') as HTMLElement;
        if (ribbon) {
          gsap.to(ribbon, {
            rotation: 360,
            scrollTrigger: {
              trigger: '#our-projects',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
            ease: 'none',
          });
        }

        // Projects diagonal fall-in animation
        const projects = document.querySelectorAll('.diagonal-projects .project');
        if (projects.length > 0) {
          projects.forEach((project: any, i: number) => {
            gsap.from(project, {
              y: -200,
              opacity: 0,
              duration: 1.1,
              ease: 'bounce.out',
              scrollTrigger: {
                trigger: project,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
              delay: i * 0.15,
            });
          });
        }

        // CTA button animation
        const ctaButton = document.querySelector('.cta-oval') as HTMLElement;
        if (ctaButton) {
          gsap.from(ctaButton, {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: ctaButton,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          });
        }

        // Refresh ScrollTrigger
        ScrollTrigger.refresh();
      } catch (err) {
        console.log('Portfolio animation error:', err);
      }
    };

    // Wait longer for DOM to be ready (for Vercel compatibility)
    const timer = setTimeout(() => {
      setupPortfolioAnimations();
    }, 1000);

    // Setup after window load
    window.addEventListener('load', () => {
      setTimeout(() => {
        setupPortfolioAnimations();
        ScrollTrigger.refresh();
      }, 300);
    }, { once: true });

    // Project hover animations
    const projectItems = document.querySelectorAll('.diagonal-projects .project');
    projectItems.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          scale: 1.12,
          zIndex: 100,
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          scale: 1,
          zIndex: 'auto',
          duration: 0.4,
          ease: 'power2.out',
        });
      });
    });

    window.addEventListener('resize', () => {
      ScrollTrigger.refresh();
    });

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      projectItems.forEach((item) => {
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div id="our-projects">
      {/* Ribbon */}
      <div id="ribbon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="175"
          height="175"
          viewBox="0 0 175 175"
          className="ribbon-svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M87.5,87.5 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
            />
          </defs>
          <g className="ribbon-text-rotate">
            <text
              fontSize="22"
              fontFamily="'futura-pt', sans-serif"
              fill="#e7ceb0"
              fontWeight="bold"
              letterSpacing="0.2em"
            >
              <textPath xlinkHref="#circlePath" startOffset="0">
                • NOS PROJETS • NOS PROJETS • NOS PROJETS •
              </textPath>
            </text>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="175"
          height="175"
          viewBox="0 0 175 175"
          className="arrow-svg-fixed"
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 20, pointerEvents: 'none' }}
        >
          <g>
            <line x1="87.5" y1="70" x2="87.5" y2="115" stroke="#e7ceb0" strokeWidth="4" strokeLinecap="round" />
            <polyline
              points="77,105 87.5,115 98,105"
              fill="none"
              stroke="#e7ceb0"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* Projects Grid */}
      <div className="container-grid grid-project">
        <div className="diagonal-projects">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project project-${project.id}`}
            >
              <figure>
                {project.type === 'image' ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <video src={project.video} autoPlay muted loop playsInline></video>
                )}
                <figcaption>
                  <h5>{project.title}</h5>
                  <p data-category>{project.category}</p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="cta-oval-wrapper">
        <a className="cta-oval" href="#" title="Découvrez tous nos projets">
          Discover all<br />
          OUR PROJECTS
        </a>
      </div>
    </div>
  );
};
