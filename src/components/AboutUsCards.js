import React from "react"
import styled from "styled-components"
// import TitleLiner from "./titleliner"
import {theme} from "../theme/GlobalStyles.js"
import cloudImage from "../../Cloud Image.png"
import head from "../../Head Image.png"


const AboutUsContainer = styled.div`
  padding: 2em;
  margin-top: 22em;
  @media (max-width: ${theme.mobile}){
    display: none;
  }
`;
const CardContainer = styled.div`
  text-align: left;
  width: 45%;
  padding: 2.5em;
  background-color: #fff;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  
`;

const CloudImageContainer = styled.div`
width: 20rem;
margin-left: 3em;
@media (max-width: ${theme.mobile}){
    display: none;
  }
`;

const HeadImageContainer = styled.div`
width: 20rem;
margin-right: 3em;
@media (max-width: ${theme.mobile}){
    display: none;
  }
`;

const HeaderTitle = styled.div`
  font-family: "Myriad Pro Light";
  font-size: 1.75em;
`;

const RowContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const Text = styled.p`
  padding-top: 3rem;
`
const BlueLine = styled.div`
    width: auto;
    height: 4px;
    background: rgb(8,77,161);
    background: linear-gradient(90deg, ${theme.logoDarkBlue} 0%, ${theme.logoLightBlue} 54%, #fff 100%);
`;

const AdaptableCloud = (props) => (
    <CardContainer>
        <HeaderTitle>Adaptable Cloud Infrastructure</HeaderTitle>
        <BlueLine />
        <Text>Smartchain adapts to legacy systems and 
        integrates into both cloud and physical computing 
        architecture.
        </Text>
    </CardContainer>
)

const HowItWorks = (props) => (
  <CardContainer>
        <HeaderTitle>How It Works?</HeaderTitle>
        <BlueLine />
        <Text>Smartchain can route data more efficiently and 
        securely through smart cognitive packets, and it 
        employs collaborative AI to analyze data and 
        autonomize processes.
        </Text>
  </CardContainer>
)

const Card1 = (props) => (
    <RowContainer>
      <AdaptableCloud />
      <CloudImageContainer>
        <img src={cloudImage} alt="Cloud image" style={{maxWidth: "100%"}} />
      </CloudImageContainer>
    </RowContainer>
)

const Card2 = (props) => (
    <RowContainer>
      <HeadImageContainer>
        <img src={head} alt="Head image" style={{maxWidth: "100%"}} />
      </HeadImageContainer>
      <HowItWorks />
    </RowContainer>
)

const AboutUsCards = (props) => (
  <AboutUsContainer>
    <Card1 />
    <Card2 />
  </AboutUsContainer>
)

export default AboutUsCards