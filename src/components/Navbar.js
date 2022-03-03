import React from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
    return (
        <nav>
            <h1>ChrisStudios</h1>
            <div className='links'>
                <Link to=''>Home</Link>
                <Link to='/aboutpage'>About</Link>
                <Link to='/project/port'>Portfolio</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </nav>
    );
}
