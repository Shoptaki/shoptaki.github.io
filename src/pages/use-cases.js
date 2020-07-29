import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import Bubbles from "../components/bubble"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"



const Container = styled.div`
  max-width: 1200px;
  max-height: 600px;
`
const UseCases = () => (
  <Container>
    <SEO title="Use Cases" />
      {/* <Header
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      /> */}
    
  </Container>
)

export default UseCases
