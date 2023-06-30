import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"
import passportImage from "../images/products_passport.svg"
import bankImage from "../images/products_bank.png"
import CustomLink from "./CustomLink.jsx"
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
    padding-top: 40rem;
  }

  @media (max-width: ${theme.mobile}) {
    padding-top: 40rem;
  }
`

const SmallBox = styled.div`
  background-color: white;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  max-width: 27rem;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  height: 21.5rem;
  position: relative;
  
  @media (max-width: ${theme.tablet}) {
    margin-bottom: 3em;
    margin-top: 0em;
    width: auto;
    height: 26rem;
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
  line-height: 2.5;
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
  max-width: 160px;
  font-size: 18px;
  font-weight: bold;
  padding-bottom:5px;
  padding-left:8px;
  margin: auto auto 0 auto;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  transition: all 0.5s ease-in-out;
  transform: scale(1);

  &:focus {
    outline: none;
    user-select: none;
  }

  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.1);
  }
  
`;

const ComingSoon = styled.div`
  position: absolute;
  top: -6px;
  left: -6px;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ComingSoonLabel = styled.div`
  width: 230px;
  height: 20px;
  transform: translate(-50%, -50%) rotate(-45deg);
  top: 37%;
  left: 37%;
  position: absolute;
  text-align: center;
  padding: 10px 0;
  background: #084DA1;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-top: 4px solid #ea8101;
  border-bottom: 4px solid #ea8101;
  box-shadow: 0.2rem 0.2rem 0.4rem #999999;
`;
const ComingSoonInner = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const FisrtCorner = styled.div`
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 50px solid #173e6c;
  position: absolute;
  top: 0%;
  width: 185px;
  left: 0%;
`;
const SecondCorner = styled.div`
  width: 0;
	height: 0;
	border-left: 33px solid transparent;
	border-right: 26px solid transparent;
	border-bottom: 38px solid #173e6c;
  position: absolute;
  bottom: 0%;
  left: 0;
  width: 177px;
`;
const SmallBoxElements = styled.div`
  position: relative;
  margin: 5rem 4rem;
  position: relative;
  @media (max-width: ${theme.tablet}) {
    margin-bottom: 3em;
    margin-top: 0em;
  }
`;
const RibbinContainer = styled.div`
  position: absolute;
  height: 45px;
  width: 235px;
  border-bottom: 4px solid #ea8101;
  border-top: 4px solid #ea8101;
  transform: rotate(-45deg) translate(-50%,-50%);
  top: -7%;
  left: 7%;
  @media (max-width: 1200px) {
    top: -6.9%;
    left: 9%;
  }
  @media (max-width: ${theme.tablet}) {
    top: -5.6%;
    left: 7%;
  }
  @media (max-width: ${theme.mobile}) {
    display: none;
  }
`;
const RibbinInnerCon = styled.div`
  position: relative;
  height: 100%;
`;


function SmallCards( {scrollHandler} ) {
  return (
    <SmallCard>
      <SmallBoxElements>
        <RibbinContainer>
          <RibbinInnerCon>
            <FisrtCorner>
            </FisrtCorner>
            <SecondCorner>
            </SecondCorner>
          </RibbinInnerCon>
        </RibbinContainer>
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
              linkcolor="#2E50B9"
              arrow
            />
          </Button>
          <ComingSoon>
            <ComingSoonInner>
              <ComingSoonLabel>
                Coming Soon
              </ComingSoonLabel>
            </ComingSoonInner>
          </ComingSoon>
        </SmallBox>
      </SmallBoxElements>
      <SmallBoxElements>
        <RibbinContainer>
          <RibbinInnerCon>
            <FisrtCorner>
            </FisrtCorner>
            <SecondCorner>
            </SecondCorner>
          </RibbinInnerCon>
        </RibbinContainer>
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
              linkcolor="#2E50B9"
              arrow
            />  
          </Button>
          <ComingSoon>
            <ComingSoonInner>
              <ComingSoonLabel>
                Coming Soon
              </ComingSoonLabel>
            </ComingSoonInner>
          </ComingSoon>
        </SmallBox>
      </SmallBoxElements>
    </SmallCard>
  )
}
export default SmallCards
