import React from "react"
import styled from "styled-components"
import TitleLiner from "./TitleLiner"
import {theme} from "../theme/GlobalStyles.js"
import cloudImage from "../images/Cloud Image.png"
import head from "../images/Head Image.png"

const AboutUsContainer = styled.div`
  padding: 2em;
  margin-top: 18rem;
  @media (min-width: ${theme.mobile}){
    display: none;
  }
`;
const CardContainer = styled.div`
  padding: 2.5em;
  margin: 2em 0.5em;
  background-color: #fff;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
const TextContainer = styled.div`
text-align: center;
padding-top: 3rem;
`;
const CloudImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 20em;
`;
const HeadImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderTitle = styled.div`
  font-family: "Myriad Pro Light";
  font-size: 1.75em;
`;

const AdaptableCloud = (props) => (
    <CardContainer>
        <CloudImageContainer>
          <img src={cloudImage} alt="Cloud image" style={{maxWidth: "100%"}}  />
        </CloudImageContainer>
        <TextContainer>
          <HeaderTitle>Adaptable Cloud Infrastructure</HeaderTitle>
          <TitleLiner color="blue" />
          <p>Smartchain adapts to legacy systems and 
          integrates into both cloud and physical computing 
          architecture.
          </p>
        </TextContainer>
    </CardContainer>
)

const HowItWorks = (props) => (
  <CardContainer>
      <HeadImageContainer>
        <img src={head} alt="Head image" style={{maxWidth: "100%"}} />
      </HeadImageContainer>
      <TextContainer>
        <HeaderTitle>How It Works?</HeaderTitle>
        <TitleLiner color="blue" />
        <p>Smartchain can route data more efficiently and 
        securely through smart cognitive packets, and it 
        employs collaborative AI to analyze data and 
        autonomize processes.
        </p>
      </TextContainer>
  </CardContainer>
)


const AboutUsCardsMobile = (props) => (
  <AboutUsContainer>
    <AdaptableCloud />
    <HowItWorks />
  </AboutUsContainer>
)

export default AboutUsCardsMobile