import React from 'react'
import BgImage from "../../images/laptop-dark.jpg"

export default function header() {
  return (
    <div className=''>
      <div className=" relative">
      <img
      src={BgImage}
      className="absolute inset-0 object-cover w-full h-full"
      alt=""
    />
      <div className='relative bg-opacity-75 '>
      <div className="relative px-4 py-16 ml-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-400">
                <svg
                  className="w-10 h-10 text-white"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                <p className='font-sans text-7xl space-y-0 text-white'>Accelerate</p> 
            <span className='ml-64 text-sky-400'>your learning.</span>
              </h2>
              <p className="text-base text-slate-200 md:text-lg">
              Take your career further. Discover 1400+ courses from top universities and master 
              in-demand skills across marketing, tech, business, cybersecurity and more.
              </p>
            </div>
            <div>
              <a
                href="#features-section"
                className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-slate-200 transition duration-200 rounded shadow-md hover:text-deep-purple-900 border border-gray-600 bg-transparent hover:bg-sky-400 hover:text-white focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    </div>
  )
}
