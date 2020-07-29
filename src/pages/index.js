import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/HomepageBanner"

import Slogan from "../components/Slogan.jsx"
import Recognize from "../components/RecognizedSection.jsx"
import Contact from "../components/ContactUsSection.jsx"
import CardSection from "../components/CardSection.jsx"

import RCarousel from "../components/RCarousel"

import { theme } from "../theme/GlobalStyles.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner
      title="Smartchain: "
      subtitle="The next evolution of distributed technology"
      description="We are building a smart, secure, and adaptable gloabal ecosystem for distributing digital information."
      link="/why-smartchain"
      linkText="What is Smartchain?"
      linkColor={theme.fontBlueGray}
      linkSize="20px"
    />
    <Slogan
      title="Take Control. Work Smarter. Enjoy Success. "
      description="We provide a source of collaborative AI solutions for users to make smarter choices and simplify global interactions."
      color="orange"
      homepage
    />

    {/*
    <ControlledCarousel
      link1="/products"
      link2="/use-cases"
      link3="/why-smartchain"
      linkText="Read More"
      linkColor={theme.fontBlueGray}
    />
    */
    }
    <RCarousel />
    <CardSection />
    <Recognize />
    <Contact />
  </Layout>
  
)

export default IndexPage