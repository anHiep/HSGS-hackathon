// app/components/HomePage.tsx

import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; 
import Usp from './Sections/Usp';
import Main from './Sections/Main';
import TrustedCompanies from './Sections/TrustedCompanies';
import UploadFeature from './Sections/UploadFeature';

const HomePage: React.FC = () => {
    return (
        <>
            <Main/>
            <UploadFeature/>
            <Usp/>
            <TrustedCompanies/>


        </>
    );
};

export default HomePage;