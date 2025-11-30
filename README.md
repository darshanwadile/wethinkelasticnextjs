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

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000`

## 📦 Dependencies

### Core
- **next**: 14.0.0 - React framework
- **react**: 18.2.0 - UI library
- **react-dom**: 18.2.0 - DOM rendering

### Animation & Styling
- **gsap**: 3.12.2 - Professional-grade animations
- **tailwindcss**: 3.3.5 - Utility-first CSS
- **framer-motion**: 10.16.4 - React animation library (optional)

### Dev Dependencies
- **typescript**: 5.3.2 - Type safety
- **tailwindcss**: 3.3.5 - Styling
- **postcss**: 8.4.31 - CSS processing
- **autoprefixer**: 10.4.16 - CSS vendor prefixes

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

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      'custom-dark': '#1a1a1a',
      'custom-light': '#f5f5f5',
    },
  },
},
```

### Animations
Modify `globals.css` to adjust:
- Animation durations
- Easing functions
- Transform values
- Stagger delays

### Components
Each component is self-contained with its own GSAP timeline. Modify animation values in `useEffect` hooks.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's responsive prefixes (md:, lg:, etc.)

## 🚀 Performance Tips

1. **Code Splitting**: Next.js automatically code-splits components
2. **Image Optimization**: Use Next.js Image component for images
3. **CSS**: Tailwind purges unused styles in production
4. **GSAP**: ScrollTrigger is optimized for performance
5. **Bundle Size**: Tree-shaking removes unused GSAP features

## 📈 SEO Optimization

- Meta tags in layout.tsx
- Semantic HTML structure
- Proper heading hierarchy
- Mobile-responsive design
- Fast Core Web Vitals

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
1. Run `npm run build`
2. Deploy the `.next` folder
3. Set Node.js runtime to 18+

## 🐛 Troubleshooting

### Animations not working
- Ensure GSAP is imported correctly
- Check if ScrollTrigger is registered
- Verify CSS classes exist on elements

### Performance issues
- Reduce number of scroll triggers
- Use `will-change` CSS sparingly
- Profile with Chrome DevTools

### Build errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## 📝 License

MIT License - Feel free to use this template for your projects!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

For questions or issues, please open a GitHub issue or contact the development team.

---

**Happy Coding! 🎉**
