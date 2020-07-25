import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import TitleLiner from "./TitleLiner"
import upperbg from "../images/upper_background.svg"
import { theme } from "../theme/GlobalStyles"

const Container = styled.div`
  position: absolute;
  
  z-index: -1;
  background-image: url(${upperbg});
  background-size: cover;
  top: 43rem;
  text-align: center;
  width: 100%;
  padding: 3rem 3rem;
  height: 100%;
 
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; 

  @media (max-width: ${theme.tablet}) {
    top: 60rem;
  }

  @media (max-width: ${theme.mobile}) {
    top: 110vw;
  }
`;

const Title = styled.h1`
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: lighter;
  font-style: italic;
  font-size: 2rem;
  flex-wrap: wrap;

  @media (max-width: ${theme.mobile}) {
    font-size: 1.5rem;
  }

`;

const Description = styled.p`
  margin-top: 1.5rem;
  max-width: 40rem;
  font-size: 1.2rem;
  white-space: normal;
  
  flex-wrap: wrap;

  @media (max-width: ${theme.mobile}) {
    font-size: 0.9rem;
  }
`;

const Slogan = ({ title, description, color }) => (
  <Container>
    <center>
      <Title>{title}</Title>
      <TitleLiner color={color} size={"80vw"}/>
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
