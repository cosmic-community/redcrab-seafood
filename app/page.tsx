import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import MenuCard from '@/components/MenuCard'
import TestimonialCard from '@/components/TestimonialCard'
import LocationCard from '@/components/LocationCard'
import { getMenuItems, getTestimonials, getLocations } from '@/lib/cosmic'

export default async function HomePage() {
  const [menuItems, testimonials, locations] = await Promise.all([
    getMenuItems(),
    getTestimonials(),
    getLocations(),
  ])

  const featuredMenu = menuItems.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)
  const featuredLocation = locations[0]

  return (
    <>
      <Hero />

      {/* Intro */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            The Best Seafood Boil in Arlington, TX
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Red Crab Seafood serves daring flavors and high-quality seafood upon every visit. From crab legs
            to shrimp, lobster, and crawfish — everything is freshly prepared and well-seasoned to make you feel
            at sea. A welcoming atmosphere, exceptional service, and an unforgettable seafood feast await.
          </p>
        </div>
      </section>

      {/* Featured Menu */}
      {featuredMenu.length > 0 && (
        <section className="bg-navy-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Our Favorites"
              title="Fan-Favorite Dishes"
              subtitle="Bold seasonings, fresh ingredients, and a hands-on experience."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredMenu.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/menu"
                className="inline-block rounded-full bg-crab-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-crab-600"
              >
                See Full Menu
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Location */}
      {featuredLocation && (
        <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <SectionHeading eyebrow="Find Us" title="Visit Red Crab Seafood" />
            <div className="mt-12">
              <LocationCard location={featuredLocation} />
            </div>
          </div>
        </section>
      )}

      {/* Featured Testimonials */}
      {featuredTestimonials.length > 0 && (
        <section className="bg-navy-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-crab-400">
                Read What Our Customers Say
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-white sm:text-4xl">
                Loved by Seafood Lovers
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredTestimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}