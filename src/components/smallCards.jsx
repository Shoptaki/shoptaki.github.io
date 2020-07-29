import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"
import passportImage from "../images/products_passport.svg"
import bankImage from "../images/products_bank.png"
import CustomLink from "./customlink.jsx"
import TitleLiner from "./titleliner.jsx"

const SmallCard = styled.div`
  padding-top: 30rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis: 10%;

  @media (max-width: ${theme.tablet}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${theme.mobile}) {
    padding-top: 25rem;
  }
`

const SmallBox = styled.div`
  background-color: white;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  margin: 5em 4em;
  max-width: 27rem;
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
  max-width: 145px;
  font-size: 18px;
  font-weight: bold;
  padding-bottom:5px;
  padding-left:8px;
  margin: auto;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;

  &:focus {
    outline: none;
    user-select: none;
  }
  
`

function SmallCards( {scrollHandler} ) {
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

            <Button onClick={() => scrollHandler("SID")}>
              <CustomLink
                clickHandler={e =>  e.preventDefault() }
                displayText="Smart ID"
                linkColor="#2E50B9"
                arrow
              />  
            </Button>

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
      
          <Button onClick={() => scrollHandler("FPC")}>
            <CustomLink
              clickHandler={e => e.preventDefault()}
              displayText="Financial App"
              linkColor="#2E50B9"
              arrow
            />  
          </Button>

      </SmallBox>
    </SmallCard>
  )
}
export default SmallCards
