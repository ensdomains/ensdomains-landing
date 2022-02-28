import React from "react"
import "normalize.css"

import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import AboutJobs from "../components/Jobs/AboutJobs"
import Footer from "../components/Footer"
import Jobs from "../components/Jobs/Jobs"


export default function Job(props) {
  return (
    <Layout {...props}>
      <Navigation />
      <AboutJobs />
      <Jobs />
      <Footer />
    </Layout>
  )
}
