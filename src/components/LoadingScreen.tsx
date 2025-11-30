'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

const loadingImages = [
  '/assets/Loading/152c223f4359675788470.svg',
  '/assets/Loading/24a07612b16472c6a503f.svg',
  '/assets/Loading/338b04b3ad8edf6773599.svg',
  '/assets/Loading/4e7e9b9fc472434d65a23.svg',
  '/assets/Loading/556ce542d7fdbd78d032e.svg',
  '/assets/Loading/6a714ad31db5d83bc967b.svg',
  '/assets/Loading/7c9e22462b51ae93b5a17.svg',
  '/assets/Loading/8a2db0cd90582eb4b877d.svg',
  '/assets/Loading/9e5b57420355774e0a99d.svg',
  '/assets/Loading/109804494fa1878703f2c1.svg',
  '/assets/Loading/11d1acd8abd7b1efc4c23d.svg',
];

export const LoadingScreen = () => {
  useEffect(() => {
    const loadingScreen = document.getElementById('loadingScreen');
    const loaderImages = document.querySelectorAll('.container-loader-image');

    // Animate loading sequence
    function animateLoadingSequence() {
      const timeline = gsap.timeline();

      loaderImages.forEach((img, index) => {
        timeline.to(img, {
          opacity: 1,
          duration: 0.08,
          ease: 'power2.inOut',
        }, index * 0.3);

        timeline.to(img, {
          opacity: 0,
          duration: 0.08,
          ease: 'power2.inOut',
        }, (index * 0.3) + 0.15);
      });

      return timeline;
    }

    const handlePageLoad = () => {
      const loadingTimeline = animateLoadingSequence();

      loadingTimeline.to(loadingScreen, {
        y: '-100%',
        duration: 1.2,
        ease: 'power3.inOut',
        onComplete: () => {
          if (loadingScreen) {
            loadingScreen.style.display = 'none';
            loadingScreen.style.pointerEvents = 'none';
          }
        },
      });
    };

    window.addEventListener('load', handlePageLoad);

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  return (
    <div id="loadingScreen" className="loading-screen">
      <div className="loader-container">
        <div className="transition-outer">
          <div className="transition-inner">
            {loadingImages.map((src, index) => (
              <div key={index} className="container-loader-image">
                <img src={src} alt="We Think Elastic" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
