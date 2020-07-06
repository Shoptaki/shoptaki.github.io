import React from "react"
import styled from "styled-components"
import autonomous from "../images/resized autonomy.png";
import efficiency from "../images/transparent resized clock.png";
import security from "../images/resized security.png";
import {theme} from "../theme/GlobalStyles.js"


const CardContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  text-shadow: 0.1rem 0.1rem #EAEAEA;

  @media (max-width: ${theme.mobile}){
    margin-bottom: 4rem;
  } 

`;

const TextContainer = styled.div`
  margin: auto;
  width: 60%;
`;

const TitleContainer = styled.div`
display: flex;
margin: auto;
width: 70%;
flex-wrap: nowrap;
justify-content: center;
`;

const BigContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: ${theme.mobile}){
    flex-direction: column;
    justify-content: space-between;
  } 
`;

const Autonomous = (props) => (
  <div>
  <CardContainer>
  <div>
  <img src={autonomous} alt="Autonomous Data" />

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
    <img src={efficiency}  alt="Effecient Validation" />
    </div>
    <TitleContainer><h2>EFFICIENCY</h2></TitleContainer>
    <TextContainer>Resolve virtually any user validation, analysis, 
      or prediction task within fractions of a second.</TextContainer>
    </div>
  </CardContainer>
  )

  const Security = (props) => (
    <div >
    <CardContainer style={{"margin-right": "50px"}}>
    <div>
    <img src={security} alt="Quantum Secure" />
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
