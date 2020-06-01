import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Container = styled.header`
  margin-bottom: 1.45rem;
  padding: 1.45rem 1.0875rem;
  box-shadow: 0 2px 2px #888888; 
`;

const Logo = styled(Link)`
  color: black;
  text-decoration: none;
  
`;

const Header = ({ siteTitle }) => (
  <Container>
    <h1 style={{ margin: 0 }}>
      <Logo to="/">
        {siteTitle}
      </Logo>
    </h1>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
