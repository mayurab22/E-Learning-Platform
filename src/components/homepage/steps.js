import React from 'react'

export default function steps() {
    return (
        <div>
            <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative text-5xl">How does it work?</span>
                    </h2>
                </div> 
                <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
                    <div className="sm:text-center">
                        <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
                            1
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Choose a short course</h6>
                        <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        From introductory to advanced, you’ll find high-quality courses across every subject, 
                        designed and taught by academic and industry experts.
                        </p>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                    <div className="sm:text-center">
                        <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
                            2
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Subscribe or upgrade</h6>
                        <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        Join FutureLearn Unlimited for long-term access to your course and a CV-ready certificate,
                        or upgrade individually on each course.
                        </p>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                    <div className="sm:text-center">
                        <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
                            3
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Learn, connect and discuss</h6>
                        <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        Courses are divided into weeks and steps. 
                        You’ll be able to connect with other learners throughout your learning journey.
                        </p>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            </div>

            )
}
