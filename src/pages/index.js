import React from "react"
import "normalize.css"

import Navigation from "../components/Navigation"
import AdditionalFeatures from "../components/Home/AdditionalFeatures/"
import Cryptocurrencies from "../components/Home/Cryptocurrencies/"
import DecentralisedWebsites from "../components/Home/DecentralisedWebsites/"
import Ecosystem from "../components/Home/Ecosystem/"
import Hero from "../components/Home/Hero"
import HeroCarousel from "../components/Home/HeroCarousel"
import Statistics from "../components/Home/Statistics/"
import TraditionalDomains from "../components/Home/TraditionalDomains/"
import GetInvolved from "../components/GetInvolved"
import Footer from "../components/Footer"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <HeroCarousel />
      <Cryptocurrencies />
      <Statistics />
      <DecentralisedWebsites />
      <TraditionalDomains />
      <AdditionalFeatures />
      <Ecosystem />
      <GetInvolved />
      <Footer />
    </Layout>
  )
}
