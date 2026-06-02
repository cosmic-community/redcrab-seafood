import TestimonialCard from '@/components/TestimonialCard'
import { getTestimonials } from '@/lib/cosmic'

export const metadata = {
  title: 'Reviews | Red Crab Seafood',
  description: 'See what our customers say about Red Crab Seafood.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="bg-white">
      <section className="bg-navy-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Customer Reviews</h1>
          <p className="mt-4 text-lg text-navy-100">Real feedback from happy seafood lovers.</p>
        </div>
      </section>

      <section className="bg-navy-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {testimonials.length === 0 ? (
            <p className="text-center text-gray-500">No reviews available yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}