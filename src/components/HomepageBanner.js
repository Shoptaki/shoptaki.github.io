import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import CustomLink from "./customlink.jsx"
import graphics from "../images/banner-graphics.svg"
import mobileGraphics from "../images/banner-graphics-mobile.svg"
import { theme } from "../theme/GlobalStyles.js"


const Container = styled.div`
  display: flex;
  background-image: url(${mobileGraphics});
  flex-direction: column;
  padding-left: 4rem;

  /* Full height */
  height: 95vh;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;

  

  width: 100%;
  display: inline-block;
  page-break-after: always;

  /* include padding into the layout */
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;


  /* for tablet and desktop */
  @media (min-width: ${theme.mobile}) {
    background-image: url(${graphics});
    background-size: auto;
    flex-direction: row;
    height: 40rem;
    padding: 2rem 0 0 3rem;
  }

`

const TextContainer = styled.div`
  float: left;
  flex-flow: nowrap column;
  /* flex: 1; */
  padding: 2rem 3rem 0 2rem;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  

  @media (min-width: ${theme.mobile}) {
    padding: 0 3rem 0 6rem;
  }
  @media (min-width: ${theme.tablet}) {
    width: 60%;
  }
`
//to hold globe in home page
const ImageContainer = styled.div`
  float: right;
  position: relative;
  margin-top: 10rem;
  width: 30%;

  @media (max-width: ${theme.mobile}) {
    width: 0;
    margin-top: 10rem;
  }
`

const Title = styled.h1`
  margin-top: 3rem;
  max-width: 20rem;
  min-width: 18rem;
  font-weight: bold;
  font-size: 3rem;
  color: #07528b;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${theme.mobile}) {
    flex-wrap: wrap;
    margin-top: 4rem;
    width: 100%;
    font-size: 2rem;
    min-width: 1rem;
    padding-right: 3rem;
  }
`
const Subtitle = styled.h2`
  font-size: 2rem;
  max-width: 22rem;
  min-width: 18rem;
  color: #07528b;

  @media (max-width: ${theme.mobile}) {
    overflow-wrap: break-word;
    word-wrap: break-word;
    flex-wrap: wrap;
    max-width: 22rem;
    min-width: 1rem;
    font-size: 1.5rem;
  }
`
const Description = styled.p`
  margin-top: 3rem;
  max-width: 20rem;
  min-width: 18rem;
  font-size: 1.3rem;
  color: #07528b;
  display: inline-block;

  /* wrap text */
  overflow-wrap: break-word;
  word-wrap: break-word;
  flex-wrap: wrap;

  @media (max-width: ${theme.mobile}) {
    max-width: 17rem;
    /* wrap text */
    min-width: 1rem;
    margin-top: 3rem;
  }
`

const Banner = ({
  title,
  subtitle,
  description,
  link,
  linkText,
  linkColor,
  linkSize,
}) => (
  <Container>
    <TextContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>

      <CustomLink
        to={link}
        displayText={linkText}
        linkColor={linkColor}
        fontSize={linkSize}
        arrow
      />
    </TextContainer>
    <ImageContainer />
  </Container>
)

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  linkColor: PropTypes.string,
  linkSize: PropTypes.string,
}

Banner.defaultProps = {
  subtitle: ``,
  description: ``,
  link: ``,
  linkText: ``,
  linkColor: `#8eb4d0`,
  linkSize: `16px`,
}

export default Banner
