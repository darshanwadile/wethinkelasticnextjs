import type { ReactNode } from 'react';
import '@/styles/globals.css';

export const metadata = {
  title: 'We Think Elastic - Branding • Digital • Ideas',
  description: 'Hello, nous sommes l\'équipe We Think Elastic nous aidons les marques à grandir plus vite grâce à un Storytelling impactant une identité visuelle forte des interfaces digitales ultra fluides',
  icons: {
    icon: '/assets/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.png" />
        
        {/* Preload TypeKit fonts */}
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="dns-prefetch" href="https://use.typekit.net" />
        
        {/* Preload external scripts */}
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" as="script" />
        <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" as="script" />
        <link rel="preload" href="https://unpkg.com/splitting/dist/splitting.min.js" as="script" />
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
        <script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
      </head>
      <body className="bg-custom-dark text-custom-light">
        {children}
      </body>
    </html>
  );
}
