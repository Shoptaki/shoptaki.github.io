import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"
import passportImage from "../images/passport.svg"
import bankImage from "../images/bank.png"

const SmallCard = styled.div`
  padding-left: 14%;
  padding-right: 14%;
  margin-bottom: 1rem;
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
  margin-top: 5em;
  margin-bottom: 5em;
  margin-left: 0rem;
  box-align: center;
  width: 28rem;
  height:28rem;
  @media (max-width: ${theme.tablet}) {
    margin-bottom: 3em;
    margin-top: 0em;
    width: 25rem;
  }
`
const SmallImage1 = styled.img`
  width: 31%;
  margin-left: 5rem;
  margin-top: 2rem;
  @media (max-width: ${theme.tablet}) {
    margin-left: 4rem;
  }
`
const SmallImage2 = styled.img`
  width: 28%;
  margin-left: 5rem;
  margin-top: 2rem;
  @media (max-width: ${theme.tablet}) {
    margin-left: 4rem;
  }
`

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 25rem;
  width: 25rem;
  padding-right: 1rem;
  @media (max-width: ${theme.mobile}) {
    width: 22rem;
    height: 25em;
    
  }
`

const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0em;
  padding-right: 0rem;
`

const SmartTitle1 = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-left: 2em;
  margin-top: 3em;
  margin-bottom: 0.5em;
`
const SmartTitle2 = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-left: 2em;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
`

const SmartLiner = styled.div`
  width: 8rem;
  height: 4px;
  margin-left: 3em;
  background: rgb(8, 77, 161);
  background: linear-gradient(
    90deg,
    ${theme.logoDarkBlue} 0%,
    ${theme.logoLightBlue} 54%,
    #fff 100%
  );
`

const SmartDescription1 = styled.div`
  margin-left: 3em;
  margin-right: 0em;
  margin-top:1.5rem;
  font-size: 16px;
  height: 8rem;
  @media (max-width: ${theme.mobile}) {
    margin-top:2rem;
  }

`

const HorizontalBox = styled.div`
  display: flex;
  flex-direction: "row";
`


const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  height: 45px;
  width:120px;
  font-size: 18px;
  font-weight: bold;
  padding-bottom:5px;
  padding-left:8px;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  
`
const ButtonContainer = styled.div`
  text-align: center;
  position: absolute;
  
  bottom: 2rem;
  left: 9rem;
  @media (max-width: ${theme.mobile}) {
    text-align: center;
    bottom:2rem;
    left: 8rem;
  }
`

const LinkContainer = styled.div`
  width: 100%;
  display: inline-block;
  padding-top: 1rem;
`


// link hover effect
const LabelA = styled.div`
  margin-top: -0.5rem;
  margin-left:3px;
  margin-right:2px;
  position: relative;
  color: ${props => props.linkColor || "#2E50B9"};
  text-decoration: none;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${props => props.linkColor || "#2E50B9"};
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 0.5s ease-in-out 0s;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: 0% 0%;
  }
`
const Arrow = ({ linkColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 -2 12 27"
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

function SmallCards(props) {
  return (
    <SmallCard>
      <SmallBox>
        <Container>
          <HorizontalBox>
            <VerticalBox>
              <SmartTitle1>SmartID</SmartTitle1>
              <SmartLiner></SmartLiner>
            </VerticalBox>
            <SmallImage1 src={passportImage}></SmallImage1>
          </HorizontalBox>

          <SmartDescription1>
            SmartID is a digital passport to authenticate users quickly while
            minimizing data hacks, identity theft and data redundancy.
          </SmartDescription1>
          <ButtonContainer>
            <Button>
              <LinkContainer>
                <HorizontalBox>
                <LabelA >Learn More</LabelA>
                <Arrow linkColor="#2E50B9" />
                </HorizontalBox>
              </LinkContainer>
            </Button>
          </ButtonContainer>
        </Container>
      </SmallBox>
      <SmallBox>
        <Container>
          <HorizontalBox>
            <VerticalBox>
              <SmartTitle2>Financial Platform</SmartTitle2>
              <SmartLiner></SmartLiner>
            </VerticalBox>
            <SmallImage2 src={bankImage}></SmallImage2>
          </HorizontalBox>
          <SmartDescription1>
            Financial institutions will be able to utilize the combination of
            Smartchain™ and SmartID to generate better A.I. business decisions
            to optimize efficiency.
          </SmartDescription1>
          <ButtonContainer>
            <Button>
              <LinkContainer>
              <HorizontalBox>
                <LabelA >Learn More</LabelA>
                <Arrow linkColor="#2E50B9" />
                </HorizontalBox>
              </LinkContainer>
            </Button>
          </ButtonContainer>
        </Container>
      </SmallBox>
    </SmallCard>
  )
}
export default SmallCards
