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
        
        {/* Preload critical videos */}
        <link rel="preload" href="/assets/video-start.mp4" as="video" type="video/mp4" />
        
        {/* Preload critical project images */}
        <link rel="preload" href="/assets/thumbnail-peugeot-ac01e927d1befcd7.webp" as="image" />
        <link rel="preload" href="/assets/thumbnail-white-coffee-b1aada7092b251dc.webp" as="image" />
        <link rel="preload" href="/assets/thumbnail-kreme-47f2f7370631b92f.webp" as="image" />
        
        {/* Load Splitting.js from CDN - only this one is needed here */}
        <script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
      </head>
      <body className="bg-custom-dark text-custom-light">
        {children}
      </body>
    </html>
  );
}
