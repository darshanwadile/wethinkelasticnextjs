# GSAP Next.js Portfolio

A modern, high-performance portfolio website built with Next.js 14, GSAP 3, and Tailwind CSS. Features smooth scroll animations, interactive components, and a responsive design.

## 🚀 Features

- **GSAP Animations**: Smooth, performant animations using GSAP ScrollTrigger
- **Next.js 14**: Latest Next.js with App Router and Server Components
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Responsive Design**: Mobile-first approach that works on all devices
- **Dark Theme**: Modern dark UI with gradient accents
- **Component-Based**: Modular, reusable React components
- **Type-Safe**: Full TypeScript support
- **SEO Optimized**: Built-in Next.js SEO optimizations

## 📋 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Portfolio.tsx       # Portfolio/Projects section
│   ├── Contact.tsx         # Contact form section
│   ├── Footer.tsx          # Footer section
│   └── index.ts            # Component exports
├── hooks/
│   └── useGsapAnimation.ts # Custom GSAP hooks
├── styles/
│   └── globals.css         # Global styles and animations
└── types/
    └── (TypeScript types)

public/
├── assets/
│   ├── clients/            # Client logos
│   └── Loading/            # Loading animations/images
```

## 🎨 Components

### Navigation
- Fixed navigation bar with smooth scroll links
- Gradient branding
- Responsive mobile menu ready

### Hero
- Full-screen landing section
- Gradient background with animated blobs
- Smooth parallax scrolling effect
- Floating button animation

### About
- Feature cards with icons
- Scroll-triggered animations
- Hover effects on cards
- Grid layout (1-2-4 responsive)

### Portfolio
- Project showcase grid
- Scale animations on scroll
- Hover effects with scale
- Project categories and descriptions

### Contact
- Contact form with validation
- Animated form inputs
- Gradient button with submit animation
- Smooth form transitions

### Footer
- Links and social connections
- Copyright information
- Staggered animation on scroll
- Responsive layout

## 🎬 GSAP Animations

The project uses GSAP with ScrollTrigger for:
- **Scroll Animations**: Elements animate as they come into view
- **Parallax Effects**: Background movement on scroll
- **Stagger Animations**: Multiple elements animate with delays
- **Hover Effects**: Interactive element transformations
- **Timeline Animations**: Sequenced animations on page load
- **Form Animations**: Smooth form interaction feedback




For questions or issues, please open a GitHub issue or contact the development team.

---

**Happy Coding! 🎉**
