import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import CustomLink from "./customlink"
import Image from "./image"
import graphics from "../images/banner-graphics.svg"
// import mobileGraphics from "../images/banner-graphics-mobile.svg"
import mobileGraphics from "../images/mobile-banner-graphics.svg"
import { theme } from "../theme/GlobalStyles.js"

const Container = styled.div`
  padding: 0 0 0 0;
  display: flex;
  background-image: url(${graphics});
  flex-direction: row;

  /* Full height */
  height: 40rem;
  background-position: left bottom;
  background-repeat: no-repeat;
  // background-size: cover;
  background-size:100% auto;

  width: 100%;
  display: inline-block;
  pagebreakafter: always;

  /* include padding into the layout */
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;¥
  box-sizing: border-box;

  @media (max-width: ${theme.mobile}) {
    background-image: url(${mobileGraphics});
    flex-direction: column;
    height: 35rem;
  }
`

const TextContainer = styled.div`
  float: left;
  flexdirection: column;
  flex: 1;
  padding: 0 8rem 0 8rem;
  width: 60%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (max-width: ${theme.mobile}) {
    padding: 0 3rem 0 4rem;
    width: 100%;
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
  margin-top: 6rem;
  max-width: 20rem;
  font-weight: bold;
  font-size: 3rem;
  color: #07528b;
  display: inline-block;
  flexwrap: wrap;

  @media (max-width: ${theme.mobile}) {
    margin-top: 4rem;
    width: 100%;
    font-size: 2rem;
    padding-right: 3rem;
  }
`
const Subtitle = styled.h2`
  font-size: 2rem;
  max-width: 22rem;
  color: #07528b;
  display: inline-block;

  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
  flexwrap: wrap;
  @media (max-width: ${theme.mobile}) {
    font-size: 1.5rem;
  }
`
const Description = styled.p`
  margin-top: 4.5rem;
  max-width: 20rem;
  font-size: 1.3rem;
  color: #07528b;
  display: inline-block;

  /* wrap text */
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
  flexwrap: wrap;

  @media (max-width: ${theme.mobile}) {
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
}) => (
  <Container>
    <TextContainer>
      <div>
        <Title>{title}</Title>
      </div>
      <div>
        <Subtitle>{subtitle}</Subtitle>
      </div>
      <div>
        <Description>{description}</Description>
      </div>
      <CustomLink to={link} displayText={linkText} linkColor={linkColor} />
    </TextContainer>
    <ImageContainer>
      <Image />
    </ImageContainer>
  </Container>
)

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
  linkColor: PropTypes.string,
}

Banner.defaultProps = {
  subtitle: ``,
  description: ``,
  link: ``,
  linkText: ``,
  linkColor: `#8eb4d0`,
}

export default Banner
