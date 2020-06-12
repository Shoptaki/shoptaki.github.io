import React, { useState } from "react";
import styled from "styled-components";
import { GlobalStyles } from "../theme/GlobalStyles"
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowDropright } from 'react-icons/io';
import CustomLink from "./customlink"
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./styles.css";

// const ImageSlider = styled.div`
//   display: flex;
//   width: 100%;
//   transform: ${props => "translateX(" + props.size + "px)"};
//   transition: transform 0.4s ease-in-out;
// `;
//
// const Dot = styled.span`
//   cursor: pointer;
//   height: 0.75rem;
//   width: 0.75rem;
//   margin: 0 0.4rem;
//   background-color: ${props => (props.active ? "#fff" : "transparent")};
//   border: 0.05rem solid #fff !important;
//   color: #fff;
//   border-radius: 50%;
//   display: inline-block;
//   transition: background-color 0.6s ease;
//
//   &:hover {
//     background-color: #fff;
//   }
// `;
//
// const DotContainer = styled.div`
//   display: flex;
//   position: absolute;
//   top: 90%;
//   justify-content: center;
//   width: 100%;
//
//   @media (max-width: ${GlobalStyles.tablet}) {
//     display: none;
//   }
// `;
//
// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;
const Container = styled.div`
  width: 85%;
  display: flex;
  flex-direction: 'row';
  overflow: hidden;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
`;

const TextContainer = styled.div`
  width: 40%;
  height: 50%;
  position: relative;
  padding-left: 3rem;
  padding-top: 1.5rem;
`
const ImageContainer = styled.div`
  width: 40%;
  padding: 3rem;
  margin-left: 2rem;
  overflow: hidden;

  @media (max-width: ${GlobalStyles.tablet}) {
    width: 100%;
  }
`
const Arrow = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
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

  //Minus 1 for array offset from 0
  const length = data.allSlide.nodes.length - 1

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)

  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)

  // var autoSlider = setInterval(handleNext, 3000)
  // clearInterval(autoSlider)

  const imageNode  = data.allFile.nodes[index]
  const textNode  = data.allSlide.nodes[index]

  console.log(index)
  console.log(length)

  var autoPlay;

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

        <Arrow onClick={() => handleNext()} onLoad={autoPlay= setInterval(handleNext, 5000)} > <IoIosArrowForward fill="#999999"/></Arrow>

      </Container>
      )
}
export default Carousel
