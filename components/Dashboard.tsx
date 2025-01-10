'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  const [mounted, setMounted] = useState(false)
  const [showChatbot, setShowChatbot] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Return null on server-side
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Analytics Chatbot</CardTitle>
        </CardHeader>
        <CardContent>
          {showChatbot ? (
            <div className="mt-1">
              {/* Embed the chatbot using iframe */}
              <iframe
                src="https://team-4i-langchain-x-datastax.onrender.com/"
                width="100%"
                height="550"
                frameBorder="0"
                title="Embedded Chatbot"
                style={{ borderRadius: '4px' }}  // Optional styling for the iframe
              />
            </div>
          ) : (
            <Button onClick={() => setShowChatbot(true)}>Start Chatbot</Button>
          )}
        </CardContent>
      </Card>

    </div>
  )
}
