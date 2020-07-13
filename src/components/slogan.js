import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import TitleLiner from "./titleliner"
import upperbg from "../images/UpperBG.svg"
import { theme } from "../theme/GlobalStyles"

const Container = styled.div`
  position: absolute;
  
  z-index: -1;
  background-image: url(${upperbg});
  top: 100vh;
  text-align: center;
  width: 100%;
  padding: 3rem 3rem;
  height: 100%;
 
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; 

  @media (min-width: ${theme.mobile}) {
    top: 44rem;
  }
`;

const Title = styled.h1`
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: lighter;
  font-style: italic;
  font-size: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

`;

const Description = styled.p`
  margin-top: 1.5rem;
  max-width: 40rem;
  font-size: 1.2rem;
  white-space: normal;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Slogan = ({ title, description, color }) => (
  <Container>
    <center>
      <Title>{title}</Title>
      <TitleLiner color={color} size={"26rem"}/>
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
