export default function Loading() {
    return (
      <div className="container mx-auto p-4">
        <div className="h-8 w-32 bg-gray-200 rounded animate-pulse mb-8" />
        <div className="h-12 w-64 bg-gray-200 rounded animate-pulse mb-8" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-[400px] bg-gray-200 rounded animate-pulse" />
          <div className="h-[400px] bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    )
  }
  
  