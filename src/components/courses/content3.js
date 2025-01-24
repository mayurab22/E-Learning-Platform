import React from 'react'
import pythonimg from '../../images/python2.png'

export default function content3() {
  return (
    <div><div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
            <img
                src={pythonimg}
                alt=""
                className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
                className="absolute top-0 -right-1 hidden h-full text-white lg:inline-block"
                viewBox="0 0 20 104"
                fill="currentColor"
            >
                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                Python
            </h5>
            <p className="mb-5 text-gray-800">
            Learn Python from the ground up, covering programming fundamentals, 
            data analysis, and web development. Build real-world skills.
            </p>
            <div className="flex items-center mx-auto">
                <button
                    type="submit"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none"
                >
                    Get started
                </button>
            </div>
        </div>
    </div>
</div></div>
  )
}