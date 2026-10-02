import Link from 'next/link';

const categories = [
  { icon: '⌁', name: 'Home repairs', detail: 'Electricians, plumbers & more' },
  { icon: '✳', name: 'Cleaning', detail: 'A fresh start for every room' },
  { icon: '❋', name: 'Appliance care', detail: 'Repairs that keep life moving' },
  { icon: '⌂', name: 'Outdoor help', detail: 'Make more of your space' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span className="grid size-9 place-items-center rounded-xl bg-[#126b50] text-lg text-white">s</span>
          service<span className="text-[#126b50]">hub</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-9 text-sm font-medium text-[#53645d] md:flex">
          <a href="#services" className="transition hover:text-[#126b50]">Explore services</a>
          <a href="#how-it-works" className="transition hover:text-[#126b50]">How it works</a>
          <a href="#providers" className="transition hover:text-[#126b50]">For professionals</a>
        </nav>
        <Link href="#services" className="rounded-full border border-[#d6ded7] px-5 py-2.5 text-sm font-semibold transition hover:border-[#126b50] hover:text-[#126b50]">
          Get started <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-16">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dce4dc] bg-white/70 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#49675a]">
            <span className="size-2 rounded-full bg-[#8ab84d]" /> Good help, right around the corner
          </div>
          <h1 className="max-w-2xl text-5xl leading-[1.06] font-semibold tracking-[-0.055em] sm:text-6xl lg:text-[4.6rem]">
            Your to-do list, <span className="font-serif font-normal italic text-[#126b50]">handled.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#66766f]">
            Find skilled local professionals for the jobs that make a house feel like home. Easy to book, lovely to work with.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="#services" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#126b50] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#126b50]/15 transition hover:bg-[#0d5942]">
              Find a professional <span aria-hidden="true">→</span>
            </Link>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold text-[#36574a] transition hover:bg-white">
              See how it works
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-[#dfe5df] pt-6">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="grid size-9 place-items-center rounded-full border-2 border-[#f7f8f4] bg-[#e6b89a] text-xs">M</span>
              <span className="grid size-9 place-items-center rounded-full border-2 border-[#f7f8f4] bg-[#bfd1b1] text-xs">A</span>
              <span className="grid size-9 place-items-center rounded-full border-2 border-[#f7f8f4] bg-[#e8d18d] text-xs">J</span>
            </div>
            <p className="text-sm text-[#66766f]"><span className="font-semibold text-[#18312b]">Good people, great work.</span><br />A simpler way to get things done.</p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -right-10 -top-12 size-44 rounded-full bg-[#e8efbd] blur-3xl" />
          <div className="relative min-h-[450px] overflow-hidden rounded-[2rem] bg-[#dce8d8] p-6 sm:min-h-[530px] sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_25%,rgba(255,255,255,0.72),transparent_40%),linear-gradient(145deg,#e7eedc_0%,#ccddce_58%,#b7cdbf_100%)]" />
            <div className="absolute -right-8 bottom-0 h-[64%] w-[78%] rounded-t-[48%] bg-[#9ab49d]" />
            <div className="absolute right-[8%] bottom-0 h-[49%] w-[57%] rounded-t-[46%] bg-[#748f7d]" />
            <div className="absolute top-[15%] right-[18%] size-24 rounded-full bg-[#f6f1d9] shadow-[0_0_60px_20px_rgba(255,249,215,0.3)]" />
            <div className="absolute top-[28%] left-[9%] rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl shadow-[#375942]/10 backdrop-blur-sm sm:left-[8%] sm:p-5">
              <p className="text-xs font-medium text-[#73817a]">A little help goes a long way</p>
              <p className="mt-1.5 text-base font-semibold tracking-tight">Your home, in good hands.</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-[#53645d]"><span className="text-amber-500">★★★★★</span> Trusted local pros</div>
            </div>
            <div className="absolute right-[8%] bottom-[12%] left-[8%] flex items-end justify-between">
              <div className="max-w-[220px] rounded-2xl bg-white/90 p-4 shadow-xl shadow-[#375942]/10 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#799082]">Made for real life</p>
                <p className="mt-1 text-sm leading-5 font-medium">From the small fixes to the big refreshes.</p>
              </div>
              <span className="grid size-12 place-items-center rounded-full bg-[#d9f37b] text-xl text-[#234536] shadow-lg" aria-hidden="true">✳</span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white bg-white px-5 py-3.5 shadow-lg shadow-[#375942]/10 sm:block">
            <p className="text-xs text-[#73817a]">More time for</p><p className="mt-0.5 text-sm font-semibold">the things you love.</p>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-[#e6e9e2] bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7d9185]">A hand with the everyday</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">What can we help with?</h2></div>
            <a href="#services" className="text-sm font-semibold text-[#126b50]">Explore all services <span aria-hidden="true">↗</span></a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <a key={category.name} href="#services" className="group rounded-2xl border border-[#e6e9e2] bg-[#fbfcf9] p-5 transition hover:-translate-y-1 hover:border-[#b7cbbd] hover:bg-white hover:shadow-lg hover:shadow-[#18312b]/5">
                <span className="grid size-11 place-items-center rounded-xl bg-[#edf3e9] text-xl text-[#126b50]">{category.icon}</span>
                <h3 className="mt-5 font-semibold">{category.name}</h3><p className="mt-1 text-sm text-[#718078]">{category.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-14 text-center lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7d9185]">Simple from the start</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">A better way to get it done.</h2>
        <div className="mt-10 grid gap-8 text-left md:grid-cols-3">
          {[['01', 'Tell us what you need', 'Choose a service and share a few details about the job.'], ['02', 'Meet your match', 'Explore local professionals and find the right fit for you.'], ['03', 'Put your feet up', 'Book a time that works and enjoy the extra breathing room.']].map(([number, title, detail]) => (
            <article key={number} className="border-t border-[#dfe5df] pt-5"><span className="text-sm font-semibold text-[#8bac6a]">{number}</span><h3 className="mt-4 text-lg font-semibold">{title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-[#718078]">{detail}</p></article>
          ))}
        </div>
      </section>

      <footer id="providers" className="bg-[#183b30] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p className="font-semibold">service<span className="text-[#d9f37b]">hub</span></p>
          <p className="text-white/65">Good work starts with good people.</p>
          <p className="text-white/50">© {new Date().getFullYear()} ServiceHub</p>
        </div>
      </footer>
    </main>
  );
}
