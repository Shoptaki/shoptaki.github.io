import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Slogan from "../components/slogan"
import CardAndHeader from "../components/cardAndHeader"

import ControlledCarousel from "../components/carousel"
import { theme } from "../theme/GlobalStyles.js"
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    {/* put banner here */}
    <Banner
      title="Smartchain: "
      subtitle="The next evolution of distributed technology"
      description="We are building a smart, secure, and adaptable gloabal ecosystem for distributing digital information."
      link="/why-smartchain"
      linkText="What is Smartchain?"
      linkColor={theme.fontBlueGray}
    />
    <Slogan
      title="Take Control. Work Smarter. Enjoy Success. "
      description="We provide a source of collaborative AI solutions for users to make smarter choices and simplify global interactions."
      color="orange"
    />

    <ControlledCarousel
      link1="/products"
      link2="/use-cases"
      link3="/why-smartchain"
      linkText="Read More"
      linkColor={theme.fontBlueGray}
    />


    <CardAndHeader />
  </Layout>
)

export default IndexPage
