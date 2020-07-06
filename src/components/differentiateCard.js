import React from "react"
import styled from "styled-components"

import Img from "gatsby-image"
import { useStaticQuery, graphql } from 'gatsby'

import TitleLiner from "../components/titleliner"
import {theme} from "../theme/GlobalStyles.js"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  width: 80%;
  margin: auto;
  align-items: center;
  justify-content: center;
  text-align: center;

`
const Title = styled.div`
    padding: 2rem 0rem 1rem 0rem;
`
const MobileItem = styled.div`
    @media (min-width: ${theme.tablet}) {
        display: none;
    }
`
const DesktopImg = styled.div`
    display: none;
    @media (min-width: ${theme.tablet}) {
        display: block;
        width: 80%;
    } 
`
const DesktopText = styled.div`
    display: none;
    @media (min-width: ${theme.tablet}) {
        display: flex;
        flex-direction: row;
    }    

`
const ImageContainer = styled.div`
    width: 35%;
    float: left;
    padding: 2rem 1rem;
    @media (min-width: ${theme.tablet}) {
        width: 100%;
        padding: 0.5rem 0.5rem;
    }
`
const TextContainer = styled.div`
    width: 65%;
    float: left;
    text-align: left;
    padding: 1rem 1rem;
    @media (min-width: ${theme.tablet}) {
        width: 30%;
        text-align: center;
        margin: 0rem auto;
    }
`

const DifferentiateCard = () => {

    const textItems = [
        {
            title: "Collaborative AI",
            description: "Utilizing A.I. to group overall data and make processes like transactions autonomous.",
        },
        {
            title: "Quantum Resistance Security",
            description: "Long-term increased security against attacks from quantum computers compared to popular public-key algorithms.",
        },
        {
            title: "Hyperconnected Ecosystem",
            description: "Realizing a singularity effect to streamline and aggregate data from different origins.",
        },
    ]

    const data = useStaticQuery(
        graphql`
        query {
          allFile(
            filter: { relativeDirectory: { eq: "smartchain-icons" }}
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

    // image[3] is desktopimg, image[0,1,2] is mobileimg
    const images = data.allFile.nodes.map((image) => (
        <ImageContainer>
            <Img
                fluid={image.childImageSharp.fluid}
                key={image.id}
                alt={image.name}
            />
        </ImageContainer>
    ))

    const text = textItems.map((item) => (
        <TextContainer>
            <p>{item.title}</p>
            <p>{item.description}</p>
        </TextContainer>
    ));
    

    return (
        <Box>
            <Title>
                <h4>What Differentiates Smartchain?</h4>
                <TitleLiner color="blue" />
            </Title>
            
            <DesktopImg>{images[3]}</DesktopImg>
            <DesktopText>{text}</DesktopText>

            <MobileItem>{images[0]}{text[0]}</MobileItem>
            <MobileItem>{images[1]}{text[1]}</MobileItem>
            <MobileItem>{images[2]}{text[2]}</MobileItem>

            
        </Box>
    )
}

export default DifferentiateCard