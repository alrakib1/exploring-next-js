import Counter from '@/Components/Counter/Counter';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
        <h4>THis is Home page</h4>
          <Link href='/about'><button className='btn btn-primary'>About</button></Link>
          <br />
          <Link href='/contact'><button className='btn btn-primary'>Contact</button></Link>
          <br />
          <Link href='/news'><button className='btn btn-primary'>News</button></Link>
          <br />
          <Link href='/contact'><button className='btn btn-primary'>Contact</button></Link>
        <Counter/>
    </div>
  );
};

export default page;