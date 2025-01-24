import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../../src/images/Asset 3.png"


export default function banner() {
  return (
    <div className='sticky top-0 z-50 '>
      {/* Nav Bar */}
      <div className=' h-16 pt-5 pl-8 pb-5 bg-slate-800  flex px-10 justify-between items-center '>

        {/* This is nav options */}
        <div className='flex justify-between space-x-8 '>
          <div>
            <img src={Logo} className=' w-14 h-15 mx-auto items-center ' alt='Logo img' />
          </div>

          <ul className=' text-white flex space-x-10 text-xl justify-center items-center'>
            <li className='flex'>
              <Link to={'/'} className=' pb-1 hover:border-b-2 hover:text-sky-400 hover:border-sky-400  active:text-sky-400 active:border-sky-400 '>Home</Link>
            </li>
            <li className='flex'>
              <Link to={'/course'} className=' pb-1 hover:border-b-2 hover:text-sky-400 hover:border-sky-400'>Courses</Link>

            </li>
            <li className='flex'>
              <Link to={'/contact'} className=' pb-1 hover:border-b-2 hover:text-sky-400 hover:border-sky-400 active:text-sky-400 active:border-sky-400'>Contact</Link>
            </li>
          </ul>
        </div>


        {/* Search bar */}
        <ul className='flex'>
          <li>
            <div className=' flex bg-transparent border border-gray-500 hover:border-sky-500 rounded-xl mr-5 p-1 h-7 text-gray-200 '>
              <svg className=' h-5 w-5 top-1 left-1 text-white' data-slot="icon" fill="none" stroke-width="2.2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
              </svg>
              <input type="text" placeholder='Search' className='w-full border-none bg-transparent outline-none ml-2 '></input>
            </div>
          </li>
          {/* User Icon */}
          <li>
            <button ><svg className='text-white h-8' data-slot="icon" fill="none" stroke-width="1.1" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
            </svg></button>
          </li>
        </ul>
      </div>

    </div>

  )
}
