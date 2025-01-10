import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'system',
        content: `You are an AI assistant specialized in analyzing social media performance data. 
        Use the following mock data for your analysis:
        - Carousel posts: 150 avg likes, 30 avg comments, 20 avg shares
        - Reels: 200 avg likes, 50 avg comments, 40 avg shares
        - Static posts: 100 avg likes, 20 avg comments, 10 avg shares`
      },
      ...messages
    ]
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}

