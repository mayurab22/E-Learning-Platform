import React from 'react'
import { Link } from 'react-router-dom'
import webimg from '../../images/5234318.png'
import javaimg from '../../images/java.png'
import pythonimg from '../../images/python-1.jpg'
import reactimg from '../../images/react.png'


export default function features() {
  return (
    <div className='scroll-smooth'>
      <div id="features-section" className="mt-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-8 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">

          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute pr-1 top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-5xl">Explore top Courses</span>
          </span>{' '}
          <hr className=' mt-8 border h-2 w-24 mx-auto bg-gray-800'>
          </hr>
        </h2>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-2">
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div className='flex-col'>
            <div className="items-center justify-center w-full max-h-max mb-4 rounded-full bg-indigo-50">
              <img src={webimg} />
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Web Development</h6>
              <p className="mb-3 text-sm text-gray-900">
                Master web development with hands-on projects!
                Learn HTML, CSS, JavaScript, and modern frameworks. Enroll now to build your future!
              </p>
            </div>

          </div>
          <Link to={"/course"}>Learn more</Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div className='flex-col'>
            <div className="items-center justify-center w-full max-h-max mb-4 rounded-full bg-indigo-50">
              <img src={javaimg} />
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Java</h6>
              <p className="mb-3 text-sm text-gray-900">
                Master Java programming with hands-on projects,
                in-depth tutorials, and expert guidance. Start your coding journey today!
              </p>
            </div>

          </div>
          <Link to={"/course"}>Learn more</Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
          <div className='flex-col'>
            <div className="items-center justify-center w-full max-h-max mb-4 rounded-full bg-indigo-50">
              <img src={pythonimg} />
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">Python</h6>
              <p className="mb-3 text-sm text-gray-900">
                Learn Python from scratch.
                Master programming fundamentals, data analysis, and web development with hands-on projects. Enroll now!
              </p>
            </div>

          </div>
          <Link to={"/course"}>Learn more</Link>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded shadow-sm">
        <div className='flex-col'>
          <div className="items-center justify-center w-full max-h-max mb-4 rounded-full bg-indigo-50">
            
              <img src={reactimg} />
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">React</h6>
              <p className="mb-3 text-sm text-gray-900">
              Master React with this comprehensive course, covering hooks, components, and state management. 
          Build modern, dynamic web applications efficiently!
              </p>
            </div>
            <Link to={"/course"}>Learn more</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
