import React from 'react';
import background from '../../Image/bannerbackground.png';
import './Header.css';

const Header = () => {
    return (
        <div className="top-section">
            <div>
            <img className="bckg" src={background} alt=""/>
            </div>
            <div className="top-header">
            <h1>Welcome to Feed your belly!!</h1>
            </div>
            
        </div>
    );
};

export default Header;