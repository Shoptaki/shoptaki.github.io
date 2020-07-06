import React from "react"
import styled from "styled-components"
import TitleLiner from "./titleliner"
import {theme} from "../theme/GlobalStyles.js"
import cloudImage from "../../Cloud Image.png"
import head from "../../Head Image.png"

const CardContainer = styled.div`
  padding: 2.5em;
  margin: 3em;
  box-shadow: -.3em 0.5em 1em #EAEAEA;
  display: flex;
  flex-direction: column;
    justify-content: center;
    align-items: center;
  @media (min-width: ${theme.mobile}){
    display: none;
  }
`;

const TextContainer = styled.div`
text-align: center;
`;

const CloudImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
max-width: 20em;
`;

const HeadImageContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Line = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
`;

const HeaderTitle = styled.div`
  font-family: "Myriad Pro Light";
  font-size: 1.75em;
`;


const AboutUsContainer = styled.div`
padding: 2em;
`;

const AdaptableCloud = (props) => (
    <CardContainer>
        <div>
        <CloudImageContainer>
        <img src={cloudImage} alt="Cloud image" />
        </CloudImageContainer>
        <TextContainer>
        <HeaderTitle>Adaptable Cloud Infrastructure</HeaderTitle>
        </TextContainer>
        <Line>
            <TitleLiner color={'blue'} size = {400} />
        </Line>
        </div>
        <TextContainer>
        <div>Smartchain adapts to legacy systems and 
        integrates into both cloud and physical computing 
        architecture.
        </div>
        </TextContainer>
    </CardContainer>
)

const HowItWorks = (props) => (
  <CardContainer>
        <div>
            <div>
        <HeadImageContainer>
        <img src={head} alt="Head image" />
        </HeadImageContainer>
        </div>
        <div>
        <TextContainer>
        <HeaderTitle>How It Works?</HeaderTitle>
        </TextContainer>
        </div>
        <div>
        <Line>
            <TitleLiner color={'blue'} size = {400} />
        </Line>
        </div>
        <TextContainer>
        <div>Smartchain can route data more efficiently and 
        securely through smart cognitive packets, and it 
        employs collaborative AI to analyze data and 
        autonomize processes.
        </div>
        </TextContainer>
        </div>
    </CardContainer>
)


const AboutUsCardsMobile = (props) => (
  <AboutUsContainer>
  <div><AdaptableCloud></AdaptableCloud></div>
  <div><HowItWorks></HowItWorks></div>
  </AboutUsContainer>
)

export default AboutUsCardsMobile