import Head from 'next/head';
import Header from '@/Components/Header';
import Introduction from '@/Components/Introduction';
import CryptoJourney from '@/Components/CryptoJourney';
import FutureMoney from '@/Components/FutureMoney';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Footer from '@/Components/Footer';
import CryptoBasics from '@/Components/CryptoBasics';
import AppDetails from '@/Components/AppDetails';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <Head>
                <title>Astra Crypto App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon2.ico' />
            </Head>
            <>
                <Header />
                <Introduction />
                <FutureMoney />
                <CryptoJourney />
                <CryptoBasics />
                <AppDetails />
                <Footer />
            </>
        </>
    );
}
