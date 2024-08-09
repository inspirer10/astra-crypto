import React from 'react';

function Header() {
    return (
        <header>
            <div className='name_wrapper'>
                <img src='icon.png' alt='icon' className='header_icon' />
                <p className='header_name'>Astra Crypto</p>
            </div>

            <div className='nav_links'>
                <p>Prices</p>
                <p>Exchange</p>
                <p>Stacking</p>
                <p>Credit Card</p>
                <p>Resources</p>
            </div>

            <div className='buttons-wrapper'>
                <button className='logIn'>Log In</button>
                <button className='signUp'>Sign Up</button>
            </div>
        </header>
    );
}

export default Header;
