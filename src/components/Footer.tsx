export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 sm:mt-24 border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 py-6 sm:py-8 text-sm text-neutral-400">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* sol kısım */}
          <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            © {year} <span className="text-white/80 font-medium">Baran Çevrim</span>. All rights reserved.
          </p>

          {/* sağ kısım: sosyal linkler */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs">
            <a
              href="https://github.com/barancevrim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black rounded px-1"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/barancevrim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black rounded px-1"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@barancevrim.com"
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black rounded px-1"
              aria-label="Send email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}