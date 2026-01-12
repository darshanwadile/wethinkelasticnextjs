'use client';

export function Portfolio() {
  const projects = [
    { title: 'Project 1', description: 'Digital Experience' },
    { title: 'Project 2', description: 'Brand Identity' },
    { title: 'Project 3', description: 'Web Design' },
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-custom-light mb-12">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-custom-dark border border-custom-light/10 rounded-lg p-8 hover:border-blue-400/50 transition"
            >
              <h3 className="text-2xl font-bold text-custom-light mb-2">{project.title}</h3>
              <p className="text-custom-light/60">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
