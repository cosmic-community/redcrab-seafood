import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="https://imgix.cosmicjs.com/f9631b20-5e5c-11f1-b0c4-116f33f477c7-autopilot-photo-1625943553852-781c6dd46faa-1780388883913.jpeg?w=2400&h=1200&fit=crop&auto=format,compress"
        alt="Red Crab Seafood boil"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay relative px-4 py-28 sm:px-6 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-crab-300">
            Voted Best Seafood in Arlington
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Fresh Flavors. Bold Cajun Boil.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-100">
            Crab legs, shrimp, lobster, crawfish and more — freshly prepared and well-seasoned to make you
            feel at sea. Get your hands dirty!
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/menu"
              className="rounded-full bg-crab-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-crab-600"
            >
              View Menu
            </Link>
            <Link
              href="/locations"
              className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-navy-900"
            >
              Find a Location
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}