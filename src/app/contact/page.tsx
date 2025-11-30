'use client';

import React, { useEffect } from 'react';
import { Contact } from '@/components/Contact';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-custom-dark">
      <div className="pt-32 px-8">
        <h1 className="text-5xl font-bold text-custom-light mb-12">Get in Touch</h1>
        <div className="mb-20">
          <Contact />
        </div>
      </div>
    </main>
  );
}
