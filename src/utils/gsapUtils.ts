import gsap from 'gsap';

/**
 * Create a smooth scroll animation to an element
 */
export const smoothScrollTo = (
  target: HTMLElement | string,
  duration: number = 1
) => {
  const element =
    typeof target === 'string'
      ? document.querySelector(target)
      : target;

  if (!element) return;

  gsap.to(window, {
    scrollTo: element,
    duration,
    ease: 'power2.inOut',
  });
};

/**
 * Animate elements with stagger effect
 */
export const staggerAnimation = (
  selector: string,
  {
    duration = 0.8,
    stagger = 0.1,
    fromOpacity = 0,
    fromY = 30,
  }: {
    duration?: number;
    stagger?: number;
    fromOpacity?: number;
    fromY?: number;
  } = {}
) => {
  gsap.from(selector, {
    opacity: fromOpacity,
    y: fromY,
    duration,
    stagger,
    ease: 'power2.out',
  });
};

/**
 * Create a flip animation effect
 */
export const flipCard = (element: HTMLElement) => {
  gsap.to(element, {
    rotationY: 360,
    duration: 0.6,
    ease: 'back.out',
  });
};

/**
 * Bounce animation
 */
export const bounce = (element: HTMLElement, times: number = 3) => {
  gsap.to(element, {
    y: -20,
    duration: 0.2,
    repeat: times * 2 - 1,
    yoyo: true,
    ease: 'power2.inOut',
  });
};

/**
 * Pulse animation (scale up and down)
 */
export const pulse = (element: HTMLElement) => {
  gsap.to(element, {
    scale: 1.1,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

/**
 * Rotate animation
 */
export const rotate = (
  element: HTMLElement,
  degrees: number = 360,
  duration: number = 1
) => {
  gsap.to(element, {
    rotation: degrees,
    duration,
    ease: 'power2.inOut',
  });
};

/**
 * Gradient text animation
 */
export const animateGradientText = (element: HTMLElement) => {
  gsap.to(element, {
    backgroundPosition: '200% center',
    duration: 3,
    repeat: -1,
    ease: 'none',
  });
};
