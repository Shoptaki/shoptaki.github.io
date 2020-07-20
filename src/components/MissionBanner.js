import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles.js"
//import { BrowserRouter as Router} from "react-router-dom";
import SmartchainBanner from "./particleComponent";

const Container = styled.div`
  padding: 0 0 0 0;
  height: 50rem;
  width: 100%;
  margin-bottom: 20rem;
  page-break-after: always; 
  overflow: hidden;
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
`;

const Title = styled.p`
  width: 100%;
  font-family: "Helvetica Neue";
  font-weight: bold;
  font-size: 2rem;
  color: #1071BB;
  margin-top: 4em;
  margin-bottom: 3em;
  line-height: 1.5em;

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



function MissionBanner() {
    return (
      
        <Container>
          <SmartchainBanner />
             <TextContainer> 
                <Title>Our Mission</Title>
                <div>At Shoptaki, we are taking the concept of blockchain to the next level, which will revolutionize the way we 
                handle data and harness the power of A.I. We believe that people have the right to own their data - in a future 
                where everything is connected, streamlined, and autonomous. The belief that technology can benefit humanity, 
                not replace it, is at the core of Shoptaki. Here at Shoptaki, our mission is to help make the world a better, more 
                efficient, and safer place for all.
                </div>
             </TextContainer>
        </Container>
      
    );
  }
  

  export default MissionBanner