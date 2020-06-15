import React from "react"
<<<<<<< HEAD

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


=======
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Slogan from "../components/slogan"
import Header from "../components/header"


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
      linkColor="#8EB4D0"
    />
    <Slogan
      title="Take Control. Work Smarter. Enjoy Success. "
      description="We provide a source of distributed AI solutions for users to make smarter choices and simplify global interactions."
      color="orange"
    />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
>>>>>>> 76d916849e86f7aa1ca1b55f3a4baeab415539ea
