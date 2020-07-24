import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles.js"
import TitleLiner from "../components/TitleLiner"

const UniversalBenefitsContainer = styled.div`
  padding: 2.5em;
  margin: 5em;
  background-color: #fff;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  @media (max-width: ${theme.mobile}){
    margin: 0;
  }
`;

const TitleContainer = styled.div`
font-size: 2em;
text-align: left;
padding-bottom: 1em;
`;

const TextContainer = styled.div`
display: flex;
flex-direction: row;
@media (max-width: ${theme.mobile}){
    flex-direction: column;
  }
`;

const InnerContainer = styled.ul`
text-align: left;
padding-right: 3em;
margin-bottom: 0;
`;
const Pt = styled.li`
list-style-position: outside;
`
const UniversalBenefits = (props) => (
    <UniversalBenefitsContainer>
        <TitleContainer>
            Universal Benefits
            <TitleLiner color="blue" />
        </TitleContainer>
        <TextContainer>
            <InnerContainer>
                <Pt>
                Data Centralization and Ownership Decentralization over multiple industries
                </Pt>
                <Pt>
                Real-time data streaming and analytics
                </Pt>
                <Pt>
                Distributed Learning over multiple nodes
                </Pt>
                <Pt>
                Collabortive Ai analazying and automating different types of tasks/proccess
                </Pt>
            </InnerContainer>
            <InnerContainer>
                <Pt>
                Real-time reporting and KPI measurements 
                </Pt>
                <Pt>
                Ubiquitous Machine Learning & Collaborative A.I.  solutions 
                </Pt>
                <Pt>
                Accessibility and connectivity with other Blockchain ecosystems
                </Pt>
            </InnerContainer>
        </TextContainer>
    </UniversalBenefitsContainer>
)

export default UniversalBenefits