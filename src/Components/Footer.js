import Image from 'next/image';
import React from 'react';
import {
    FaApple,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className='footer_content-wrapper'>
                <div className='footer_content'>
                    <div className='footer_text-wrapper'>
                        <p className='subHeading'>
                            Over $700 billion USD in volume traded
                        </p>
                        <h2>Get started with Astra App now</h2>
                        <button>
                            <FaApple className='icon' /> Download Mobile App
                        </button>
                    </div>

                    <div className='footer-links-container'>
                        <div className='name_wrapper'>
                            <Image
                                src='/icon.png'
                                alt='icon'
                                className='footer_icon'
                                height={50}
                                width={50}
                            />
                            <p>Astra Crypto</p>
                        </div>

                        <ul>
                            <li>Prices</li>
                            <li>Exchange</li>
                            <li>Stacking</li>
                            <li>Credit Card</li>
                        </ul>
                    </div>

                    <summary>
                        <p>2024 Astra App</p>
                        <div className='footer_icons'>
                            <FaTwitter className='icon' />
                            <FaFacebook className='icon' />
                            <FaYoutube className='icon' />
                            <FaInstagram className='icon' />
                            <FaLinkedin className='icon' />
                        </div>
                    </summary>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
