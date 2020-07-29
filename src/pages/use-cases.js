import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"



const Container = styled.div`
  max-width: 1200px;
  max-height: 600px;
`
const UseCases = () => (
  <Container>
    <SEO title="Use Cases" />
     
    
  </Container>
)

export default UseCases
