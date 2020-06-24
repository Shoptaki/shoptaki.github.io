import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image"

import { useStaticQuery, graphql } from 'gatsby'
import { GlobalStyles, theme } from "../theme/GlobalStyles"

import CustomLink from "./customlink"

import Carousel from 'react-bootstrap/Carousel'
import "./styles.css"; // for bootstrap carousel customization

const Container = styled.div`
  display: flex;
  flex-direction: 'row';
  position: relative;
  @media (max-width: ${theme.mobile}) {
    flex-direction: column-reverse;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: 'row';
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  width: 70%;
  height: 30vw;
  margin: auto;

  @media (max-width: ${theme.mobile}) {
    width: 100%;
    margin-left: 0rem;
    flex-direction: column-reverse;
  }
`;
const TextContainer = styled.div`
  width: 55%;
  float: left;
  position: relative;
  padding-left: 3rem;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;

  @media (max-width: ${theme.tablet}) {
    padding-top: 2rem;
  }

  @media (max-width: ${theme.mobile}) {
    width: 100%;
    padding-right: 1rem;
  }
`
const ImageContainer = styled.div`
  width: 45%;
  padding: 3rem;
  margin-left: 0.5rem;
  overflow: hidden;

  @media (max-width: ${theme.mobile}) {
    width: 75%;
    padding-bottom: 0rem;
    margin-left: 15%;
  }
`
const Heading = styled.h3`
  font-size : 3vw;
  padding-bottom: 2rem;
  @media (max-width: ${theme.tablet}) {
    padding-bottom: 1rem;
  }
`
const CarouselLeft = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 2rem;

  @media (max-width: ${theme.mobile}) {
    display: none;
  }
`
const CarouselRight = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 2rem;

  @media (max-width: ${theme.mobile}) {
    display: none;
  }
`

const NextArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 196 192">
    <defs>
      <filter id="Ellipse_4" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="10" result="blur"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Component_12_1" data-name="Component 12 – 1" transform="translate(30 27)">
      <g id="Component_13_1" data-name="Component 13 – 1">
        <g transform="matrix(1, 0, 0, 1, -30, -27)" filter="url(#Ellipse_4)">
          <ellipse id="Ellipse_4-2" data-name="Ellipse 4" cx="68" cy="66" rx="68" ry="66" transform="translate(30 27)" fill="#fff"/>
        </g>
        <path id="Path_30" data-name="Path 30" d="M1598.086,1941.2h20.082l18.4,25.988-18.4,26.908h-20.082l18.845-26.908Z" transform="translate(-1545 -1901.012)" fill="#0f7aaf"/>
      </g>
    </g>
  </svg>

)

const slides = [
  {
    name: "What We Offer",
    type: "Smartchain offers a hybrid infrastructure for public and private ledgers which allows for both centralized as well as decentralized models within its processes.",
  },
  {
    name: "Our Potential",
    type: "Smartchain can be integrated into existing cloud distributions and act as a bridge between densely connected  networks.",
  },
  {
    name: "How It Works",
    type: "Smartchain combines AI and DL technologies to securely facilitate digital transfers across multiple industries.",
  },
]

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const data = useStaticQuery(
    graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "slides" } }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    `
  )

  const images  = data.allFile.nodes[index]

  return (
    <Box>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} controls={false}>

        <Carousel.Item>
          <TextContainer>
            <Carousel.Caption>
              <Heading>{slides[0].name}</Heading>
              <p>{slides[0].type}</p>
              <CustomLink
                to={props.link1}
                displayText={props.linkText}
                linkColor={props.linkColor}
                arrow
              />
            </Carousel.Caption>
          </TextContainer>
          <ImageContainer>
            <Img
              fluid={data.allFile.nodes[0].childImageSharp.fluid}
              key={data.allFile.nodes[0].id}
              alt={data.allFile.nodes[0].name.replace(/-/g, " ").substring(2)}
            />
          </ImageContainer>
        </Carousel.Item>

        <Carousel.Item>
          <TextContainer>
            <Carousel.Caption>
              <Heading>{slides[1].name}</Heading>
              <p>{slides[1].type}</p>
              <CustomLink
                to={props.link2}
                displayText={props.linkText}
                linkColor={props.linkColor}
                arrow
              />
            </Carousel.Caption>
          </TextContainer>
          <ImageContainer>
            <Img
              fluid={data.allFile.nodes[1].childImageSharp.fluid}
              key={data.allFile.nodes[1].id}
              alt={data.allFile.nodes[1].name.replace(/-/g, " ").substring(2)}
            />
          </ImageContainer>
        </Carousel.Item>

        <Carousel.Item>
          <TextContainer>
            <Carousel.Caption>
              <Heading>{slides[2].name}</Heading>
              <p>{slides[2].type}</p>
              <CustomLink
                to={props.link3}
                displayText={props.linkText}
                linkColor={props.linkColor}
                arrow
              />
            </Carousel.Caption>
          </TextContainer>
          <ImageContainer>
            <Img
              fluid={data.allFile.nodes[2].childImageSharp.fluid}
              key={data.allFile.nodes[2].id}
              alt={data.allFile.nodes[2].name.replace(/-/g, " ").substring(2)}
            />
          </ImageContainer>
        </Carousel.Item>

      </Carousel>


    </Box>
  );
}

export default ControlledCarousel
