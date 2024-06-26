// app/prices/page.tsx
'use client'

import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingCard = ({ title, price, features, highlighted }) => {
    const buttonClasses = highlighted
        ? 'bg-blue-700 text-white hover:bg-blue-800'
        : 'bg-white text-gray-800 ring-2 hover:bg-gray-100';

    const cardClasses = highlighted
        ? 'ring-2 ring-blue-500'
        : 'bg-white';

    // Adding a conditional rendering for the best selling sign
    const bestSellingSign = highlighted ? (
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 rounded-bl-lg transform translate-x-2 -translate-y-2 shadow-xl">
          Best Selling
        </div>
    ) : null;

    return (
        <div className={`relative p-6 max-w-sm rounded-lg border shadow-md transition-all duration-300 transform hover:scale-105 ${cardClasses} hover:shadow-xl`}>
            {bestSellingSign}
            <h3 className={`mb-4 text-xl font-semibold ${highlighted ? 'text-blue-900' : 'text-gray-800'}`}>{title}</h3>
            <p className="text-4xl font-bold mb-4">${price}<span className="text-lg">/month</span></p>
            <ul className="mb-8">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-2">
                        <svg className="w-6 h-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
            <Link href="/checkout" passHref>
                <button className={`inline-block w-full py-3 px-6 text-center rounded-lg transition-colors ${buttonClasses}`}>
                  Choose plan
                </button>
            </Link>
        </div>
    );
};



export default function Prices() {
    const plans = [
        {
            title: 'Basic plan',
            price: '12',
            features: [
                '6 photos/mo',
                'Unlimited renders',
                'All room types and styles',
                'Decluttering included',
                'No watermark',
                '10 seconds turnaround',
                'Billed as $144 yearly'
            ],
            highlighted: false
        },
        {
            title: 'Standard plan',
            price: '19',
            features: [
                '25 photos/mo',
                'Unlimited renders',
                'All room types and styles',
                'Decluttering included',
                'No watermark',
                '10 seconds turnaround',
                'Image storage forever',
                'Billed as $228 yearly'
            ],
            highlighted: false
        },
        {
            title: 'Professional plan',
            price: '39',
            features: [
                '100 photos/mo',
                'Unlimited renders',
                'All room types and styles',
                'Decluttering included',
                'No watermark',
                '10 seconds turnaround',
                'Image storage forever',
                'Success manager',
                'Billed as $468 yearly'
            ],
            highlighted: true
        },
        {
            title: 'Enterprise plan',
            price: '69',
            features: [
                '250 photos/mo',
                'Unlimited renders',
                'All room types and styles',
                'Decluttering included',
                'No watermark',
                '10 seconds turnaround',
                'Image storage forever',
                'API access',
                'Enterprise support with a personal success manager',
                'Billed as $828 yearly'
            ],
            highlighted: false
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-200 via-white to-white">
            <Head>
                <title>Virtual Staging AI - Pricing</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <Header />

            {/* Pricing Section */}
            <main className="flex-grow">
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Our Pricing Plans</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Choose the right plan for you, cancel anytime.</p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {plans.map((plan, idx) => (
                                <div key={idx} className="p-4 lg:w-1/4 md:w-1/2">
                                    <PricingCard {...plan} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
