import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles.js"
import TitleLiner from "./TitleLiner"

const UniversalBenefitsContainer = styled.div`
padding: 2.5em;
  margin: 5em;
  background-color: #fff;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
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

const InnerContainer = styled.div`
text-align: left;
padding-right: 3.5em;
`;

const UniversalBenefits = (props) => (
    <UniversalBenefitsContainer>
        <TitleContainer>
            <div>
                Universal Benefits
            </div>
            <div>
            <TitleLiner color="blue" />
            </div>
        </TitleContainer>
        <TextContainer>
            <InnerContainer>
            <div>
            - Data Centralization and Ownership Decentralization over multiple industries
            </div>
            <div>
            - Real-time data streaming and analytics
            </div>
            <div>
            - Distributed Learning over multiple nodes
            </div>
            <div>
            - Collabortive Ai analazying and automating different types of tasks/proccess
            </div>
            </InnerContainer>
            <InnerContainer>
            <div>
            - Real-time reporting and KPI measurements 
            </div>
            <div>
            - Ubiquitous Machine Learning & Collaborative A.I.  solutions 
            </div>
            <div>
            - Accessibility and connectivity with other Blockchain ecosystems
            </div>
            </InnerContainer>
        </TextContainer>
    </UniversalBenefitsContainer>
)

export default UniversalBenefits