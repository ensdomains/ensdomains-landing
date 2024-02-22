import 'normalize.css';

import React from 'react';

import AboutENS from '../components/About/AboutENS/';
import AboutHero from '../components/About/AboutHero';
import Description from '../components/About/Description/';
import Footer from '../components/Footer';
import GetInvolved from '../components/GetInvolved';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

export default function About(properties) {
    return (
        <Layout {...properties}>
            <Navigation />
            <AboutHero />
            <AboutENS />
            <Description />
            <GetInvolved />
            <Footer />
        </Layout>
    );
}
