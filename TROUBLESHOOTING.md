# 🔧 Troubleshooting Guide

Common issues and solutions for your Next.js GSAP project.

---

## 🚀 Installation & Setup Issues

### Issue: `npm install` fails

**Symptoms:**
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

**Solution:**
```powershell
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock
Remove-Item -Recurse node_modules
Remove-Item package-lock.json

# Reinstall
npm install
```

---

### Issue: Node.js version incompatibility

**Symptoms:**
```
node: The specified procedure could not be found
```

**Solution:**
1. Check Node.js version: `node -v`
2. Should be 16.x or higher
3. Update from [nodejs.org](https://nodejs.org)
4. Restart terminal and try again

---

### Issue: Port 3000 already in use

**Symptoms:**
```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:**
```powershell
# On Windows - Find and kill process on port 3000
Get-Process node | Stop-Process -Force

# Or use different port
npm run dev -- -p 3001
```

---

## 🎬 Animation Issues

### Issue: Animations not running

**Symptoms:**
- Elements have no animation
- GSAP not triggering

**Solution:**
1. Verify GSAP is imported: `import gsap from 'gsap'`
2. Check ScrollTrigger is registered:
   ```typescript
   import { ScrollTrigger } from 'gsap/ScrollTrigger';
   gsap.registerPlugin(ScrollTrigger);
   ```
3. Ensure refs are attached to DOM elements
4. Check browser console for errors

**Code Example:**
```typescript
useEffect(() => {
  if (!containerRef.current) return; // This check is important!

  const ctx = gsap.context(() => {
    gsap.from('.element', { opacity: 0, duration: 1 });
  }, containerRef);

  return () => ctx.revert();
}, []);
```

---

### Issue: Animations jumpy or stuttering

**Symptoms:**
- Animation appears to stutter
- Parallax effect is not smooth

**Solution:**
```typescript
// Use scrub for smooth scrolling
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.element',
    scrub: 1,  // Smooth scrub value
  },
  y: 100,
});
```

---

### Issue: Hover effects not working

**Symptoms:**
- Hover animations don't trigger
- Mouse events not firing

**Solution:**
```typescript
// Add proper event listeners
gsap.utils.toArray<HTMLElement>('.card').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, { scale: 1.05, duration: 0.3 });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, { scale: 1, duration: 0.3 });
  });
});
```

---

## 🎨 Styling Issues

### Issue: Tailwind classes not applying

**Symptoms:**
- Classes like `bg-blue-500` don't work
- Styles appear to be missing

**Solution:**
1. Check `tailwind.config.js` includes your files:
   ```javascript
   content: [
     './src/pages/**/*.{js,ts,jsx,tsx}',
     './src/components/**/*.{js,ts,jsx,tsx}',
     './src/app/**/*.{js,ts,jsx,tsx}',
   ],
   ```
2. Ensure CSS file imports: `@import 'tailwindcss/base'`
3. Clear cache: `npm run dev -- --clean`

---

### Issue: Custom colors not showing

**Symptoms:**
- Custom color classes don't work

**Solution:**
Check `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'custom-dark': '#1a1a1a',  // Add your colors
      'custom-light': '#f5f5f5',
    },
  },
},
```

---

### Issue: Responsive design not working

**Symptoms:**
- Mobile styles not applying
- Layout breaks on certain screen sizes

**Solution:**
Use proper Tailwind breakpoints:
```jsx
// ✅ Correct
<div className="text-sm md:text-lg lg:text-xl">

// ❌ Wrong
<div className="text-lg">
```

---

## 🔴 Runtime Errors

### Issue: `Cannot find module 'gsap'`

**Symptoms:**
```
Module not found: Can't resolve 'gsap'
```

**Solution:**
```powershell
# Install GSAP
npm install gsap

# Verify installation
npm list gsap
```

---

### Issue: `TypeScript error: Cannot find name`

**Symptoms:**
```
Cannot find name 'HTMLElement'
```

**Solution:**
Ensure proper TypeScript configuration in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
  }
}
```

---

### Issue: `useRef` showing error

**Symptoms:**
```
Cannot use 'useRef' outside of a component
```

**Solution:**
- Ensure you're in a React component
- Add `'use client'` at the top of component files
- Import useRef: `import { useRef } from 'react'`

**Example:**
```typescript
'use client';  // ← Add this

import { useRef, useEffect } from 'react';

export const MyComponent = () => {
  const ref = useRef(null);  // ✅ Now it works
  // ...
};
```

---

## 🌐 Deployment Issues

### Issue: Build fails in production

**Symptoms:**
```
npm run build fails
```

**Solution:**
```powershell
# Clear Next.js cache
Remove-Item -Recurse .next

# Rebuild
npm run build

# Check for errors
npm run lint
```

---

