import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image"
import { theme } from "../theme/GlobalStyles"
import productShow from "../images/products_smartID.png";
import greenIcon from "../images/products_verified.svg"
import TitleLiner from "../components/titleliner.jsx"


const Box = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  box-align: center;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  width: 50rem;
  margin: 0 auto 5rem auto;
  @media (max-width: ${theme.mobile}) {
    width: 100%;
    margin-left: 0rem;
  }
`;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: "row";
  position: relative;
  padding: 3rem 3rem;
`

const verticalBox = styled.div`
  display: flex;
  flex-direction: column;
`

const SmartTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
`
const SmartDescription = styled.div`
  margin-top: 2rem;
`
const Boldword = styled.p`
  font-family: 'Myriad Pro Semibold';
  display: inline;
`
const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${theme.tablet}) {
    flex-direction: column-reverse;
  }
`
const ProductImage = styled.img`
  margin: 2rem 2rem;
  height: 30rem;

  @media (max-width: ${theme.tablet}) {
    margin: 2.5em auto;
    // width: 35%;

  }
`
const BenefitsTitle = styled.div`
  margin-top: 8rem;
  font-family: 'Myriad Pro Semibold';
  @media (max-width: ${theme.tablet}) {
    margin-left: 2rem;
    margin-top: 2.5rem;
  }
  @media (max-width: ${theme.mobile}) {
    margin-left: 0;
  }
`
const BenefitsDescriptions = styled.div`
  margin: 1em 2.4em 0em 0em;
  @media (max-width: ${theme.tablet}) {
    margin-left: 2rem;
  }
  @media (max-width: ${theme.mobile}) {
    margin-left: 0;
  }
`
const AdditionalDescription = styled.div`
  margin-top: 2.5em;
`
const GreenIcon = styled.img`
  width: 1.2rem;
  margin-right: 0.2rem;
`

function SmartIDCard() {
  return (
    <Box id="smartBox">
      <Container>
        <verticalBox>
          <SmartTitle>
            SmartID 
            <TitleLiner />
          </SmartTitle>
          
          <SmartDescription>
            <p><Boldword>SmartID is a digital passport </Boldword>to authenticate
            users quickly while minimizing data hacks, identity theft and data
            redundancy.</p>
      
            <p>SmartID will be used to verify the identity of users across an
            assortment of platforms.</p>
          </SmartDescription>

          <Horizontal>
            <ProductImage src={productShow} alt="smartID"></ProductImage>

            <verticalBox>
              <BenefitsTitle>Benefits</BenefitsTitle>
              <BenefitsDescriptions>
                <li>Platforms only have information while using site reducing risk
                of hacking</li>
                <li>Eliminates need for traditional login systems</li>
                <li>Users can control what information each platform can see</li>
              </BenefitsDescriptions>
  
              <AdditionalDescription>
                <GreenIcon src={greenIcon}></GreenIcon>
                More secure than a traditional SSO (single sign on)
              </AdditionalDescription>

            </verticalBox>
          </Horizontal>
        </verticalBox>
      </Container>
    </Box>
  )
}
export default SmartIDCard