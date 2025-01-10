import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, MessageSquare, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  text-center pt-4 w-34" >
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex ">
        <Link className="flex " href="/">
          <TrendingUp className="h-9 w-9 text-primary" />
          <span className="ml-2 text-2xl font-bold">Beyond Insights</span>
        </Link>
      </header>

      {/* Hero Section */}
      <main className="flex-1 w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Transform Your Social Media Analytics
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Unlock powerful insights with AI-driven analytics. Make data-driven decisions to grow your social media presence.
                </p>
              </div>
              <div className="space-x-4 mt-6">
                <Link href="/dashboard">
                  <Button className="px-8">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="features">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-3 text-center">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-white rounded-full dark:bg-gray-900">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold">Performance Analytics</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Track and analyze your social media performance across different post types.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-white rounded-full dark:bg-gray-900">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold">AI-Powered Insights</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Get intelligent recommendations and insights from our AI chatbot.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-white rounded-full dark:bg-gray-900">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold">Growth Tracking</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Monitor your growth and engagement metrics in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Transform your social media strategy with data-driven insights.
                </p>
              </div>
              <div className="space-x-4 mt-6">
                <Link href="/dashboard">
                  <Button className="px-8">Go to Dashboard</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full items-center justify-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Beyond Insights. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
