'use client';

export function About() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-custom-light mb-8">About Us</h2>
        <div className="space-y-6 text-custom-light/80">
          <p className="text-lg leading-relaxed">
            We Think Elastic is a creative agency dedicated to transforming brands through exceptional storytelling, 
            strategic design, and innovative digital experiences.
          </p>
          <p className="text-lg leading-relaxed">
            Our team of experts collaborates to deliver solutions that drive growth and create lasting impact.
          </p>
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
              <p className="text-custom-light/60">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <p className="text-custom-light/60">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
              <p className="text-custom-light/60">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
