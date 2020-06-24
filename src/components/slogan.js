import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import TitleLiner from "./titleliner"
import TopSectionSVG from "../images/top_section.svg"

const Container = styled.div`
  background: #f8f8f8; 
  text-align: center;
  width: 100%;
  padding: 3rem 3rem;
  flex: 1;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; 
`

const Title = styled.h1`
  font-weight: lighter;
  font-style: italic;
  font-size: 1.5rem;
  flex-wrap: wrap;
`

const Description = styled.p`
  max-width: 30rem;
  font-size: 1.2rem;
  white-space: normal;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`;

/*
const TopSection = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1300" viewBox="0 0 1921.363 1316.203">
    <defs>
      <linearGradient id="linear-gradient" x1="0.523" y1="0.682" x2="0.464" y2="1.16" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#f8f8f8"/>
        <stop offset="1" stop-color="#0d97d2"/>
      </linearGradient>
    </defs>
    <path id="Top_Section" data-name="Top Section" d="M19829.836,2072.518l-1921.363-498.157V756.315h1921.363Z" transform="translate(-17908.473 -756.315)" fill="url(#linear-gradient)"/>
  </svg>
)

const SVGContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 30rem;
  right: 0;
  overflow-y: hidden;
  z-index: -1;
   
`;
*/

const Slogan = ({ title, description, color }) => (
  <Container>
    <center>
      <Title>{title}</Title>
    </center>
    <TitleLiner color={color} />
    <center>
      <Description>{description}</Description>
    </center>
  </Container>
)

Slogan.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  color: PropTypes.string,
}

Slogan.defaultProps = {
  description: ``,
  color: `blue`,
}

export default Slogan
