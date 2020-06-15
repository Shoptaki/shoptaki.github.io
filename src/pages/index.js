import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Carousel from "../components/carousel"
import { theme } from "../theme/GlobalStyles"

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
      link="/"
      linkText="What is Smartchain?"
      linkColor={theme.fontBlueGray}
    />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      Divider here! above is banner part
    </div>
    <Carousel
      link="/"
      linkText="Read More"
      linkColor={theme.fontGray}
      style={{display: 'flex', alignItems: 'center'}}/>
  </Layout>
)

export default IndexPage
