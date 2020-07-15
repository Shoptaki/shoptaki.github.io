import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image"

import { useStaticQuery, graphql } from 'gatsby'
import { theme } from "../theme/GlobalStyles"

import CustomLink from "./CustomLink"

import Carousel from 'react-bootstrap/Carousel'
import "./styles.css"; // for bootstrap carousel customization

const Box = styled.div`
  display: flex;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  width: 70%;
  margin: auto;
  margin-top: 15rem;
  background-color: white;
  height: 30vw;
  justify-content: center;

  @media (max-width: ${theme.tablet}) {
    height: 33vw;
    width: 80%;
    
  }

  @media (max-width: ${theme.phone}) {
    width: 100%;
    margin-left: 0rem;
    margin-top: 18rem;
    margin-bottom: 5rem;
    float: right;
    height: 38rem;
    box-shadow: none;
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
    padding: 2rem 0rem 3.5rem 2rem;
  }

  @media (max-width: ${theme.phone}) {
    width: 100%;
    padding: 3rem 3rem 0rem 3rem;

  }
`
const ImageContainer = styled.div`
  width: 45%;
  padding: 4rem;
  margin-left: 0.5rem;
  overflow: hidden;

  @media (max-width: ${theme.tablet}) {
    padding: 6vw;
  }

  @media (max-width: ${theme.phone}) {
    width: 70%;
    padding: 3rem 0rem 0rem;
    margin-left: 15%;

  }
`
const Heading = styled.h3`
  font-size : 3vw;
  padding-bottom: 2rem;
  @media (max-width: ${theme.tablet}) {
    padding-bottom: 0.5rem;
  }
  @media (max-width: ${theme.phone}) {
    font-size: 2rem;
  }
`

const Subtext = styled.p`
  @media (max-width: ${theme.tablet}) {
    font-size: 2vw;
  }
  @media (max-width: ${theme.phone}) {
    font-size: 1rem;
  }
`
const Link = styled.div`
  padding-top: 0.5rem;
`

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Text Object
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

  // Image Query
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

  // todo: map to reduce repetitivity
  return (
    <Box>
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>

        <Carousel.Item>
          <TextContainer>
            <Carousel.Caption>
              <Heading>{slides[0].name}</Heading>
              <Subtext>{slides[0].type}
                <Link>
                  <CustomLink
                    to={props.link1}
                    displayText={props.linkText}
                    linkColor={props.linkColor}
                    arrow
                  />
                </Link>
              </Subtext>
            </Carousel.Caption>
          </TextContainer>
          <ImageContainer>
            <Img
              fluid={data.allFile.nodes[0].childImageSharp.fluid}
              key={data.allFile.nodes[0].id}
              alt={data.allFile.nodes[0].name}
            />
          </ImageContainer>
        </Carousel.Item>

        <Carousel.Item>
          <TextContainer>
            <Carousel.Caption>
              <Heading>{slides[1].name}</Heading>
              <Subtext>{slides[1].type}
                <Link>
                  <CustomLink
                    to={props.link2}
                    displayText={props.linkText}
                    linkColor={props.linkColor}
                    arrow
                  />
                </Link>
              </Subtext>
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
              <Subtext>{slides[2].type}
                <Link>
                  <CustomLink
                    to={props.link3}
                    displayText={props.linkText}
                    linkColor={props.linkColor}
                    arrow
                  />
                </Link>
              </Subtext>
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
