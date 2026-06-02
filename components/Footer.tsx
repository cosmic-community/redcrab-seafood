import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="text-2xl">🦀</span>
              <span>
                Red Crab <span className="text-crab-500">Seafood</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed">
              Fresh flavors, bold Cajun seasonings, and an unforgettable seafood feast. Get your hands dirty!
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/menu" className="hover:text-crab-400">Menu</Link></li>
              <li><Link href="/locations" className="hover:text-crab-400">Locations</Link></li>
              <li><Link href="/team" className="hover:text-crab-400">Our Team</Link></li>
              <li><Link href="/testimonials" className="hover:text-crab-400">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Visit Us</h3>
            <p className="mt-4 text-sm leading-relaxed">
              2150 E Lamar Blvd<br />
              Arlington, TX 76006<br />
              <a href="tel:+18173850037" className="hover:text-crab-400">(817) 385-0037</a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-700 pt-6 text-center text-xs text-navy-200">
          &copy; {year} Red Crab Seafood. All rights reserved.
        </div>
      </div>
    </footer>
  )
}