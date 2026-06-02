import SectionHeading from '@/components/SectionHeading'
import MenuCard from '@/components/MenuCard'
import { getMenuItems, getMetafieldValue } from '@/lib/cosmic'

export const metadata = {
  title: 'Menu | Red Crab Seafood',
  description: 'Explore our full menu of fresh seafood favorites.',
}

export default async function MenuPage() {
  const menuItems = await getMenuItems()

  return (
    <div className="bg-white">
      <section className="bg-navy-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Our Menu</h1>
          <p className="mt-4 text-lg text-navy-100">
            Fresh seafood, bold Cajun seasonings, and an unforgettable feast.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {menuItems.length === 0 ? (
            <p className="text-center text-gray-500">No menu items available yet.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {menuItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}