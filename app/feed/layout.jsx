import Layout from '@/components/Layout'
import Navbar from '@/components/feed-props/Navbar'
import React from 'react'

export default function FeedLayout({children}) {
  return (
    <div>
      <Navbar/>
      <Layout>
        {children}
      </Layout>
    </div>
  )
}
