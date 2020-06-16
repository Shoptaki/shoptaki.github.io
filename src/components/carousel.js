import React, { useState } from "react";
import styled from "styled-components";
import { GlobalStyles, theme } from "../theme/GlobalStyles"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowDropright } from 'react-icons/io';
import CustomLink from "./customlink"
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./styles.css";

const Container = styled.div`
  display: flex;
  flex-direction: 'row';
  overflow: hidden;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  width: 50rem;
  margin: auto;

  @media (max-width: ${theme.mobile}) {
    width: 100%;
    flex-direction: column-reverse;
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
const Arrow = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  @media (max-width: ${theme.mobile}) {
    display: none;
  }
`



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

  //Minus 1 for array offset from 0
  const length = data.allSlide.nodes.length - 1

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)

  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)



  return (
      <Container>
        <Arrow onClick={() => handlePrevious()}> <IoIosArrowBack fill="#999999"/> </Arrow>

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

            <ImageContainer>
              <Img
                fluid={imageNode.childImageSharp.fluid}
                key={imageNode.id}
                alt={imageNode.name.replace(/-/g, " ").substring(2)}
              />
            </ImageContainer>

          </CSSTransition>
        </SwitchTransition>

        <Arrow onClick={() => handleNext()} onLoad={setTimeout(handleNext, 5000)} > <IoIosArrowForward fill="#999999"/></Arrow>

      </Container>


      )


}
export default Carousel
