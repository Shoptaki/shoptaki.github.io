import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"
import passportImage from "../images/passport.svg"
import bankImage from "../images/bank.png"
import CustomLink from "../components/customlink.jsx"
import TitleLiner from "../components/titleliner.jsx"

const SmallCard = styled.div`
  padding-left: 12%;
  padding-right: 12%;
  padding-top: 30rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-basis: 10%;

  @media (max-width: ${theme.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const SmallBox = styled.div`
  background-color: white;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  margin: 5em 0;
  width: 27rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.tablet}) {
    margin-bottom: 3em;
    margin-top: 0em;
  }
`
const SmallImage = styled.img`
  height: 7rem;
  margin-left: 2rem;
  
`

const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
`

const SmartTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  width: 60%;
  padding-top: 2rem;
  margin-bottom: 0.5em;
`

const Description = styled.div`
  margin-top:1.5rem;
  font-size: 16px;
  height: 8rem;
  @media (max-width: ${theme.mobile}) {
    margin-top:2rem;
  }
`
const HorizontalBox = styled.div`
  display: flex;
  flex-direction: row;
`
const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  height: 45px;
  width: 120px;
  font-size: 18px;
  font-weight: bold;
  padding-bottom:5px;
  padding-left:8px;
  margin: auto;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  
`
// const ButtonContainer = styled.div`
//   text-align: center;
//   position: absolute;
  
//   bottom: 2rem;
//   left: 9rem;
//   @media (max-width: ${theme.mobile}) {
//     text-align: center;
//     bottom:2rem;
//     left: 8rem;
//   }
// `

// const LinkContainer = styled.div`
//   width: 100%;
//   display: inline-block;
//   padding-top: 1rem;
// `


// // link hover effect
// const LabelA = styled.div`
//   margin-top: -0.5rem;
//   margin-left:3px;
//   margin-right:2px;
//   position: relative;
//   color: ${props => props.linkColor || "#2E50B9"};
//   text-decoration: none;
//   &::after {
//     content: "";
//     position: absolute;
//     width: 100%;
//     height: 2px;
//     bottom: 0;
//     left: 0;
//     background-color: ${props => props.linkColor || "#2E50B9"};
//     transform: scaleX(0);
//     transform-origin: 100% 50%;
//     transition: transform 0.5s ease-in-out 0s;
//   }
//   &:hover::after {
//     transform: scaleX(1);
//     transform-origin: 0% 0%;
//   }
// `
// const Arrow = ({ linkColor }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="12"
//     height="12"
//     viewBox="0 -2 12 27"
//   >
//     <path
//       id="arrow"
//       data-name="arrow"
//       d="M13,0,26,11H0Z"
//       transform="translate(11) rotate(90)"
//       fill={linkColor}
//     />
//   </svg>
// )

function SmallCards() {
  return (
    <SmallCard>
      <SmallBox>
        
          <HorizontalBox>
            <SmartTitle>SmartID <TitleLiner /> </SmartTitle>
            <SmallImage src={passportImage}></SmallImage>
          </HorizontalBox>

          <Description>
            SmartID is a digital passport to authenticate users quickly while
            minimizing data hacks, identity theft and data redundancy.
          </Description>

            <Button>
              <CustomLink
                to={"/"}
                displayText="Learn More"
                linkColor="#2E50B9"
                arrow
              />  
            </Button>
            {/* <Button>
              <LinkContainer>
                <LabelA >Learn More</LabelA>
                <Arrow linkColor="#2E50B9" />
              </LinkContainer>
            </Button> */}
  
        
      </SmallBox>
      <SmallBox>
        
          <HorizontalBox>        
            <SmartTitle>Financial Platform <TitleLiner /></SmartTitle>
            <SmallImage src={bankImage}></SmallImage>
          </HorizontalBox>

          <Description>
            Financial institutions will be able to utilize the combination of
            Smartchain™ and SmartID to generate better A.I. business decisions
            to optimize efficiency.
          </Description>
      
          <Button>
            <CustomLink
              to={"/"}
              displayText="Learn More"
              linkColor="#2E50B9"
              arrow
            />  
          </Button>
          {/* <Button>
            <LinkContainer>
              <LabelA >Learn More</LabelA>
              <Arrow linkColor="#2E50B9" />
            </LinkContainer>
          </Button> */}

      </SmallBox>
    </SmallCard>
  )
}
export default SmallCards
