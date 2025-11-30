/**
 * Type definitions for animation properties
 */

export interface AnimationOptions {
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  repeat?: number;
  yoyo?: boolean;
  onComplete?: () => void;
}

export interface ScrollTriggerOptions {
  trigger: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
}

export interface ComponentProps {
  className?: string;
  id?: string;
  ref?: React.RefObject<HTMLElement>;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
