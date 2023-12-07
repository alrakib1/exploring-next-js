import Link from 'next/link';
import React from 'react';
export const metadata = {
    title: 'About Page',
    description : 'this is about page'
}

const AboutPage = () => {
    return (
        <div>
            <h1>This is about page</h1>
            <Link href='/'>Home</Link>
        </div>
    );
};

export default AboutPage;