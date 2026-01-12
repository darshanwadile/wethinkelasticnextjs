'use client';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold text-custom-light mb-6 leading-tight">
          We Think <span className="text-blue-400">Elastic</span>
        </h1>
        <p className="text-xl text-custom-light/60 mb-12">
          Branding • Digital • Ideas
        </p>
        <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition transform hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
}
