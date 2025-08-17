// app/blog/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Mühendislik, yazılım ve projeler üzerine notlar.",
};

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
};

// Şimdilik sahte veri (sonra MDX/Contentlayer'e geçeriz)
const posts: Post[] = [
  {
    slug: "io-counter-arch",
    title: "IO Counter: Mimari ve Akış",
    excerpt:
      "Input/Output izleme için kurduğum hafif mimari: veri modeli, event akışı ve performans ipuçları.",
    tag: "Engineering",
  },
  {
    slug: "py-ts-pipeline",
    title: "Python ⇄ TypeScript: Basit Data Pipeline",
    excerpt:
      "Saha verisini Python ile işleyip front-end’e güvenle aktarma: tipler, validasyon, dosya düzeni.",
    tag: "Data/FE",
  },
  {
    slug: "cad-automation",
    title: "AutoCAD Otomasyonunda Pratikler",
    excerpt:
      "AutoLISP + Python ile tekrarlı CAD işlerini otomatikleştirme, raporlama ve versiyonlama.",
    tag: "Automation",
  },
];

export default function BlogPage() {
  return (
    <section className="section py-16">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Blog</h1>
        <p className="mt-2 text-neutral-300">
          Mühendislik notları, proje öyküleri ve küçük ipuçları.
        </p>
      </header>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="card card-hover p-5 h-full flex flex-col"
          >
            <div className="text-xs text-neutral-400">{p.tag}</div>
            <h2 className="mt-1 text-lg font-semibold text-white">{p.title}</h2>
            <p className="mt-2 text-sm text-neutral-300 flex-1">{p.excerpt}</p>

            <div className="mt-4">
              <Link
                href={`/blog/${p.slug}`}
                className="text-sm text-orange-300 hover:text-orange-200"
                aria-label={`${p.title} yazısını oku`}
                prefetch={false}
              >
                Devamını oku →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}