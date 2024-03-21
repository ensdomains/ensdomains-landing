import 'normalize.css';

import React from 'react';

import Footer from '../components/Footer.js';
import GetInvolved from '../components/GetInvolved.js';
import Carousel from '../components/Home/Carousel/index.js';
import Cryptocurrencies from '../components/Home/Cryptocurrencies/index.js';
import DecentralisedWebsites from '../components/Home/DecentralisedWebsites/index.js';
import Ecosystem from '../components/Home/Ecosystem/index.js';
import Hero from '../components/Home/Hero.js';
import Offchain from '../components/Home/Offchain/Offchain.js';
import PortableUsername from '../components/Home/PortableUsername/index.js';
import Statistics from '../components/Home/Statistics/index.js';
import TraditionalDomains from '../components/Home/TraditionalDomains/index.js';
import Layout from '../components/Layout.tsx';
import Navigation from '../components/Navigation.tsx';

export { Head } from '../components/Head.js';

export default function Home(properties) {
    return (
        <Layout {...properties}>
            <Navigation />
            <Hero />
            <Carousel />
            <PortableUsername />
            <Statistics />
            <Cryptocurrencies />
            <DecentralisedWebsites />
            <TraditionalDomains />
            <Offchain />
            <Ecosystem />
            <GetInvolved />
            <Footer />
        </Layout>
    );
}
