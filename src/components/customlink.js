import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const LinkContainer = styled.div`
  width: 100%;
  display: inline-block;
`

// link hover effect
const Label = styled.a`
  padding: 5px;
  position: relative;
  color: ${props => props.linkColor || "#000000"};
  text-decoration: none;
  &::before {
    content: "";
    position: absolute;
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
const Arrow = ({ linkColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 -2 12 27"
  >
    <path
      id="arrow"
      data-name="arrow"
      d="M13,0,26,11H0Z"
      transform="translate(11) rotate(90)"
      fill={linkColor}
    />
  </svg>
)

const CustomLink = ({ to, displayText, linkColor }) => (
  <LinkContainer>
    <div style={{ display: `inline-block` }}>
      <Label href={to} linkColor={linkColor}>
        {displayText}
      </Label>
    </div>
    <div style={{ display: `inline-block` }}>
      <Arrow linkColor={linkColor} />
    </div>
  </LinkContainer>
)

Arrow.propTypes = {
  linkColor: PropTypes.string,
}
Arrow.defaultProps = {
  linkColor: `#8eb4d0`,
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
  linkColor: PropTypes.string,
}

CustomLink.defaultProps = {
  linkColor: ``,
}

export default CustomLink
