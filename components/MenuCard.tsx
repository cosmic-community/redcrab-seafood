import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import type { MenuItem } from '@/types'

interface MenuCardProps {
  item: MenuItem
}

export default function MenuCard({ item }: MenuCardProps) {
  if (!item) return null

  const name = getMetafieldValue(item.metadata?.name) || item.title
  const description = getMetafieldValue(item.metadata?.description)
  const price = getMetafieldValue(item.metadata?.price)
  const category = getMetafieldValue(item.metadata?.category)
  const spice = getMetafieldValue(item.metadata?.spice_level)
  const image = item.metadata?.featured_image

  return (
    <Link
      href={`/menu/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      {image && (
        <div className="relative h-52 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=520&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={260}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {category && (
            <span className="absolute left-3 top-3 rounded-full bg-navy-900/80 px-3 py-1 text-xs font-semibold text-white">
              {category}
            </span>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold text-navy-900">{name}</h3>
          {price && <span className="whitespace-nowrap font-display text-lg font-bold text-crab-600">${price}</span>}
        </div>
        {description && <p className="mt-2 line-clamp-2 text-sm text-gray-600">{description}</p>}
        {spice && (
          <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-crab-50 px-3 py-1 text-xs font-medium text-crab-700">
            🌶️ {spice}
          </span>
        )}
      </div>
    </Link>
  )
}