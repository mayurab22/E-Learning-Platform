import React from 'react'

export default function stats() {
    return (
        <div><div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className='text-center'>
                <span className="relative text-5xl font-bold border-b-4 border-gray-800 border-yb-2 border-solid w-28">Statics</span>
                </div>
                
            <div class="mt-10 grid row-gap-8 sm:grid-cols-3">
                
                <div class="text-center">
                    <h6 class="text-5xl font-bold text-purple-700">144K</h6>
                    <p class="font-bold">Downloads</p>
                </div>
                <div class="text-center">
                    <h6 class="text-5xl font-bold text-purple-700">12.9K</h6>
                    <p class="font-bold">Subscribers</p>
                </div>
                <div class="text-center">
                    <h6 class="text-5xl font-bold text-purple-700">27.3K</h6>
                    <p class="font-bold">Users</p>
                </div>
            </div>
        </div></div>
    )
}
