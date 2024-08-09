import React from 'react';
import { FaApple } from 'react-icons/fa';

function Introduction() {
    return (
        <section className='introduction_section'>
            <article className='content-container'>
                <div className='content-text-wrapper'>
                    <h1>Do more with your crypto</h1>
                    <p>
                        The easy way to buy, sell, store, and convert crypto.
                        Millions use Astra App to diversify their portfolios.
                    </p>
                    <button>
                        <FaApple className='icon' /> Download Mobile App
                    </button>
                </div>

                <img src='introduction.jpg' alt='' />
            </article>

            <article className='stats-container'>
                <div>
                    <h5>80M+</h5>
                    <p>Users worldwide</p>
                </div>

                <div>
                    <h5>120+</h5>
                    <p>Countries supported</p>
                </div>

                <div>
                    <h5>$220B+</h5>
                    <p>Trading volume</p>
                </div>

                <div>
                    <h5>up to 12%</h5>
                    <p>On stacking crypto</p>
                </div>
            </article>
        </section>
    );
}

export default Introduction;
