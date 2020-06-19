import React from "react"
import styled from "styled-components"
import autonomous from "../../autonomous.png";
import efficiency from "../../efficiency.png";
import security from "../../security.png";
import {theme} from "../theme/GlobalStyles.js"


const CardContainer = styled.div`
  width: 22rem;
  text-align: center;
  padding: 5rem;
  text-shadow: 1.5px 1.5px #EAEAEA;

`;

const ImageContainer = styled.div`
width: 100%
padding: flex;
`

const Autonomous = (props) => (
  <ImageContainer>
  <CardContainer>
  <img src={autonomous} alt="autonomous image" />
    <h2>AUTONOMY</h2>
    <div>Continuously optimize data processes to meet individual 
      business needs and regulatory compliance.</div>
  </CardContainer>
  </ImageContainer>
  )
  

const Efficiency = (props) => (
  <div>
  <CardContainer>
    <div 
    style={{
        paddingRight: '2rem'
    }}>
    <img src={efficiency} alt="efficiency image" />
    </div>
    <h2>EFFICIENCY</h2>
    <div>Resolve virtually any user validation, analysis, 
      or prediction task within fractions of a second.</div>
  </CardContainer>
  </div>
  )

  const Security = (props) => (
    <div>
    <CardContainer>
    <img src={security} alt="security image" />
      <h2>SECURITY</h2>
      <div>Ensure safe and future-proof data transactions 
        using quantum resistant cryptography.</div>
    </CardContainer>
    </div>
    )
  
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

  const Card = (props) => (
    <BigContainer>
      <div><Autonomous></Autonomous></div><div><Efficiency></Efficiency></div><div><Security></Security></div>
    </BigContainer>
  )

  export default Card


