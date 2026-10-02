'use client';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div className="max-w-md">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#126b50]">Something went wrong</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Let’s try that again.</h1>
        <p className="mt-3 text-[#66766f]">We couldn’t load this page just now. Please try again.</p>
        <button onClick={reset} className="mt-7 rounded-full bg-[#126b50] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d5942]">Try again</button>
      </div>
    </main>
  );
}
