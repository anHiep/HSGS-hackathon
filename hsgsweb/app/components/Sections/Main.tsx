import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; 
import { Lightning, Heart, Lightbulb, CurrencyDollar } from 'phosphor-react';

const Main: React.FC = () => {
    return (
        <>
            <main className="relative min-h-[800px] flex flex-col items-center justify-center px-20 text-center z-10 bg-gradient-to-b from-blue-100 to-blue-50">
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 -z-10 opacity-75 hidden lg:block">
                    <Image src="/landing/arrow_preview.webp" alt="Background" layout="fill" quality={100} />
                </div>

                <div className="flex flex-col items-center  transform transition duration-500 hover:scale-105">
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold mb-2 inline-flex items-center shadow-lg">
                        <span className="text-xs md:text-sm lg:text-base">🌟 <span className="font-semibold">New:</span> Research shows AI virtual staging boosts productivity.</span>
                    </div>
                </div>

                <h1 className="text-6xl font-bold mt-8">
                    <span className="text-blue-600">Virtual Staging</span> with One-Click
                </h1>
                <p className="mt-3 text-2xl text-gray-600">
                Generate stunning virtually staged images within seconds. No design skill required.
                </p>
                <div className="mt-8">
                    <Link href="/photos" passHref>
                        <button className="flex items-center justify-center px-8 py-3 font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out animate-pulse">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                <path d="M17.7127 8C17.7369 8.15824 17.7738 8.28938 17.8327 8.4128C17.9813 8.7242 18.2529 8.95119 18.7961 9.40516L19.2906 9.81846C21.202 11.416 22.1577 12.2148 21.9787 13.1603C21.7997 14.1059 20.6046 14.572 18.2142 15.5043L17.5958 15.7454C16.9165 16.0104 16.5769 16.1428 16.3222 16.3918C16.0675 16.6409 15.9266 16.9783 15.6448 17.6531L15.3882 18.2675C14.3964 20.6423 13.9005 21.8297 12.9545 21.9842C12.0085 22.1386 11.2389 21.1578 9.69982 19.1963L9.30163 18.6888C8.86425 18.1314 8.64557 17.8526 8.33956 17.6952C8.03356 17.5377 7.67488 17.5192 6.95753 17.4823L6.30443 17.4487C3.78003 17.3189 2.51782 17.254 2.11218 16.4039C1.70653 15.5538 2.42609 14.4815 3.86521 12.3369L4.23753 11.7821C4.64648 11.1727 4.85096 10.868 4.91653 10.5216C4.9821 10.1752 4.90135 9.82639 4.73983 9.12875L4.59279 8.4936C4.02442 6.03855 3.74024 4.81103 4.43551 4.1312C5.13079 3.45136 6.34506 3.76944 8.77361 4.4056L9.40191 4.57019C10.092 4.75097 10.4371 4.84135 10.7836 4.78478C11.1301 4.7282 11.4389 4.53106 12.0565 4.13679L12.6187 3.77783C14.7918 2.39036 15.8784 1.69663 16.7137 2.12656C17.2323 2.39346 17.4408 2.98365 17.5392 4" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M19.5303 18.4697C19.2374 18.1768 18.7626 18.1768 18.4697 18.4697C18.1768 18.7626 18.1768 19.2374 18.4697 19.5303L19.5303 18.4697ZM20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L20.4697 21.5303ZM18.4697 19.5303L20.4697 21.5303L21.5303 20.4697L19.5303 18.4697L18.4697 19.5303Z" fill="#1C274C"/>
                            </svg>
                Try the Magic
                        </button>
                    </Link>
                    <p className="mt-1 text-gray-500 text-sm">Endorsed by 5000+ Realtors</p>

                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                    <div className="flex flex-col items-center">
                        <Lightning size={24} color="#3b82f6" weight="fill" />
                        <h3 className="text-lg font-semibold mt-2">Instant</h3>
                        <p className="text-sm text-gray-600">Fast delivery at the click of a button.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Heart size={24} color="#ec4899" weight="fill" />
                        <h3 className="text-lg font-semibold mt-2">Gorgeous</h3>
                        <p className="text-sm text-gray-600">Stunning visuals that impress.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Lightbulb size={24} color="#fbbf24" weight="fill" />
                        <h3 className="text-lg font-semibold mt-2">Creative</h3>
                        <p className="text-sm text-gray-600">Innovative designs tailored to your space.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <CurrencyDollar size={24} color="#22c55e" weight="fill" />
                        <h3 className="text-lg font-semibold mt-2">Inexpensive</h3>
                        <p className="text-sm text-gray-600">Cost-effective solutions for every budget.</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;
