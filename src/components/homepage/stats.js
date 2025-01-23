import React from 'react'

export default function stats() {
    return (
        <div><div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className='text-center'>
                <span className="relative text-5xl font-bold">Statics</span>
                <hr className=' mt-4 border h-2 w-16 mx-auto bg-gray-800'>
                </hr>
                </div>
                
            <div class="mt-10 grid row-gap-8 sm:grid-cols-3">
                
                <div class="text-center">
                    <h6 class="text-5xl font-bold text-sky-500">1K</h6>
                    <p class="font-bold">Downloads</p>
                </div>
                <div class="text-center">
                    <h6 class="text-5xl font-bold text-sky-500">900</h6>
                    <p class="font-bold">Subscribers</p>
                </div>
                <div class="text-center">
                    <h6 class="text-5xl font-bold text-sky-500">2K</h6>
                    <p class="font-bold">Users</p>
                </div>
            </div>
        </div></div>
    )
}
