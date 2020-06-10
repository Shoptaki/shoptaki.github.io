import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import CustomLink from "./customlink"
import Image from "./image"
import graphics from "../images/banner-graphics.svg"
import mobileGraphics from "../images/banner-graphics-mobile.svg"
// import theme from "../theme/GlobalStyles.js"

const imageUrl = window.innerWidth >= 650 ? graphics : mobileGraphics
const direction = window.innerWidth >= 650 ? "row" : "column"

const Container = styled.div`
  padding: 0 0 0 0;
  display: flex;
  background-image: url(${imageUrl});
  flex-direction: ${direction};

  /* Full height */
  height: 45rem;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: inline-block;
  pagebreakafter: always;
`

const textLeft = window.innerWidth >= 650 ? "5.5rem" : "3rem"
const textWidth = window.innerWidth >= 650 ? "70%" : "100%"
const TextContainer = styled.div`
  float: left;
  width: ${textWidth};
  flexdirection: column;
  flex: 1;

  padding: 0 8rem 0 ${textLeft};
`
//to hold globe in home page
const imageWidth = window.innerWidth >= 650 ? "30%" : "100%"
const ImageContainer = styled.div`
  position: relative;
  width: ${imageWidth};
`
const LinkContainer = styled.div`
  width: 100%;
  display: inline-block;
`

const Title = styled.h1`
  margin-top: 8rem;
  font-weight: bold;
  font-size: 40px;
  color: #07528b;
  flexwrap: wrap;
`
const Subtitle = styled.h2`
  font-size: 30px;
  color: #07528b;
  flexwrap: wrap;
`
const Description = styled.p`
  margin-top: 5rem;
  max-width: 500px;
  font-size: 25px;
  color: #3f9ce5;
  flexwrap: wrap;
`
const Arrow = ({ linkColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 2 11 27"
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

      <LinkContainer>
        <div
          style={{
            position: `relative`,
            // width: `13%`,
            display: `inline-block`,
            paddingTop: `10px`,
          }}
        >
          <CustomLink to={link} displayText={linkText} linkColor={linkColor} />
        </div>
        <div
          style={{
            position: `absolute`,
            width: `10px`,
            display: `inline-block`,
            paddingTop: `11px`,
          }}
        >
          <Arrow linkColor={linkColor} />
        </div>
      </LinkContainer>
    </TextContainer>
    <ImageContainer>
      <Image />
    </ImageContainer>
  </Container>
)

Arrow.propTypes = {
  linkColor: PropTypes.string,
}
Arrow.defaultProps = {
  linkColor: `#8eb4d0`,
}

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
