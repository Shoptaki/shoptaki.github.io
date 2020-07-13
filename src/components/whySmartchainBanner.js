import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles.js"
//import { BrowserRouter as Router} from "react-router-dom";
import SmartchainBanner from "./particleComponent";

const Container = styled.div`
  padding: 0 0 0 0;
  height: 36rem;
  width: 100%;
  page-break-after: always; 
  
  @media (max-width: ${theme.mobile}) {
    flex-direction: column;
    height: 48.5rem;
  }
`

const TextContainer = styled.div`
  padding-left:8rem;
  padding-right:5rem;
  padding-bottom:5rem;  
  width: 100%;
  height: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  @media (max-width: ${theme.mobile}) {
    padding: 0 3rem;
  }
`

const Title = styled.h1`
  margin-top:12rem;
  width: 100%;
  font-weight: bold;
  font-size: 2rem;
  color: #8EB4D0;

  display: inline-block;
  flex-wrap: wrap;
  @media (max-width: ${theme.mobile}) {
    flex-wrap: wrap;
    margin-top: 10rem;
    width: 100%;
    font-size: 2rem;
    padding-right: 3rem;
  }
`
const Subtitle = styled.h2`
  font-size: 2rem;
  width: 100%;
  color: #3F9CE5;

  display: inline-block;
  overflow-wrap: break-word;
  word-wrap: break-word;
  flex-wrap: wrap;
  @media (max-width: ${theme.mobile}) {
    overflow-wrap: break-word;
    word-wrap: break-word;
    flex-wrap: wrap;
    max-width: 22rem;
    font-size: 2rem;
    margin-top:1em;
  }
`
const Description = styled.p`
  width: 100%;
  font-weight: bold;
  font-size: 2rem;
  color: #1071BB;
  margin-top:-0.2em;
  line-height:1.5em;

  display: inline-block;
  /* wrap text */
  overflow-wrap: break-word;
  word-wrap: break-word;
  flex-wrap: wrap;
  @media (max-width: ${theme.mobile}) {
    max-width: ${theme.mobile};
    /* wrap text */
    overflow-wrap: break-word;
    word-wrap: break-word;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
`

function WhySmartchainBanner() {
    return (
      
        <Container>
          <SmartchainBanner />
             <TextContainer> 
                <Title>We are not blockchain.</Title>
                <Subtitle>We are the future.</Subtitle>
                <Description>We are a system where collaborative AI meets quantum resistance security.</Description>      
             </TextContainer>
        </Container>
      
    );
  }
  

  export default WhySmartchainBanner