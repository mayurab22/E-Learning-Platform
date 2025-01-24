import React from 'react'

export default function details() {
    return (
        <div className='mx-40'><section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-12 mx-auto">
                <div>
                    {/* <p class="font-medium text-blue-500 dark:text-blue-400">Contact us</p> */}

                    <p class="mt-2 text-2xl font-semibold text-sky-500 md:text-3xl dark:text-white">Chat to our friendly team</p>

                    <p class="mt-3 text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                </div>

                <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2 ">
                    <div class="grid grid-cols-1 gap-12 md:grid-cols-2 m-5">
                        <div className='border-2 border-gray-300 rounded-lg shadow-xl  '>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex mt-10'>
                                    <span class=" p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </span>

                                    <h2 class="mt-2 ml-2 text-base font-medium text-gray-800 dark:text-white ">Email</h2>
                                </div>
                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                                <a href='mailto:prettiercode@gmail.com' class="mt-2 text-sm text-blue-500 dark:text-blue-400">prettiercode@gmail.com</a>
                            </div>
                        </div>
                        <div className='border-2 border-gray-300 rounded-lg shadow-xl  '>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex mt-10'>
                                    <span class=" p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </span>

                                    <h2 class="mt-2 ml-2 text-base font-medium text-gray-800 dark:text-white ">Live chat</h2>
                                </div>
                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Start new chat</p>
                            </div>
                        </div>
                        <div className='border-2 border-gray-300 rounded-lg shadow-xl  '>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex mt-10'>
                                    <span class=" p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </span>

                                    <h2 class="mt-2 ml-2 text-base font-medium text-gray-800 dark:text-white ">Office</h2>
                                </div>
                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">MG Road, Hassan</p>
                            </div>
                        </div>
                        <div className='border-2 border-gray-300 rounded-lg shadow-xl  '>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='flex mt-10'>
                                    <span class=" p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </span>

                                    <h2 class="mt-2 ml-2 text-base font-medium text-gray-800 dark:text-white ">Phone</h2>
                                </div>
                                
                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm</p>
                                <a href='tel:+919844742000' class="mt-2 text-sm text-blue-500 dark:text-blue-400">+91 9844742000</a>
                                <a href='tel:+919606542850' class=" text-sm text-blue-500 dark:text-blue-400">+91 9606542850</a>
                                <a href='tel:+919448547331' class=" text-sm text-blue-500 dark:text-blue-400">+91 9448547331</a>
                                
                            </div>
                        </div>
                    </div>

                    <div class="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                        <form>
                            <div class="-mx-2 md:items-center md:flex">
                                <div class="flex-1 px-2">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                    <input type="text" placeholder="John " class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div class="flex-1 px-2 mt-4 md:mt-0">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                    <input type="text" placeholder="Doe" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                            </div>

                            <div class="mt-4">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="w-full mt-4">
                                <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                <textarea class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                            </div>

                            <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section></div>
    )
}
