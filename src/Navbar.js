import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <h2>Tixy Ticketing</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
