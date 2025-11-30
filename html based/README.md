# We Think Elastic - GSAP Animation Website

A professional, fully-animated website for "We Think Elastic" agency featuring smooth GSAP animations, custom cursor effects, and a modern design with responsive navigation.

## 🎨 Features

### Core Animations
- **Loading Screen**: Sequential SVG image carousel (11 images, ~3.3s duration) that smoothly transitions on page load
- **Custom Cursor**: Smooth yellow dot cursor following the mouse with GSAP ticker animations
- **Header Navigation**: Fixed positioning with scroll-based hide/show animations
- **Hero Section**: Character-level text animations with elastic easing effects
- **Infinite Auto-Scroll**: Logos section with seamless horizontal scrolling loop
- **Underline Animations**: Interactive underline effects on links using CSS variables
- **Responsive Navigation**: Mobile-friendly slide-in menu with GSAP stagger animations

### Sections
1. **Loading Screen** - Professional intro with rotating SVG images
2. **Hero** - "Hello" greeting with animated character entrance
3. **Projects** - Grid layout showcasing project work
4. **Expertise** - Horizontal scrolling expertise cards
5. **Team** - Infinite auto-scrolling client logos
6. **Contact** - Centered contact section with coffee GIF and email link

## 📁 Project Structure

```
GSAP/
├── index.html          # Main HTML structure with semantic markup
├── style.css           # Complete styling and CSS animations
├── script.js           # GSAP animations and JavaScript logic
├── README.md          # This file
└── assests/
    ├── clients/       # Client logo SVG files
    ├── Loading/       # Loading screen SVG images
    └── [other assets]
```

## 🛠️ Technologies Used

- **GSAP 3.12.5** - Animation engine with ScrollTrigger plugin
- **Splitting.js** - Character-level text animation
- **HTML5** - Semantic markup with proper accessibility attributes
- **CSS3** - Flexbox, Grid, custom properties, and media queries
- **Vanilla JavaScript** - Event handling and DOM manipulation

