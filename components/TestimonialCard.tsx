import { getMetafieldValue } from '@/lib/cosmic'
import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  if (!testimonial) return null

  const customerName = getMetafieldValue(testimonial.metadata?.customer_name) || testimonial.title
  const review = getMetafieldValue(testimonial.metadata?.review)
  const source = getMetafieldValue(testimonial.metadata?.source)
  const location = getMetafieldValue(testimonial.metadata?.location)
  const ratingRaw = getMetafieldValue(testimonial.metadata?.rating)
  const rating = Math.max(0, Math.min(5, Number(ratingRaw) || 0))

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
      <div className="flex text-gold-400">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-gold-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      {review && <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-700">&ldquo;{review}&rdquo;</p>}
      <div className="mt-5 border-t border-gray-100 pt-4">
        <p className="font-display font-semibold text-navy-900">{customerName}</p>
        <p className="mt-0.5 text-xs text-gray-500">
          {[source, location].filter(Boolean).join(' • ')}
        </p>
      </div>
    </div>
  )
}