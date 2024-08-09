import React from 'react';

import { BsArrowRight } from 'react-icons/bs';

function CryptoBasics() {
    return (
        <article className='cryptoBasics-article'>
            <h2>Learn some crypto basics </h2>
            <p>
                Beginner guides, practical tips, and market updates for
                first-timers, experienced investors and everyone in between
            </p>

            <button>
                Read our blog <BsArrowRight className='icon' />
            </button>
        </article>
    );
}

export default CryptoBasics;
