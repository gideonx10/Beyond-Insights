'use client'

import { useState, useEffect } from 'react'
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface PostTypeData {
  type: string
  avgLikes: number
  avgComments: number
  avgShares: number
}

export default function PostTypeAnalysis() {
  const [data, setData] = useState<PostTypeData[]>([])

  useEffect(() => {
    // Simulating API call to fetch data
    const fetchData = async () => {
      // In a real app, this would be an API call to your backend
      const mockData: PostTypeData[] = [
        { type: 'Carousel', avgLikes: 150, avgComments: 30, avgShares: 20 },
        { type: 'Reels', avgLikes: 200, avgComments: 50, avgShares: 40 },
        { type: 'Static', avgLikes: 100, avgComments: 20, avgShares: 10 },
      ]
      setData(mockData)
    }
    fetchData()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Post Type Performance</CardTitle>
        <CardDescription>Average engagement metrics by post type</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="avgLikes" fill="#8884d8" name="Avg. Likes" />
            <Bar dataKey="avgComments" fill="#82ca9d" name="Avg. Comments" />
            <Bar dataKey="avgShares" fill="#ffc658" name="Avg. Shares" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

