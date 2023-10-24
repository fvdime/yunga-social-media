import AuthForm from '@/components/forms/AuthForm'
import React from 'react'

export default function Auth() {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-zinc-400'>
      <div className=''>
        <AuthForm/>
      </div>
    </div>
  )
}
