// app/_route.tsx
import Link from "next/link";

export default function RoutePage({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-4 text-neutral-300">
        Placeholder. İçerik sonra geri gelecek.
      </p>
      <div className="mt-6">
        <Link href="/" className="text-orange-400 hover:text-orange-300">
          ← Home
        </Link>
      </div>
    </div>
  );
}