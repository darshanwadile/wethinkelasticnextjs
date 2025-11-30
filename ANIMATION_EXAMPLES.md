# Next.js GSAP Animation Examples

This file contains common animation patterns used in the project.

## 1. Basic Scroll Animation

```typescript
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from('.element', {
      scrollTrigger: {
        trigger: '.element',
        start: 'top 80%',
        end: 'top 20%',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
    });
  }, containerRef);

  return () => ctx.revert();
}, []);
```

## 2. Staggered Animation

```typescript
gsap.from('.item', {
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.1,  // 0.1s delay between each item
  ease: 'power2.out',
});
```

## 3. Timeline Animation

```typescript
const timeline = gsap.timeline();

timeline
  .from('.element-1', { opacity: 0, y: 50, duration: 0.8 })
  .from('.element-2', { opacity: 0, y: 50, duration: 0.8 }, 0.2)
  .from('.element-3', { opacity: 0, scale: 0.8, duration: 0.6 }, 0.4);
```

## 4. Hover Animation

```typescript
element.addEventListener('mouseenter', () => {
  gsap.to(element, {
    scale: 1.05,
    duration: 0.3,
    ease: 'power2.out',
  });
});

element.addEventListener('mouseleave', () => {
  gsap.to(element, {
    scale: 1,
    duration: 0.3,
    ease: 'power2.out',
  });
});
```

## 5. Parallax Scrolling

```typescript
gsap.to('.background', {
  y: window.innerHeight * 0.1,
  scrollTrigger: {
    trigger: '.section',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,  // Smooth parallax
  },
});
```

## 6. Text Animation

```typescript
// Split text into words
const words = text.split(' ').map(word => `<span>${word}</span>`);

gsap.to('span', {
  opacity: 1,
  y: 0,
  duration: 0.5,
  stagger: 0.05,
  ease: 'power2.out',
});
```

## 7. Form Animation

```typescript
const handleSubmit = (e) => {
  e.preventDefault();

  const button = e.currentTarget.querySelector('button');
  gsap.to(button, {
    scale: 0.95,
    duration: 0.1,
    yoyo: true,
    repeat: 1,
    onComplete: () => {
      // Submit form logic
    },
  });
};
```

## 8. Loading Animation

```typescript
gsap.to('.spinner', {
  rotation: 360,
  duration: 1,
  repeat: -1,
  ease: 'none',
  transformOrigin: '50% 50%',
});
```

## 9. Floating Animation

```typescript
gsap.to('.float-element', {
  y: 20,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});
```

## 10. Scroll Context (Best Practice)

```typescript
useEffect(() => {
  if (!containerRef.current) return;

  const ctx = gsap.context(() => {
    // All animations here are scoped to containerRef
    gsap.to('.element', { /* animation */ });
  }, containerRef);

  // Cleanup
  return () => ctx.revert();
}, []);
```

## GSAP.context Benefits

- ✅ Automatic cleanup on unmount
- ✅ Prevents memory leaks
- ✅ Scoped to specific DOM nodes
- ✅ Better performance
- ✅ Easy to manage multiple animations

## Tips & Tricks

1. **Use scrub for smooth scrolling**: `scrub: 1` creates a smooth connection to scroll
2. **Stagger for multiple elements**: Automatically delays each element's animation
3. **Ease functions**: Use `ease: 'power2.out'` for smooth animations
4. **Timeline for sequences**: Perfect for coordinating multiple animations
5. **Context for cleanup**: Always use `gsap.context()` in React
6. **Kill animations**: `gsap.killTweensOf('.element')` to stop animations
7. **Reverse animations**: `reverse()` on a timeline to play backwards

## Performance Tips

- Use CSS transforms (translate, scale, rotate) for best performance
- Avoid animating width/height; use scale instead
- Use `will-change: transform` for frequently animated elements
- Limit number of simultaneous animations
- Use `scrub: 1` instead of `scrub: true` for better performance

## Common Mistakes

❌ Not using `gsap.context()` in React
❌ Animating properties like width/left
❌ Not cleaning up animations on unmount
❌ Overusing animations (performance hit)
❌ Not testing on mobile devices

## Resources

- [GSAP Documentation](https://gsap.com/docs/)
- [ScrollTrigger Plugin](https://gsap.com/docs/v3/Plugins/ScrollTrigger)
- [Easing Visualization](https://gsap.com/resources/getting-started/Easing)
