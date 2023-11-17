import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-4 lg:p-0 lg:py-4 h-full flex flex-col justify-between'>
      <nav className=''>
        <div className='flex flex-row w-full items-center justify-between'>
          <h1 className='text-xs uppercase font-bold'>yunga</h1>
          <Link 
            href='/auth'
            className='text-xs font-semibold px-4 py-1 border border-slate-950 bg-transparent rounded-3xl hover:bg-slate-950 hover:text-white duration-500 transition-all ease-in' 
          >Get Started</Link>
        </div>
      </nav>
      <section className='flex h-full flex-col  justify-between items-start py-8'>
        <h1 className='text-6xl md:text-9xl lg:text-9xl font-medium uppercase text-start'>⊹insights⊹</h1>
        <div className='flex w-full flex-row justify-between items-center py-8'>
          <div className='text-sm font-semibold uppercase w-3/5'>Ideas worth rallying around</div>
          <div className='text-xs font-medium w-2/5'>
            We work for user experience. Creating apps for real life examples, learning, exploring and creativity.
          </div>
        </div>
      </section>
      <footer>
        <hr />
        <div className='flex flex-row w-full items-center justify-between pt-4'>
        <h1 className='text-xs uppercase font-bold'>yunga</h1>
        <div className='flex items-center gap-4 text-xs font-semibold'>
            <Link href='/' className=' hover:underline'>About</Link>
            <Link href='/' className=' hover:underline'>Contact</Link>
            <Link href='/' className=' hover:underline'>Source</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HeroBanner