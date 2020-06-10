import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import CustomLink from "./customlink"
// import Image from "./image"
import graphics from "../images/banner-graphics.svg"

const Container = styled.div`
  padding: 0 0 1.45rem;
  background-image: url(${graphics});
  /* Full height */
  height: 700px;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  width: 1600px;
  display: inline-block;
  pagebreakafter: always;
`
const TextContainer = styled.div`
  position: relative;
  padding: 0 8rem 1.45rem;
  width: 70%;
  display: inline-block;
`
//to hold globe in home page
const ImageContainer = styled.div`
  position: relative;
  width: 10%;
  display: inline-block;
`
const LinkContainer = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
`

const Title = styled.h1`
  margin-top: 8rem;
  font-weight: bold;
  font-size: 40px;
  color: #07528b;
`
const Subtitle = styled.h2`
  font-size: 30px;
  color: #07528b;
`
const Description = styled.p`
  margin-top: 5rem;
  max-width: 500px;
  font-size: 25px;
  color: #3f9ce5;
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
            width: `13%`,
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
    <ImageContainer>{/* <Image /> */}</ImageContainer>
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
