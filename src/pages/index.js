import 'normalize.css';

import React from 'react';

import Banner from '../components/Banner/Banner.js';
import Footer from '../components/Footer';
import GetInvolved from '../components/GetInvolved';
import Carousel from '../components/Home/Carousel/';
import Cryptocurrencies from '../components/Home/Cryptocurrencies/';
import DecentralisedWebsites from '../components/Home/DecentralisedWebsites/';
import Ecosystem from '../components/Home/Ecosystem/';
import Hero from '../components/Home/Hero';
import Offchain from '../components/Home/Offchain/Offchain';
import PortableUsername from '../components/Home/PortableUsername/';
import Statistics from '../components/Home/Statistics/';
import TraditionalDomains from '../components/Home/TraditionalDomains/';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

export { Head } from '../components/Head';

export default function Home(properties) {
    return (
        <Layout {...properties}>
            <Banner />
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
