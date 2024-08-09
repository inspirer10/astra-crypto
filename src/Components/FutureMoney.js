import React from 'react';

function FutureMoney() {
    return (
        <section className='future_section'>
            <h2>The future of money is here</h2>
            <p className='subHeading'>
                We stand as the foremost trusted destination for individuals and
                enterprises to buy, sell and store crytpo.
            </p>

            <article className='tiles-container'>
                <div className='tile'>
                    <h6>Do more with your crypto</h6>
                    <p>Buy, sell, store, convert and more</p>
                    <img src='tile1.jpg' alt='tile thumbnail' loading='lazy' />
                </div>

                <div className='tiles-wrapper'>
                    <div className='tile small_tile'>
                        <h6>Stacking</h6>
                        <p>Get rewards on your crypto</p>
                        <img
                            src='tile2.jpg'
                            alt='tile thumbnail'
                            loading='lazy'
                        />
                    </div>
                    <div className='tile small_tile'>
                        <h6>Porfolio</h6>
                        <p>Store safe and track your assets</p>
                        <img
                            src='tile3.jpg'
                            alt='tile thumbnail'
                            loading='lazy'
                        />
                    </div>
                </div>

                <div className='tile'>
                    <h6>VISA Card</h6>
                    <p>The only card you need</p>
                    <img src='tile4.jpg' alt='tile thumbnail' loading='lazy' />
                </div>
            </article>
        </section>
    );
}

export default FutureMoney;
