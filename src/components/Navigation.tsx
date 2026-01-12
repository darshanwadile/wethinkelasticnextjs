export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-custom-dark/80 backdrop-blur border-b border-custom-light/10">
      <div className="px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-custom-light">Logo</div>
        <ul className="hidden md:flex gap-8 text-custom-light">
          <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
          <li><a href="/expertise" className="hover:text-blue-400 transition">Expertise</a></li>
          <li><a href="/projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="/team" className="hover:text-blue-400 transition">Team</a></li>
          <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
