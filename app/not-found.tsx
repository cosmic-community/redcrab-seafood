import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <div className="text-5xl">🦀</div>
      <h2 className="mt-4 font-display text-3xl font-bold text-navy-900">Page Not Found</h2>
      <p className="mt-2 text-gray-600">Looks like this dish isn&apos;t on the menu.</p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-crab-500 px-6 py-2 font-semibold text-white transition-colors hover:bg-crab-600"
      >
        Back Home
      </Link>
    </div>
  )
}