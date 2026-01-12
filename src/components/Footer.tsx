export function Footer() {
  return (
    <footer className="bg-custom-dark border-t border-custom-light/10 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-custom-light font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-custom-light/60">
              <li><a href="/about" className="hover:text-custom-light transition">About</a></li>
              <li><a href="/blog" className="hover:text-custom-light transition">Blog</a></li>
              <li><a href="/careers" className="hover:text-custom-light transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-custom-light font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-custom-light/60">
              <li><a href="/expertise" className="hover:text-custom-light transition">Expertise</a></li>
              <li><a href="/projects" className="hover:text-custom-light transition">Projects</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-custom-light font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-custom-light/60">
              <li><a href="/privacy" className="hover:text-custom-light transition">Privacy</a></li>
              <li><a href="/terms" className="hover:text-custom-light transition">Terms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-custom-light font-bold mb-4">Contact</h3>
            <p className="text-custom-light/60">support@example.com</p>
          </div>
        </div>
        <div className="border-t border-custom-light/10 pt-8 text-center text-custom-light/60">
          <p>&copy; 2026 We Think Elastic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
