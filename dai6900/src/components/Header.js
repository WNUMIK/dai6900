import React, { useState } from 'react';
import './Header.css';
import twitterLogo from '../assets/media_logos/twitter.png';
import telegramLogo from '../assets/media_logos/telegram.png';
import dexscreenerLogo from '../assets/media_logos/dexscreener.png';
import logo from '../assets/logo/header.png'; // Adjust the path if necessary

const Header = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleMerchClick = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <header className="main-header">
            <div className="logo">
                <img src={logo} alt="DAI6900 Logo"/>
            </div>
            <div className="center-links">
                <a href="https://x.com/dai6900" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <img src={twitterLogo} alt="X Icon"/>
                </a>
                <a href="https://t.me/DAI6900CTO" target="_blank" rel="noopener noreferrer" className="icon-link">
                    <img src={telegramLogo} alt="Telegram Icon"/>
                </a>
                <a href="https://dexscreener.com/solana/djpxxzdrwmjbnc1p9d2akyj21f38pgdz9ulkixkaqvma" target="_blank"
                   rel="noopener noreferrer" className="icon-link">
                    <img src={dexscreenerLogo} alt="Dexscreener Icon"/>
                </a>
            </div>
            <div className="nav-row">
                <a href="https://dexscreener.com/solana/djpxxzdrwmjbnc1p9d2akyj21f38pgdz9ulkixkaqvma"
                   className="nav-link">CHART</a>
                <a href="https://dexscreener.com/solana/djpxxzdrwmjbnc1p9d2akyj21f38pgdz9ulkixkaqvma"
                   className="nav-link buy">BUY</a>
                <a href="/merch" className="nav-link" onClick={handleMerchClick}>MERCH</a>
            </div>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <h2>🎉 MERCH SOON!!! 🎉</h2>
                        <p>We’re currently working on some ultra-rare, limited-edition meme gear. Stay tuned! 🐸💚</p>
                        <p>In the meantime, make tribute to our fallen soldiers to keep your spirits high! 😺</p>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
