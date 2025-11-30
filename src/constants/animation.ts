/**
 * Animation easing functions
 */
export const easing = {
  easeInOut: 'power2.inOut',
  easeOut: 'power2.out',
  easeIn: 'power2.in',
  smooth: 'quart.out',
  bounce: 'back.out',
  elastic: 'elastic.out',
  smooth3: 'sine.inOut',
};

/**
 * Animation durations (in seconds)
 */
export const duration = {
  short: 0.3,
  normal: 0.6,
  medium: 0.8,
  long: 1.2,
  extraLong: 1.5,
};

/**
 * ScrollTrigger common configurations
 */
export const scrollTriggerConfig = {
  standard: {
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: false,
    markers: false,
  },
  scrub: {
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 1,
    markers: false,
  },
  smooth: {
    start: 'top center',
    end: 'bottom center',
    scrub: 1,
    markers: false,
  },
};

/**
 * Color constants
 */
export const colors = {
  primary: '#3b82f6',
  secondary: '#8b5cf6',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  dark: '#1a1a1a',
  light: '#f5f5f5',
};

/**
 * Breakpoints
 */
export const breakpoints = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
};

/**
 * Common animation values
 */
export const animationDefaults = {
  staggerValue: 0.1,
  yDistance: 30,
  xDistance: 50,
  scaleValue: 0.9,
  rotationValue: 10,
};
