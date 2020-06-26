/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GlobalStyles} from "../theme/GlobalStyles"
import { theme } from "../theme/GlobalStyles"
import Recognize from "./recognize"
import Contact from "./ContactUs"
import Header from "./header"
import Footer from "./footer"

const Container = styled.div`
  margin: 0;
  /* max-width: ${theme.largeDesktop}; */
  padding: 0 0 0;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            title
            subLinks {
              title
              link
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Header
        siteTitle={data.site.siteMetadata.title}
        menuLinks={data.site.siteMetadata.menuLinks}
      />
      <Container>
        <main>{children}</main>
        
      </Container>
      <Recognize />
      <Contact />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
