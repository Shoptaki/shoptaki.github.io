import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

// link hover effect
const Label = styled.a`
  padding: 5px;
  position: relative;
  color: ${props => props.linkColor || "#000000"};
  text-decoration: none;
  &::before {
    content: "";
    position: relative;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.linkColor || "#000000"};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`

const CustomLink = ({ to, displayText, linkColor }) => (
  <Label href={to} linkColor={linkColor}>
    {displayText}
  </Label>
)

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
  linkColor: PropTypes.string,
}

CustomLink.defaultProps = {
  linkColor: ``,
}

export default CustomLink
