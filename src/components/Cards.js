import React from "react"
import styled from "styled-components"
import autonomous from "../../resized autonomy.png";
import efficiency from "../../transparent resized clock.png";
import security from "../../resized security.png";
import {theme} from "../theme/GlobalStyles.js"


const CardContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  text-shadow: 0.1rem 0.1rem #EAEAEA;

`;

const TextContainer = styled.div`
width: 100%;
`;

const TitleContainer = styled.div`
width: 100%;
`;

const BigContainer = styled.div`
max-width: 100%;
display: flex;
flex-direction: row;
justifyContent: center;
alignContent: center;
@media (max-width: ${theme.mobile}){
  flex-direction: column;
} 
`;

const Autonomous = (props) => (
<div style={{
          paddingLeft: 1
      }}>
  <CardContainer>
  <div>
  <img src={autonomous} alt="autonomous image" />

    <TitleContainer><h2>AUTONOMY</h2></TitleContainer>
    <TextContainer>Continuously optimize data processes to meet individual 
      business needs and regulatory compliance.</TextContainer>
    </div>
  </CardContainer>
  </div>
  )


const Efficiency = () => (
  <CardContainer>
    <div>
    <div>
    <img src={efficiency} alt="efficiency image" />
    </div>
    <TitleContainer><h2>EFFICIENCY</h2></TitleContainer>
    <TextContainer>Resolve virtually any user validation, analysis, 
      or prediction task within fractions of a second.</TextContainer>
    </div>
  </CardContainer>
  )

  const Security = (props) => (
    <div style={{
      paddingRight: 3
    }}>
    <CardContainer>
    <div>
    <img src={security} alt="security image" />
      <TitleContainer><h2>SECURITY</h2></TitleContainer>
      <TextContainer>Ensure safe and future-proof data transactions 
        using quantum resistant cryptography.</TextContainer>
      </div>
    </CardContainer>
    </div>
    )

  const Card = (props) => (
    <BigContainer>
      <div><Autonomous></Autonomous></div><div><Efficiency></Efficiency></div><div><Security></Security></div>
    </BigContainer>
  )

  export default Card
