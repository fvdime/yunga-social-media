import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  return (
    <div className="">
      <section className="max-w-screen-xl mx-auto p-4 lg:p-0 lg:py-4 h-full flex flex-col justify-between">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-6 lg:py-8">
            <div className="bg-white px-4 py-6 rounded-lg flex flex-col items-start justify-between">
              <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-950 uppercase">
                every moment matters.
              </h2>
              <span className="text-xs font-bold text-zinc-800 sm:text-center">
                © 2023 All Rights Reserved. <Link href="/">YUNGA™</Link>
              </span>
            </div>
            <div className="bg-sky-950 rounded-full mx-32 flex items-center justify-center">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-50 text-center">
              ⊹
              </h2>
            </div>
            <div className="w-full bg-white px-4 py-6 rounded-lg">
                <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-950">
                  Support.
                </h2>
                <ul className="text-zinc-800 font-semibold text-sm">
                  <li className="mb-4">
                    <span>
                      Wanna hire us? Feel free to keep in touch with us!{" "}
                      <Link href="#" className=" underline">
                        Get in touch
                      </Link>{" "}
                    </span>
                  </li>
                  <li className="mb-4">
                    Have questions? Check our github!{" "}
                    <Link href="#" className="underline">
                      Source Code
                    </Link>
                  </li>
                </ul>
              </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs