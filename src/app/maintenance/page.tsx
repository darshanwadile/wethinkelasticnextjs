'use client';

import { useEffect, useState } from 'react';

export default function MaintenancePage() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    // Set current time on client side
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Icon/Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-25 blur-lg animate-pulse"></div>
            <svg
              className="w-24 h-24 text-blue-400 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Under
          <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Maintenance
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          We are currently performing scheduled maintenance to improve your experience.
        </p>

        {/* Message */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-8 mb-8 space-y-4">
          <p className="text-slate-300 text-lg">
            We apologize for any inconvenience and appreciate your patience.
          </p>
          <div className="pt-4 border-t border-slate-700">
            <p className="text-slate-400 text-sm mb-2">Expected to be back online within</p>
            <p className="text-2xl font-semibold text-blue-400">2 hours</p>
          </div>
        </div>

        {/* Current time */}
        {time && (
          <div className="mb-8 text-slate-400 text-sm">
            <p>Current time: <span className="text-blue-400 font-mono font-semibold">{time}</span></p>
          </div>
        )}

        {/* Contact info */}
        <div className="space-y-4">
          <p className="text-slate-400 text-sm">
            For urgent inquiries, please contact us at
          </p>
          <a
            href="mailto:support@example.com"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            support@example.com
          </a>
        </div>

        {/* Footer text */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-500 text-xs">
            We appreciate your understanding while we make improvements
          </p>
        </div>
      </div>
    </div>
  );
}
