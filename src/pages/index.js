import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import {Autonomous, Efficiency, Security} from "../components/Cards"
import Card from "../components/Cards"
import bar from "../../bar.png"
import styled from "styled-components"

/*
const Wrapper = styled.div`
`
*/

const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Home" />
    <div
    style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
      <div>
      <h1 style={{
        textAlign: 'center'
    }}>
        What do we promise?
      </h1>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <img src={bar} alt="bar image" />
      </div>
    <Card></Card>
    </div>
    </div>

  </Layout>
  
  </>
  
)

export default IndexPage


