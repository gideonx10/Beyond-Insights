'use client'

import { useChat } from 'ai/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useEffect, useState } from 'react'

export default function ChatbotAnalytics() {
  const [mounted, setMounted] = useState(false)
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Return null on server-side
  }

  return (
    <div className="flex flex-col h-[400px]">
      <ScrollArea className="flex-grow mb-4 p-4 border rounded">
        {messages.map(m => (
          <div key={m.id} className={`mb-4 ${m.role === 'user' ? 'text-blue-600' : 'text-green-600'}`}>
            <strong>{m.role === 'user' ? 'You: ' : 'AI: '}</strong>
            {m.content}
          </div>
        ))}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask about social media performance..."
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  )
}

