import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div className="max-w-md">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#126b50]">404 · Page not found</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Looks like a wrong turn.</h1>
        <p className="mt-3 text-[#66766f]">The page you’re looking for may have moved.</p>
        <Link href="/" className="mt-7 inline-flex rounded-full bg-[#126b50] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d5942]">Back to ServiceHub</Link>
      </div>
    </main>
  );
}