### Issue: Animations don't work after deployment

**Symptoms:**
- Works locally but not on production

**Solution:**
1. Verify GSAP is bundled correctly
2. Check browser console for errors
3. Ensure ScrollTrigger is registered
4. Check for console errors: F12 → Console

---

### Issue: Images not showing in production

**Symptoms:**
- Images load locally but not after deploy

**Solution:**
1. Place images in `public/` folder
2. Use correct paths: `/assets/image.jpg`
3. Don't use relative paths
4. Check file permissions

```jsx
// ✅ Correct
<img src="/assets/image.jpg" />

// ❌ Wrong
<img src="./assets/image.jpg" />
```

---

## 🧪 Testing & Debugging

### Enable GSAP Debug Mode

```typescript
// Show ScrollTrigger markers for debugging
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.element',
    markers: true,  // ← Shows visual markers
  },
  opacity: 1,
});
```

---

### Check Component Rendering

```typescript
useEffect(() => {
  console.log('Component mounted');
  
  return () => {
    console.log('Component unmounted');
  };
}, []);
```

---

### Verify GSAP Installation

```javascript
// In browser console
console.log(gsap.version);  // Should show version number
console.log(ScrollTrigger);  // Should exist
```

---

## 💾 Common Configuration Issues

### Issue: Environment variables not loading

**Symptoms:**
- `process.env.NEXT_PUBLIC_*` is undefined

**Solution:**
1. Variables must start with `NEXT_PUBLIC_`
2. Create `.env.local` file (from `.env.example`)
3. Add variables:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```
4. Restart dev server
5. Access via: `process.env.NEXT_PUBLIC_API_URL`

---

### Issue: ESLint warnings

**Symptoms:**
```
ESLint error: 'dependency' is missing
```

**Solution:**
Add missing dependency to useEffect array:
```typescript
// ❌ Wrong
useEffect(() => {
  doSomething(dependency);
}, []); // Missing dependency

// ✅ Correct
useEffect(() => {
  doSomething(dependency);
}, [dependency]);
```

---

## 📚 Browser Compatibility Issues

### Issue: Animations not smooth on older browsers

**Solution:**
- Use CSS fallbacks
- Test on target browsers
- Consider using `will-change`

```css
.animated-element {
  will-change: transform;
  transform: translateZ(0); /* GPU acceleration */
}
```

---

## 🔄 Git & Version Control Issues

### Issue: Files not being tracked

**Symptoms:**
```
fatal: not a git repository
```

**Solution:**
```powershell
cd c:\Deck\BOC\WD\GSAP\nextjs-frontend
git init
git add .
git commit -m "Initial commit"
```

---

### Issue: Node modules taking too much space

**Solution:**
```powershell
# Add to .gitignore (already done)
node_modules/

# Clean up locally
Remove-Item -Recurse node_modules
npm install
```

---

## 📞 Getting Help

### Check These Resources First

1. **Error Message**: Search the error text online
2. **Component Issues**: Check component file and useEffect
3. **Style Issues**: Check `tailwind.config.js` and class names
4. **Animation Issues**: Check GSAP documentation
5. **Build Issues**: Check `next.config.js`

### Useful Commands for Debugging

```powershell
# Check Node version
node -v

# Check npm version
npm -v

# List installed packages
npm list

# Check specific package
npm list gsap

# Clear cache and reinstall
npm cache clean --force
npm install

# Build and check for errors
npm run build

# Lint code
npm run lint
```

---

## 🎯 Quick Fixes Checklist

- [ ] Clear npm cache: `npm cache clean --force`
- [ ] Delete node_modules: `Remove-Item -Recurse node_modules`
- [ ] Reinstall: `npm install`
- [ ] Clear Next.js cache: `Remove-Item -Recurse .next`
- [ ] Restart dev server: `npm run dev`
- [ ] Check browser console: F12 → Console
- [ ] Check for TypeScript errors: `npm run build`
- [ ] Verify GSAP is imported
- [ ] Check refs are attached
- [ ] Ensure components have `'use client'`

---

## 🚨 Still Having Issues?

1. **Read Documentation**: Check `README.md` and guides
2. **Check Console**: F12 → Console for errors
3. **Verify Setup**: Follow `GETTING_STARTED.md`
4. **Search Online**: Search error message
5. **Clean Install**: Try fresh `npm install`

---

## 📝 Issue Template

When reporting issues, include:

```
**Environment:**
- Node version: (from `node -v`)
- npm version: (from `npm -v`)
- OS: Windows

**Issue:**
- What doesn't work?
- What did you try?
- What was the result?

**Error Message:**
(Copy full error from console)

**Steps to Reproduce:**
1. ...
2. ...
3. ...
```

---

**Remember:** Most issues are solved by a clean install of dependencies!

