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
<<<<<<< HEAD
=======
import Header from "./header"

>>>>>>> 76d916849e86f7aa1ca1b55f3a4baeab415539ea

import { GlobalStyles } from "../theme/GlobalStyles"

const Container = styled.div`
  margin: 0;
<<<<<<< HEAD
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`;
=======
  width: 100%;
  //max-width: 960px;
  padding: 0 0 0;
`
>>>>>>> 76d916849e86f7aa1ca1b55f3a4baeab415539ea

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
<<<<<<< HEAD
=======
      <Header siteTitle={data.site.siteMetadata.title} />
>>>>>>> 76d916849e86f7aa1ca1b55f3a4baeab415539ea
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
