import Image from 'next/image';
import React, { act, useState } from 'react';

function CryptoJourney() {
    const [activeElement, setActiveElement] = useState('overview');

    const handleSetElement = (elementName) => {
        setActiveElement(elementName);
    };

    return (
        <section className='CryptoJourney-section'>
            <h2>Your crypto journey starts here</h2>

            <div className='tiles-wrapper'>
                <div className='tile'>
                    <h3>Trade with 250+ coins</h3>
                    <Image
                        className='image'
                        src='/illustration2.jpg'
                        alt='illustration'
                        width={300}
                        height={300}
                    />
                    <p>
                        Astra App supports a variety of the most popular digital
                        curriences
                    </p>
                </div>
                <div className='tile'>
                    <h3>Recurring buy</h3>
                    <Image
                        className='image'
                        src='/illustration1.jpg'
                        alt='illustration'
                        width={300}
                        height={300}
                    />
                    <p>
                        Easily make trading crypto your routine on a fixed and
                        automated schedule
                    </p>
                </div>
                <div className='tile'>
                    <h3>Manage your crypto</h3>
                    <Image
                        className='image'
                        src='/illustration3.jpg'
                        alt='illustration'
                        width={300}
                        height={300}
                    />
                    <p>
                        Easily transfer crypto. Send to or from Astra App with
                        no fees
                    </p>
                </div>
                <div className='tile'>
                    <h3>Lowest transaction fees</h3>
                    <Image
                        className='image'
                        src='/illustration5.jpg'
                        alt='illustration'
                        width={300}
                        height={300}
                    />
                    <p>
                        Get the most crypto for your buck. <br /> You could get
                        up to 3.5% on your crypto
                    </p>
                </div>
                <div className='tile'>
                    <h3>On-chain Staking</h3>
                    <Image
                        className='image'
                        src='/illustration4.jpg'
                        alt='illustration'
                        width={300}
                        height={300}
                    />
                    <p>
                        Earn passive income with digital curriencies with up to
                        12% yearly.
                    </p>
                </div>
            </div>

            <article>
                <h2>Astra App popular features</h2>
                <p className='subHeading'>
                    Witness our top features in action and explore the
                    possibilities with your cryprocurrency
                </p>

                <div className='options-wrapper'>
                    <p
                        className={activeElement === 'overview' ? 'active' : ''}
                        onClick={() => handleSetElement('overview')}
                    >
                        Overview
                    </p>
                    <p
                        className={
                            activeElement === 'watchlist' ? 'active' : ''
                        }
                        onClick={() => handleSetElement('watchlist')}
                    >
                        Watchlist
                    </p>
                    <p
                        className={activeElement === 'trade' ? 'active' : ''}
                        onClick={() => handleSetElement('trade')}
                    >
                        Trade
                    </p>
                    <p
                        className={activeElement === 'alerts' ? 'active' : ''}
                        onClick={() => handleSetElement('alerts')}
                    >
                        Alerts
                    </p>
                    <p
                        className={activeElement === 'stacking' ? 'active' : ''}
                        onClick={() => handleSetElement('stacking')}
                    >
                        Stacking
                    </p>
                    <p
                        className={activeElement === 'card' ? 'active' : ''}
                        onClick={() => handleSetElement('card')}
                    >
                        Card
                    </p>
                </div>

                <div className='images_wrappe'></div>

                <article className='stats-container'>
                    <div className='stats-wrapper'>
                        <h5>400+</h5>
                        <p>Markets</p>
                    </div>

                    <div className='stats-wrapper'>
                        <h5>$128B+</h5>
                        <p>Trading Volume(24h)</p>
                    </div>

                    <div className='stats-wrapper'>
                        <h5>250+</h5>
                        <p>Coins</p>
                    </div>
                </article>
            </article>
        </section>
    );
}

export default CryptoJourney;
