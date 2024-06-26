// app/components/Sections/TrustedCompanies.tsx

import React from 'react';
import Image from 'next/image';

const companies = [
    { name: 'Company One', logo: '/logos/company1.png' },
    { name: 'Company Two', logo: '/logos/company2.png' },
    { name: 'Company Three', logo: '/logos/company3.png' },
    { name: 'Company Four', logo: '/logos/company4.png' },
    { name: 'Company Five', logo: '/logos/company5.png' },
    { name: 'Company Six', logo: '/logos/company6.png' },
];

const TrustedCompanies: React.FC = () => {
    return (
        <section className="py-[80px] bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-1xl font-semibold mb-8">Agents from all Major Brokerages use our service</h2>
                <div className="flex justify-center items-center flex-wrap gap-8">
                    {companies.map((company, index) => (
                        <div key={index} className="flex items-center justify-center h-24 w-48 p-4">
                            <Image
                                src={company.logo}
                                alt={company.name}
                                width={160} 
                                height={96} 
                                className="  transform transition duration-200 hover:scale-105"
                                objectFit="contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedCompanies;
