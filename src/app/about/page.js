import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div>
            <h1>This is about page</h1>
            <Link href='/'>Home</Link>
        </div>
    );
};

export default AboutPage;