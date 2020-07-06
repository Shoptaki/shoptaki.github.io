import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image"

import { useStaticQuery, graphql } from 'gatsby'
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { GlobalStyles, theme } from "../theme/GlobalStyles"

import CustomLink from "./customlink"
import "./styles.css"; // from React Transition Group

import productShow from "../images/ProductImage.svg";
import greenIcon from "../images/greenicon.svg"
import financialImage from "../images/financialimage.svg"
import underlinerBlue from "../images/underliner-blue.svg"

const Box = styled.div`
  display: flex;
  flex-direction: 'row';
  background-color:white;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  width: 50rem;
  margin: auto;
  marign-top:20em;
  margin-bottom:20em;

  @media (max-width: ${theme.mobile}) {
    width: 100%;
    margin-left: 0rem;
  }
`;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: 'row';
  position: relative;
  height:55rem;
  @media (max-width: ${theme.mobile}) {
    flex-direction: column-reverse;
  }
`

const SmartTitle = styled.div`
    font-weight:bold;
    font-size:25px;
    margin-left:1.8em;
    margin-top:3em;
    margin-bottom:0.5em;
`
const FinancialLiner = styled.img`
    width:300px;
    margin-left: 1.3em;
`
const verticalBox=styled.div`
    display: flex;
    flex-direction: 'column';
`
const SmartDescription1=styled.div`
    margin-left:2.4em;
    font-weight:bold;
`
const SmartDescription2=styled.div`
    margin-left:2.4em;
    margin-top:1em;
`
const HorizontalBox = styled.div`
   display: flex;
   flex-direction: 'row';
`

const BenefitsTitle = styled.div`
   margin-top:2rem;
  margin-left:2.4em;
`
const BenefitsDescriptions = styled.div`
    margin-top:0.5rem;
    margin-left:2.7em;
    font-size:16px;
    line-height:15px;
`
const AdditionalDescription = styled.div`
    margin-top:1.5rem;
`
const GreenIcon = styled.img`
    margin-top:1.5rem;
    width:2.5%;
    margin-left:2.4em;
    margin-right:0.2rem;
`
const FinancialImage = styled.img`
   
   margin-left:1.2em;
   height:23rem;
   width:45rem;
`
function FinancialPlatformCard(props) {

  return (
      <Box >
        <Container >
          <verticalBox>
            <SmartTitle>Financial Platform</SmartTitle>
            <FinancialLiner src={underlinerBlue}></FinancialLiner>
            <SmartDescription1>Finance Smartchain ID allows for transactional communication to be secure by being decentralized.</SmartDescription1>
<SmartDescription2>Smartchain tracks data across different ecosystems to prevent fraud and automate certain processes.  </SmartDescription2>
          <BenefitsTitle>Benefits</BenefitsTitle>
         <BenefitsDescriptions>-  Limit Volume of Data </BenefitsDescriptions>
         <BenefitsDescriptions>-  Reduce Redundancy </BenefitsDescriptions>
         <BenefitsDescriptions>-  Verify Validity of Users </BenefitsDescriptions>
          <BenefitsDescriptions>-  Streamline transactions while automating KYC, AML, and regulation and compliance. </BenefitsDescriptions>
        <BenefitsDescriptions>-  Embeds each transaction with the SmartID to track transaction origins, prevent money laundering, etc…
 </BenefitsDescriptions>
        <HorizontalBox>
        <GreenIcon src={greenIcon}></GreenIcon>
        <AdditionalDescription>More secure than a traditional SSO (single sign on)</AdditionalDescription>
        </HorizontalBox>

       <FinancialImage src={financialImage}></FinancialImage>
        
          </verticalBox>
          
         

        </Container>

     

      </Box>
          )
          }
          export default FinancialPlatformCard
