import React from "react"
import styled from "styled-components"
import TitleLiner from "./titleliner"
import {theme} from "../theme/GlobalStyles.js"
import cloudImage from "../../Cloud Image.png"
import head from "../../Head Image.png"

const CardContainer = styled.div`
  text-align: left;
  padding: 2.5em;
  margin: 3em;
  box-shadow: -.3em 0.5em 1em #EAEAEA;
  @media (max-width: ${theme.mobile}){
    display: none;
  }
`;

const CloudImageContainer = styled.div`
width: 100%;
min-width: 17em;
padding-left: 2em;
padding-right: 3em;
@media (max-width: ${theme.mobile}){
    display: none;
  }
`;

const HeadImageContainer = styled.div`
width: 120%;
min-width: 20em;
padding-left: 3em;
padding-right: 6em;
@media (max-width: ${theme.mobile}){
    display: none;
  }
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

const RowContainer = styled.div`
max-width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const AboutUsContainer = styled.div`
padding: 2em;
`;

const AdaptableCloud = (props) => (
    <CardContainer>
        <div>
        <HeaderTitle>Adaptable Cloud Infrastructure</HeaderTitle>
        <Line>
            <TitleLiner color={'blue'} size = {400} />
        </Line>
        </div>
        <div>Smartchain adapts to legacy systems and 
        integrates into both cloud and physical computing 
        architecture.
        </div>
    </CardContainer>
)

const HowItWorks = (props) => (
  <CardContainer>
        <div>
        <HeaderTitle>How It Works?</HeaderTitle>
        <Line>
            <TitleLiner color={'blue'} size = {400} />
        </Line>
        </div>
        <div>Smartchain can route data more efficiently and 
        securely through smart cognitive packets, and it 
        employs collaborative AI to analyze data and 
        autonomize processes.
        </div>
    </CardContainer>
)

const Card1 = (props) => (
  <div>
    <RowContainer>
  <div><AdaptableCloud></AdaptableCloud></div>
  <div>
  <CloudImageContainer>
    <img src={cloudImage} alt="Cloud image" />
    </CloudImageContainer>
  </div>
  </RowContainer>
  </div>
)

const Card2 = (props) => (
  <div>
    <RowContainer>
  <div>
  <HeadImageContainer>
    <img src={head} alt="Head image" />
    </HeadImageContainer>
  </div>
  <div><HowItWorks></HowItWorks></div>
  </RowContainer>
  </div>
)

const AboutUsCards = (props) => (
  <AboutUsContainer>
  <div><Card1></Card1></div>
  <div><Card2></Card2></div>
  </AboutUsContainer>
)

export default AboutUsCards