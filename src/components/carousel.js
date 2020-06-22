import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image"

import { useStaticQuery, graphql } from 'gatsby'
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { GlobalStyles, theme } from "../theme/GlobalStyles"

import CustomLink from "./customlink"
import "./styles.css"; // from React Transition Group


const Container = styled.div`
  overflow: hidden;
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
  width: 50rem;
  margin: auto;

  @media (max-width: ${theme.mobile}) {
    width: 100%;
    margin-left: 0rem;
  }
`;

const TextContainer = styled.div`
  width: 55%;
  position: relative;
  padding-left: 3rem;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;

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
const Dot = styled.span`
  cursor: pointer;
  height: 0.50rem;
  width: 0.50rem;
  margin: 0 0.4rem;
  background-color: ${props => (props.active ? '#0E99D3' : "#fff")};
  border: 0.05rem solid ${theme.logoLightBlue} !important;
  ${'' /* color: ${theme.logoLightBlue}; */}
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

`;

const DotContainer = styled.div`
  display: flex;
  position: absolute;
  top: 90%;
  justify-content: center;
  width: 100%;

  @media (max-width: ${theme.tablet}) {
    display: none;
  }
`;

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

const BackArrow = () => (
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
    <g id="Component_11_1" data-name="Component 11 – 1" transform="translate(30 27)">
      <g id="Group_20" data-name="Group 20" transform="translate(136 132) rotate(180)">
        <g transform="matrix(-1, 0, 0, -1, 166, 159)" filter="url(#Ellipse_4)">
          <ellipse id="Ellipse_4-2" data-name="Ellipse 4" cx="68" cy="66" rx="68" ry="66" transform="translate(166 159) rotate(180)" fill="#fff"/>
        </g>
        <path id="Path_30" data-name="Path 30" d="M1598.086,1941.2h20.082l18.4,25.988-18.4,26.908h-20.082l18.845-26.908Z" transform="translate(-1545 -1901.012)" fill="#0f7aaf"/>
      </g>
    </g>
  </svg>
)

function Carousel(props) {
  const [index, setIndex] = useState(0)

  const data = useStaticQuery(
    graphql`
      query {
        allSlide {
          nodes {
            name
            type
            id
          }
        }
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

  const imageNode  = data.allFile.nodes[index]
  const textNode  = data.allSlide.nodes[index]

  const defaultState = data.allSlide.nodes.map((node, index) => (index === 0 ? true : false));
  const [isActive, setIsActive] = useState(defaultState);

  //Minus 1 for array offset from 0
  const length = data.allSlide.nodes.length - 1

  const changeActive = (node) =>
    isActive.map((active, index) => (index === node ? true : false))

  const handleNext = (node) => (
    setIsActive(changeActive(node)),
    index === length ? setIndex(0) : setIndex(index + 1),
    console.log("index: " + index),
    console.log("active: " + isActive)
  )

  const handlePrevious = (node) => (
    setIsActive(changeActive(node)),
    index === 0 ? setIndex(length) : setIndex(index - 1),
    console.log("index: " + index),
    console.log("active: " + isActive)
  )

  const dotButtons = data.allSlide.nodes.map((node, index ) => (
      <Dot
        active={isActive[index]}
        key={index}
      ></Dot>
    ));


  return (
      <Box >
        <CarouselLeft onClick={() => handlePrevious(index)}> <BackArrow /> </CarouselLeft>

        <Container >

          <SwitchTransition mode="out-in">
            <CSSTransition key={index} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)} classNames="fade">

              <TextContainer key={textNode.id}>
                <h1 style={{fontSize: 40}}>{textNode.name} </h1>
                <p style={{fontSize: 24}}>{textNode.type}</p>
                <CustomLink
                  to={props.link}
                  displayText={props.linkText}
                  linkColor={props.linkColor}
                />
              </TextContainer>

            </CSSTransition>
          </SwitchTransition>

          <SwitchTransition mode="out-in">
            <CSSTransition key={index}  addEndListener={(node, done) => node.addEventListener("transitionend", done, false)} classNames="fade">

              <ImageContainer >
                <Img

                  fluid={imageNode.childImageSharp.fluid}
                  key={imageNode.id}
                  alt={imageNode.name.replace(/-/g, " ").substring(2)}
                />
              </ImageContainer>

            </CSSTransition>
          </SwitchTransition>

          <DotContainer>{dotButtons}</DotContainer>

        </Container>

        <CarouselRight onClick={() => handleNext(index)}  > <NextArrow /></CarouselRight>

      </Box>





          )


          }
          export default Carousel
