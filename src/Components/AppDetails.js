import Image from 'next/image';
import React, { useState } from 'react';
import { BsArrowRight, BsStars } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
import { MdSecurity } from 'react-icons/md';

function AppDetails() {
    const [activeElement, setActiveElement] = useState('overview');

    const handleSetElement = (elementName) => {
        setActiveElement(elementName);
    };

    return (
        <section className='appDetails-section'>
            <div className='app-details'>
                <aside>
                    <div>
                        <h5>Trade with 250+ coins</h5>
                        <p>
                            Astra App supports a variety of the most popular
                            digital curriencies
                        </p>
                    </div>
                    <div>
                        <h5>Recurring buy</h5>
                        <p>
                            Easily make trading crypto your routine on a fixed
                            and automated schedule
                        </p>
                    </div>
                    <div>
                        <h5>Manage your crypto</h5>
                        <p>
                            Easily transfer crypto. Send to or from Astra App
                            with no fees
                        </p>
                    </div>
                    <div>
                        <h5>On-chain Staking</h5>
                        <p>
                            Earn passive income with digital curriencies with up
                            to 12% yearly
                        </p>
                    </div>
                    <div>
                        <h5>Lowest transaction fees</h5>
                        <p>
                            Get the most crypto for your buck. You could get up
                            to 3.5% on your crypto
                        </p>
                    </div>
                </aside>
                <Image
                    className='image'
                    src={'/tile5.jpg'}
                    alt=''
                    height={500}
                    width={500}
                />
            </div>

            <article className='card-article'>
                <Image
                    className='image'
                    src='/tile6.jpg'
                    alt='thumbnail'
                    width={500}
                    height={500}
                />

                <div>
                    <h3>A card unlike any other</h3>
                    <p>
                        It's the instant discount, no-hidden-fee, secure debit
                        card that you design
                    </p>
                    <button>
                        See Details <BsArrowRight className='icon' />
                    </button>
                </div>
            </article>

            <div className='infos-wrapper'>
                <div className='infos-wrapper-item'>
                    <div className='icon-wrapper'>
                        <BsStars className='icon' />
                    </div>

                    <h5>Make it personal</h5>
                    <p>
                        The debit card offers customization, transparent pricing
                        with no hidden fees, and instant discounts
                    </p>
                </div>
                <div className='infos-wrapper-item'>
                    <div className='icon-wrapper'>
                        <TfiWorld className='icon' />
                    </div>
                    <h5>Use it everywhere</h5>
                    <p>
                        Your card works anywhere Visa® is accepted, including
                        ATMs. Plus, you can add it to a digital wallet on your
                        phone or watch
                    </p>
                </div>
                <div className='infos-wrapper-item'>
                    <div className='icon-wrapper'>
                        <MdSecurity className='icon' />
                    </div>
                    <h5>It's safe and secure</h5>
                    <p>
                        With real-time transaction alerts and fraud monitoring,
                        our advanced security features protect your assets at
                        your speed
                    </p>
                </div>
            </div>

            <article className='trade-article'>
                <h3>Astra App offers lowest cost to trade crypto on average</h3>
                <p className='subHeading'>Turn your money into crypto assets</p>

                <div className='options-wrapper'>
                    <p
                        className={activeElement === 'overview' ? 'active' : ''}
                        onClick={() => handleSetElement('overview')}
                    >
                        $10 USD
                    </p>
                    <p
                        className={
                            activeElement === 'watchlist' ? 'active' : ''
                        }
                        onClick={() => handleSetElement('watchlist')}
                    >
                        $100 USD
                    </p>
                    <p
                        className={activeElement === 'trade' ? 'active' : ''}
                        onClick={() => handleSetElement('trade')}
                    >
                        $1,000 USD
                    </p>
                </div>
            </article>
        </section>
    );
}

export default AppDetails;
