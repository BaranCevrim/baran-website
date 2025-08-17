export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 py-8 text-sm text-neutral-400">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* sol kısım */}
          <p className="text-xs md:text-sm text-gray-400">
            © {year} <span className="text-white/80 font-medium">Baran Çevrim</span>. All rights reserved.
          </p>

          {/* sağ kısım: sosyal linkler */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://github.com/barancevrim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/barancevrim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:baran@example.com"
              className="hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}