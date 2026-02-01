import React from 'react';
import { Link } from 'react-router-dom';  // Assuming you're using React Router for navigation, as seen in MainPage.js
import '../styles/Header.css';  // Import the CSS for styling

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-title">All Nations Madurai</h1>
                <nav className="header-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/videos" className="nav-link">Videos</Link>
                    {/* Add more links if needed, e.g., <Link to="/login" className="nav-link">Admin</Link> */}
                </nav>
            </div>
        </header>
    );
};

export default Header;