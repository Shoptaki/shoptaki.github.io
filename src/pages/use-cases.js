import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import Bubbles from "../components/bubble"
import styled from "styled-components"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"



const Container = styled.div`
  max-width: 1200px;
  max-height: 600px;
`
const IndexPage = () => (
  <Container>
    <SEO title="Use cases" />
      {/* <Header
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      /> */}
    <Bubbles />
  </Container>
)

export default IndexPage
