import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image"
import { theme } from "../theme/GlobalStyles"
import productShow from "../images/ProductImage.svg";
import greenIcon from "../images/greenicon.svg"
import underlinerBlue from "../images/underliner-blue.svg"

const Box = styled.div`
  display: flex;
  flex-direction: 'row';
  background-color:white;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  width: 50rem;
  margin: auto;
  margin-top:20em;
  margin-bottom:10em;

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
  height:50rem;
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


const SmartLiner = styled.img`
    width:300px;
    margin-left: 1.3em;
`


const verticalBox=styled.div`
    display: flex;
    flex-direction: 'column';
`
const SmartDescription1=styled.div`
    margin-left:2.4em;
    
`
const Boldword=styled.div`
    font-weight:bold;
    display:inline;
    margin-right:0.3em;
`
const SmartDescription2=styled.div`
    margin-left:2.4em;
    margin-top:1em;
`
const HorizontalBox = styled.div`
   display: flex;
   flex-direction: 'row';
`
const ProductImage = styled.img`
   margin-top:2rem;
   margin-left:3em;
   height:30rem;
   width:20rem;
`
const BenefitsTitle = styled.div`
   margin-top:4rem;
`
const BenefitsDescriptions = styled.div`
    margin-top:1rem;
`
const AdditionalDescription = styled.div`
    margin-top:3rem;
`
const GreenIcon = styled.img`
    margin-top:2.9rem;
    width:5%;
    margin-right:0.2rem;
`

function SmartIDCard(props) {

  return (
      <Box >
        <Container >
          <verticalBox>
            <SmartTitle>SmartID</SmartTitle>
            <SmartLiner  src={underlinerBlue}></SmartLiner>
            <SmartDescription1><Boldword>SmartID is a digital passport</Boldword>to authenticate users quickly while minimizing data hacks, 
identity theft and data redundancy.</SmartDescription1>
<SmartDescription2>SmartID will be used to verify the identity of users across an assortment of platforms. </SmartDescription2>
          
          <HorizontalBox>
          <ProductImage src={productShow}></ProductImage>
          <verticalBox>
         <BenefitsTitle>Benefits</BenefitsTitle>
         <BenefitsDescriptions>- Platforms only have information while using site reducing risk of hacking </BenefitsDescriptions>
         <BenefitsDescriptions>- Eliminates need for traditional login systems</BenefitsDescriptions>
         <BenefitsDescriptions>- Users can control what information each platform can see
        </BenefitsDescriptions>
       
        <HorizontalBox>
        <GreenIcon src={greenIcon}></GreenIcon>
        <AdditionalDescription>More secure than a traditional SSO (single sign on)</AdditionalDescription>
        </HorizontalBox>
        <AdditionalDescription>Content to add:</AdditionalDescription>

        <BenefitsDescriptions>Identity profiling from KYC, Credit Risk, Fraud risk, etc..</BenefitsDescriptions>
        </verticalBox>
         </HorizontalBox>
          </verticalBox>
          
         

        </Container>

     

      </Box>
          )
          }
          export default SmartIDCard
