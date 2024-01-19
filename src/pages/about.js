import React from "react"
import "normalize.css"

import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import GetInvolved from "../components/GetInvolved"
import Footer from "../components/Footer"

import Description from "../components/About/Description/"
import AboutENS from "../components/About/AboutENS/"
import AboutHero from "../components/About/AboutHero"

export default function About(props) {
  return (
    <Layout {...props}>
      <Navigation />
      <AboutHero />
      <AboutENS />
      <Description />
      <GetInvolved />
      <Footer />
    </Layout>
  )
}
