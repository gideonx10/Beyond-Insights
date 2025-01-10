'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import PostTypeAnalysis from './PostTypeAnalysis'
import ChatbotAnalytics from './ChatbotAnalytics'

export default function Dashboard() {
  const [showChatbot, setShowChatbot] = useState(false)

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Post Type Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <PostTypeAnalysis />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Analytics Chatbot</CardTitle>
        </CardHeader>
        <CardContent>
          {showChatbot ? (
            <ChatbotAnalytics />
          ) : (
            <Button onClick={() => setShowChatbot(true)}>Start Chatbot</Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

