# Deployment Guide

This guide covers deploying your Next.js GSAP application to various platforms.

## 🚀 Pre-Deployment Checklist

- [ ] All animations working smoothly
- [ ] No console errors or warnings
- [ ] Responsive design tested on mobile
- [ ] Images optimized
- [ ] SEO meta tags configured
- [ ] Environment variables set
- [ ] Performance tested (Lighthouse)

## 📊 Performance Optimization

### Build Optimization

```bash
# Build and analyze bundle size
npm run build

# Output: Check .next/static for chunk sizes
```

### Image Optimization

```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/assets/image.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority // For above-fold images
/>
```

## 🌐 Vercel (Recommended)

### Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project settings

3. **Environment Variables**
   - Set variables in Vercel project settings
   - Add from `.env.local`

4. **Deploy**
   - Vercel automatically builds and deploys
   - Get your domain: `your-project.vercel.app`

### Vercel Specific Optimizations

```javascript
// next.config.js
module.exports = {
  images: {
    optimization: {
      quality: 75,
    },
  },
  compress: true,
};
```

## 🚀 Other Platforms

### Netlify

1. **Build Command**
   ```
   npm run build
   ```

2. **Publish Directory**
   ```
   .next
   ```

3. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### AWS Amplify

1. **Deploy**
   ```bash
   npm install -g @aws-amplify/cli
   amplify init
   amplify publish
   ```

### Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and Run**
   ```bash
   docker build -t gsap-nextjs .
   docker run -p 3000:3000 gsap-nextjs
   ```

## 🔐 Security

### Environment Variables

Never commit sensitive information:

```bash
# .gitignore
.env.local
.env.*.local
```

### Content Security Policy

Add to `next.config.js`:

```javascript
async function headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
        },
      ],
    },
  ];
}
```

## 📈 Monitoring & Analytics

### Google Analytics

```typescript
// Add to layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Web Vitals

Vercel automatically tracks Core Web Vitals:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run lint
```

## 🐛 Troubleshooting

### Issue: Build fails
**Solution**: 
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Issue: Animations not smooth
**Solution**: 
- Check if GSAP is properly imported
- Verify ScrollTrigger is registered
- Test on target devices

### Issue: Images not showing
**Solution**:
- Ensure images are in `public/` folder
- Use correct image paths
- Check file permissions

## 📋 Post-Deployment

1. **Test in Production**
   - Test all animations
   - Check mobile responsiveness
   - Verify forms work
   - Test navigation

2. **Monitor Performance**
   - Check Lighthouse score
   - Monitor Core Web Vitals
   - Check error logs

3. **Set Up Backups**
   - Enable automatic backups
   - Version your code
   - Monitor for issues

## 🎯 Performance Targets

- **Lighthouse Score**: 90+
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Bundle Size**: < 200KB (gzipped)

## 🔗 Useful Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Dashboard](https://vercel.com/dashboard)
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [Web Vitals Guide](https://web.dev/vitals/)

## ✅ Deployment Checklist

- [ ] Code pushed to repository
- [ ] Environment variables configured
- [ ] Build successful (`npm run build`)
- [ ] No lint errors (`npm run lint`)
- [ ] Animations tested in production
- [ ] Performance optimized
- [ ] SEO meta tags configured
- [ ] Analytics set up
- [ ] Domain configured
- [ ] SSL certificate enabled
- [ ] Backup strategy in place

---

**Ready to deploy?** Your application is production-ready! 🎉
