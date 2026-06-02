export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="text-4xl">🦀</div>
        <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-crab-500" />
        </div>
        <p className="text-sm text-gray-500">Loading fresh seafood...</p>
      </div>
    </div>
  )
}