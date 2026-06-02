import LocationCard from '@/components/LocationCard'
import { getLocations } from '@/lib/cosmic'

export const metadata = {
  title: 'Locations | Red Crab Seafood',
  description: 'Find a Red Crab Seafood location near you.',
}

export default async function LocationsPage() {
  const locations = await getLocations()

  return (
    <div className="bg-white">
      <section className="bg-navy-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Our Locations</h1>
          <p className="mt-4 text-lg text-navy-100">Order delivery, pickup, or dine in with us.</p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {locations.length === 0 ? (
            <p className="text-center text-gray-500">No locations available yet.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {locations.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}