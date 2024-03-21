import 'normalize.css';

import React from 'react';

import Hero from '../components/Home/Hero.js';
import Layout from '../components/Layout.tsx';
import Navigation from '../components/Navigation.tsx';

export { Head } from '../components/Head.js';

export default function Home(properties) {
    return (
        <Layout {...properties}>
            <Navigation />
            <Hero />
            {/* <Carousel />
            <PortableUsername />
            <Statistics />
            <Cryptocurrencies />
            <DecentralisedWebsites />
            <TraditionalDomains />
            <Offchain />
            <Ecosystem />
            <GetInvolved />
            <Footer /> */}
        </Layout>
    );
}
