import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import CustomLink from "./customlink"
import graphics from "../images/banner-graphics.svg"
// import mobileGraphics from "../images/banner-graphics-mobile.svg"
import mobileGraphics from "../images/mobile-banner-graphics.svg"
import tabletGraphics from "../images/tablet-banner-graphics.svg"
import { theme } from "../theme/GlobalStyles.js"

const Container = styled.div`
  padding: 0 0 0 0;
  display: flex;
  background-image: url(${graphics});
  flex-direction: row;

  /* Full height */
  height: 36rem;
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: cover;
<<<<<<< HEAD
=======
=======
  
  background-color: white;
  background-size: 100% auto;
>>>>>>> 9c77be22ca8472bd9013eaf3e9d16a52e5b1eb02
>>>>>>> 7bebc7e724b5a547e606159414b9e6549965cd07

  width: 100%;
  display: inline-block;
  page-break-after: always;

  /* include padding into the layout */
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  /* for mobile phone only*/
  @media (max-width: 370px) {
    background-image: url(${mobileGraphics});
    background-size: cover;
    flex-direction: column;
    height: 35rem;
  }

  /* for smaller tablets*/
  @media (min-width: 371px) and (max-width: ${theme.mobile}) {
    flex-direction: column;
    background-image: url(${tabletGraphics});
    padding-left: 5rem;
    height: 48.5rem;
  }
`

const TextContainer = styled.div`
  float: left;
  flexdirection: column;
  // flex: 1;
  padding: 0 6rem 0 8rem;
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
  margin-top: 3rem;
  max-width: 20rem;
  min-width: 18rem;
  font-weight: bold;
  font-size: 3rem;
  color: #07528b;
  display: inline-block;

  @media (max-width: ${theme.mobile}) {
    flexwrap: wrap;
    margin-top: 4rem;
    width: 100%;
    font-size: 2rem;
    padding-right: 3rem;
  }
`
const Subtitle = styled.h2`
  font-size: 2rem;
  max-width: 22rem;
  min-width: 18rem;
  color: #07528b;
  display: inline-block;

  /* To add hyphens to break word at last*/
  // -webkit-hyphens: auto;
  // -ms-hyphens: auto;
  // -moz-hyphens: auto;
  // hyphens: auto;

  @media (max-width: ${theme.mobile}) {
    overflow-wrap: break-word;
    word-wrap: break-word;
    flexwrap: wrap;
    max-width: 22rem;
    font-size: 1.5rem;
  }
`
const Description = styled.p`
  margin-top: 4.5rem;
  max-width: 20rem;
  min-width: 18rem;
  font-size: 1.3rem;
  color: #07528b;
  display: inline-block;

  // -webkit-hyphens: auto;
  // -ms-hyphens: auto;
  // -moz-hyphens: auto;
  //hyphens: auto;

  @media (max-width: ${theme.mobile}) {
    max-width: 17rem;
    /* wrap text */

    overflow-wrap: break-word;
    word-wrap: break-word;
    flexwrap: wrap;
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
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>

      <CustomLink
        to={link}
        displayText={linkText}
        linkColor={linkColor}
        arrow
      />
    </TextContainer>
    <ImageContainer>{/* <Image /> */}</ImageContainer>
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
