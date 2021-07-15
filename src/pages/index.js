import React from "react"
import "normalize.css"

import Navigation from "../components/Navigation"
import Cryptocurrencies from "../components/Home/Cryptocurrencies/"
import PortableUsername from "../components/Home/PortableUsername/"
import DecentralisedWebsites from "../components/Home/DecentralisedWebsites/"
import Ecosystem from "../components/Home/Ecosystem/"
import Hero from "../components/Home/Hero"
import Carousel from "../components/Home/Carousel/"
import Statistics from "../components/Home/Statistics/"
import TraditionalDomains from "../components/Home/TraditionalDomains/"
import GetInvolved from "../components/GetInvolved"
import Footer from "../components/Footer"
import Layout from "../components/Layout"

export default function Home(props) {
  return (
    <Layout {...props}>
      <Navigation />
      <Hero />
      <Carousel />
      <PortableUsername />
      <Statistics />
      <Cryptocurrencies />
      <DecentralisedWebsites />
      <TraditionalDomains />
      <Ecosystem />
      <GetInvolved />
      <Footer />
    </Layout>
  )
}
