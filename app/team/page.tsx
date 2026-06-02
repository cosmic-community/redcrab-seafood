import TeamCard from '@/components/TeamCard'
import { getTeamMembers } from '@/lib/cosmic'

export const metadata = {
  title: 'Our Team | Red Crab Seafood',
  description: 'Meet the people behind the bold flavors.',
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="bg-white">
      <section className="bg-navy-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Meet Our Team</h1>
          <p className="mt-4 text-lg text-navy-100">The passionate people who make every visit unforgettable.</p>
        </div>
      </section>

      <section className="bg-navy-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {team.length === 0 ? (
            <p className="text-center text-gray-500">No team members available yet.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}