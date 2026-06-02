'use client'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <div className="text-5xl">🦀</div>
      <h2 className="mt-4 font-display text-2xl font-bold text-navy-900">Something went wrong</h2>
      <p className="mt-2 text-gray-600">We couldn&apos;t load this page. Please try again.</p>
      <button
        onClick={reset}
        className="mt-6 rounded-full bg-crab-500 px-6 py-2 font-semibold text-white transition-colors hover:bg-crab-600"
      >
        Try Again
      </button>
    </div>
  )
}