// app/menu/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getMenuItem, getMetafieldValue } from '@/lib/cosmic'

export default async function MenuItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = await getMenuItem(slug)

  if (!item) {
    notFound()
  }

  const name = getMetafieldValue(item.metadata?.name) || item.title
  const description = getMetafieldValue(item.metadata?.description)
  const price = getMetafieldValue(item.metadata?.price)
  const category = getMetafieldValue(item.metadata?.category)
  const spice = getMetafieldValue(item.metadata?.spice_level)
  const image = item.metadata?.featured_image

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Link href="/menu" className="text-sm font-medium text-crab-600 hover:underline">
          &larr; Back to Menu
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          {image && (
            <div className="overflow-hidden rounded-2xl">
              <img
                src={`${image.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
                alt={name}
                width={600}
                height={450}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div>
            {category && (
              <span className="inline-block rounded-full bg-navy-900 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                {category}
              </span>
            )}
            <h1 className="mt-4 font-display text-4xl font-extrabold text-navy-900">{name}</h1>
            {price && <p className="mt-3 font-display text-3xl font-bold text-crab-600">${price}</p>}
            {description && <p className="mt-6 text-lg leading-relaxed text-gray-600">{description}</p>}
            {spice && (
              <div className="mt-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-crab-50 px-4 py-2 text-sm font-medium text-crab-700">
                  🌶️ Spice Level: {spice}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}