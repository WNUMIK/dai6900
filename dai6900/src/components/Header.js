import React from 'react';
import './Header.css';
import twitterLogo from '../assets/media_logos/twitter.png';
import telegramLogo from '../assets/media_logos/telegram.png';
import dexscreenerLogo from '../assets/media_logos/dexscreener.png';
import logo from '../assets/logo/header.png'; // Adjust the path if necessary

const Header = () => {
    return (
        <header className="main-header">
            <div className="logo">
                <img src={logo} alt="DAI6900 Logo" />
            </div>
            <div className="center-links">
                <a href="https://x.com/dai6900" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <img src={twitterLogo} alt="X Icon" />
                </a>
                <a href="https://t.me/DAI6900CTO" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <img src={telegramLogo} alt="Telegram Icon" />
                </a>
                <a href="https://dexscreener.com/solana/djpxxzdrwmjbnc1p9d2akyj21f38pgdz9ulkixkaqvma" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <img src={dexscreenerLogo} alt="Dexscreener Icon" />
                </a>
            </div>
        </header>
    );
};

export default Header;
