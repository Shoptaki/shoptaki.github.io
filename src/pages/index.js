import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Slogan from "../components/slogan"
<<<<<<< HEAD
import Header from "../components/header"
import CardAndHeader from "../components/cardAndHeader"
=======
>>>>>>> aec10c8af7bbfaedde7b24ef15d18ab31ad1c58a

import Carousel from "../components/carousel"
import { theme } from "../theme/GlobalStyles.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    {/* put banner here */}
    <Banner
      title="Smartchain:"
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

    <Carousel
      link="/"
      linkText="Read More"
      linkColor={theme.fontGray}
    />

    <Link to="/page-2/">Go to page 2</Link> <br />

    <CardAndHeader></CardAndHeader>
  </Layout>
)

export default IndexPage
