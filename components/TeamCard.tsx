import { getMetafieldValue } from '@/lib/cosmic'
import type { TeamMember } from '@/types'

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard({ member }: TeamCardProps) {
  if (!member) return null

  const name = getMetafieldValue(member.metadata?.name) || member.title
  const role = getMetafieldValue(member.metadata?.role)
  const bio = getMetafieldValue(member.metadata?.bio)
  const photo = member.metadata?.photo

  return (
    <div className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-gray-100">
      {photo ? (
        <img
          src={`${photo.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
          alt={name}
          width={160}
          height={160}
          className="h-40 w-40 rounded-full object-cover ring-4 ring-crab-100"
        />
      ) : (
        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-navy-100 text-4xl">👤</div>
      )}
      <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{name}</h3>
      {role && <p className="mt-1 text-sm font-medium text-crab-600">{role}</p>}
      {bio && <p className="mt-3 text-sm leading-relaxed text-gray-600">{bio}</p>}
    </div>
  )
}