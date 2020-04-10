import React from 'react';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/">Home</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/get-appointment">Contact</a>
                
            </nav>
        </div>
    );
};

export default Header;