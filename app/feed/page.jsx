import getCurrentUser from '@/actions/getCurrentUser'
import PostList from '@/components/feed-props/PostList'
import React from 'react'

// import { store } from '@/stores'
// import { fetchUser } from '@/stores/user-store'

export default async function Feed() {

  // NOT WORKING LOL
  // const currentUser = getCurrentUser()
  // console.log(currentUser)
  
  
  return (
    <>
      <div>
        <PostList/>
      </div>
    </>
  )
}
