import Layout from '@/components/Layout'
import Navbar from '@/components/feed-props/Navbar'

export default function UserPageLayout({children}) {
  return (
    <div>
      <Navbar/>
      <Layout>
        {children}
      </Layout>
    </div>
  )
}
