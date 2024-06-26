import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; 

const Usp: React.FC = () => {
    return (
        <>

            {/* USP Section */}

            <main className="min-h-[800px] flex flex-col items-center justify-center px-20 text-center z-10 bg-gradient-to-b from-green-50 to-green-100">
                <section className="py-12 px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why choose us?</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
            The best virtual staging <span className="font-bold text-green-600">Algorithm</span> powered by <span className="font-bold text-green-600">Artificial Intelligence</span>. Developed at <span className="font-bold text-green-600">Harvard Innovation Labs</span>.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Card 1 */}
                            <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800 border-2 border-transparent hover:border-green-600 hover:-translate-y-1 transition duration-300">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Lowest price</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                            Starting at only <span className="font-bold text-green-600">$12/month</span> you can virtually stage 6 images. That&#39; cheaper than what most agencies charge for a single image. Enterprise plans go as low as $0.25 per staged picture.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800 border-2 border-transparent hover:border-green-600 hover:-translate-y-1 transition duration-300">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Fastest turnaround</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                        Thanks to our advanced artificial intelligence you get your virtually staged pictures <span className="font-bold text-green-600">within 10 seconds</span>. No more waiting for designers.
                                </p>
                            </div>
                            {/* Card 3 */}
                            <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800 border-2 border-transparent hover:border-green-600 hover:-translate-y-1 transition duration-300">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Decluttering included</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                        If the rooms in your images are not entirely empty, we will <span className="font-bold text-green-600">remove existing furniture or clutter</span> for free. You&#39;ll receive both the decluttered image of the empty room and the staged image of the room.                        </p>
                            </div>
                            {/* Card 4 */}
                            <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800 border-2 border-transparent hover:border-green-600 hover:-translate-y-1 transition duration-300">

                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Unlimited revisions</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                        Had something different in mind? Instead of having to go back and forth with a designer, get more designs <span className="font-bold text-green-600">within seconds</span>.                        </p>
                            </div>
                            {/* CTA Button */}
                            <div className="mt-8 lg:mt-0 lg:col-span-4">
                                <Link href="/photos" passHref>
                                    <button className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300 ease-in-out animate-pulse">
                            Try for Free
                                    </button>
                                </Link>
                                <p className="mt-1 text-gray-500 text-sm">No signup</p>
                            </div>
                        </div>
                    </div>
                </section>
        
            </main>
        </>
    );
};

export default Usp;