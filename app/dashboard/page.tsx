import Dashboard from '@/components/Dashboard'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function DashboardPage() {
  return (
    <main className="container mx-auto p-4">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-8">Social Media Analytics Dashboard</h1>
      <Dashboard />
    </main>
  )
}

