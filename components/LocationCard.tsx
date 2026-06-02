import { getMetafieldValue } from '@/lib/cosmic'
import type { Location } from '@/types'

interface LocationCardProps {
  location: Location
}

export default function LocationCard({ location }: LocationCardProps) {
  if (!location) return null

  const name = getMetafieldValue(location.metadata?.location_name) || location.title
  const address = getMetafieldValue(location.metadata?.address)
  const phone = getMetafieldValue(location.metadata?.phone)
  const hours = getMetafieldValue(location.metadata?.hours)
  const description = getMetafieldValue(location.metadata?.description)
  const deliveryLink = getMetafieldValue(location.metadata?.delivery_link)
  const pickupLink = getMetafieldValue(location.metadata?.pickup_link)
  const image = location.metadata?.featured_image

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100">
      {image && (
        <div className="h-56 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=1000&h=560&fit=crop&auto=format,compress`}
            alt={name}
            width={500}
            height={280}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-navy-900">{name}</h3>
        {address && <p className="mt-2 text-sm text-gray-600">📍 {address}</p>}
        {phone && (
          <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="mt-1 text-sm text-crab-600 hover:underline">
            📞 {phone}
          </a>
        )}
        {hours && <p className="mt-2 whitespace-pre-line text-sm text-gray-600">🕒 {hours}</p>}
        {description && <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>}

        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          {deliveryLink && (
            <a
              href={deliveryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-crab-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-crab-600"
            >
              Order Delivery
            </a>
          )}
          {pickupLink && (
            <a
              href={pickupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-navy-900 px-5 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
            >
              Order Pickup
            </a>
          )}
        </div>
      </div>
    </div>
  )
}