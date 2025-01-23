import React from 'react'
import Logo from "../../../src/images/Asset 3.png"

export default function footer() {
    return (
        <div><div className="relative mt-16 bg-slate-800">
            <svg
                className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-gray-800"
                preserveAspectRatio="none"
                viewBox="0 0 1440 54"
            >
                <path
                    fill="currentColor"
                    d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                />
            </svg>
            <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-gray-700">
                <div className=" mb-8 flex mx-auto ">
                    <div className='flex'>
                        <div className="md:max-w-md ">
                            <div className='justify-center place-items-center'>
                                <a
                                    href="/"
                                    aria-label="Go home"
                                    title="Company"
                                    className="inline-flex items-center"
                                >
                                    <img className='w-14 h-15' src={Logo} />
                                    <span className="ml-2 text-xl font-bold tracking-wide text-white">
                                        Prettier.Code
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className=" lg:max-w-3xl mx-14">
                            <p className="font-semibold tracking-wide text-sky-500 uppercase">
                                about
                            </p>
                            <div className="text-sm text-white w-full justify-start">
                                Prettier.Code is an online learning platform offering a wide range of courses
                                designed to empower learners with in-demand tech skills and practical knowledge.
                            </div>
                            <div className="text-sm text-white w-full mt-3">
                                <p className="font-semibold tracking-wide text-sky-500 uppercase">
                                    Mission
                                </p>
                                Our mission is to make quality education accessible to everyone through interactive and engaging content.
                                Start your learning journey today and build the future you deserve!
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                    <p className="text-sm text-white">
                        © Copyright 2025 Prettier.Code All rights reserved.
                    </p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0 text-white">
                        <a
                            href="tel:+919844742000"
                            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                        >
                            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='h-6'>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
                            </svg>
                        </a>
                        <a
                            href="mailto:prettiercode@gmail.com"
                            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                        >
                            <svg fill="none" className="h-6" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/prettier.code?igsh=NjR0dThxZ3l5djZk"
                            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="2" stroke="currentColor" viewBox="0 0 50 50" className='h-6'>
                                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div></div>
    )
}
