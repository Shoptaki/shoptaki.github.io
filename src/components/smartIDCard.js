import React, { useState } from "react";
import styled from "styled-components";
import Img from "gatsby-image"
import { theme } from "../theme/GlobalStyles"
import productShow from "../images/ProductImage.svg";
import greenIcon from "../images/greenicon.svg"


const Box = styled.div`
  display: flex;
  flex-direction: "row";
  background-color: white;
  box-align: center;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  margin-top: 5em;
  margin-bottom: 10em;
  margin-left: 14%;
  margin-right: 14%;
  height: 52em;
  @media (max-width: ${theme.tablet}) {
    height: 78rem;
    margin-left: 9%;
    margin-right: 8%;
  }
`

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: "row";
  position: relative;
  height: 60rem;
  padding-bottom: 3rem;
  @media (max-width: ${theme.tablet}) {
    height: 90em;
    width:25rem;
  }
`

const verticalBox = styled.div`
  display: flex;
  flex-direction: "column";
`

const SmartTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-left: 1.8em;
  margin-top: 3em;
  margin-bottom: 0.5em;
`

const SmartIDLiner = styled.div`
  width: 50%;
  height: 4px;
  margin-left: 2.4em;
  margin-bottom:1.5em;
  background: rgb(8, 77, 161);
  background: linear-gradient(
    90deg,
    ${theme.logoDarkBlue} 0%,
    ${theme.logoLightBlue} 54%,
    #fff 100%
  );
`

const SmartDescription1 = styled.div`
  margin-left: 2.4em;
  margin-right: 2.4em;
`
const Boldword = styled.div`
  font-weight: bold;
  display: inline;
  margin-right: 0.3em;
`
const SmartDescription2 = styled.div`
  margin-left: 2.4em;
  margin-top: 1em;
  margin-right: 2.4em;
`

const HorizontalBox = styled.div`
  display: flex;
  flex-direction: "row";
`
const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${theme.tablet}) {
    flex-direction: column-reverse;
  }
`
const ProductImage = styled.img`
  margin-top: 3.5rem;
  margin-left: 0.5em;
  height: 30rem;
  width: 20rem;
  @media (max-width: ${theme.tablet}) {
    margin-left: -1rem;
    margin-top: 2.5em;
    width: 27rem;
  }
`
const BenefitsTitle = styled.div`
  margin-top: 8rem;
  font-weight: bold;
  margin-right: 2.4em;
  @media (max-width: ${theme.tablet}) {
    margin-left: 2.5em;
    margin-top: 2.5em;
  }
`
const BenefitsDescriptions = styled.div`
  margin-top: 1em;
  margin-bottom: 0em;
  margin-right: 2.4em;
  @media (max-width: ${theme.tablet}) {
    margin-left: 2.5em;
    margin-right: 2.4em;
  }
`
const AdditionalDescription = styled.div`
  margin-top: 2.9rem;
  @media (max-width: ${theme.tablet}) {
    margin-left: 2.5em;
    margin-top: 2.5em;
    margin-right: 2.4em;
  }
`
const GreenIcon = styled.img`
  margin-top: 2.9rem;
  width: 1.2rem;
  margin-right: 0.2rem;
  @media (max-width: ${theme.tablet}) {
    margin-left: 2.5em;
    margin-right: -2em;
    margin-top: 2.5em;
  }
`

function SmartIDCard(props) {
  return (
    <Box id="smartBox">
      <Container>
        <verticalBox>
          <SmartTitle>SmartID</SmartTitle>
          <SmartIDLiner ></SmartIDLiner>
          <SmartDescription1>
            <Boldword>SmartID is a digital passport</Boldword>to authenticate
            users quickly while minimizing data hacks, identity theft and data
            redundancy.
          </SmartDescription1>
          <SmartDescription2>
            SmartID will be used to verify the identity of users across an
            assortment of platforms.{" "}
          </SmartDescription2>

          <Horizontal>
            <ProductImage src={productShow}></ProductImage>
            <verticalBox>
              <BenefitsTitle>Benefits</BenefitsTitle>
              <BenefitsDescriptions>
                - Platforms only have information while using site reducing risk
                of hacking{" "}
              </BenefitsDescriptions>
              <BenefitsDescriptions>
                - Eliminates need for traditional login systems
              </BenefitsDescriptions>
              <BenefitsDescriptions>
                - Users can control what information each platform can see
              </BenefitsDescriptions>

              <HorizontalBox>
                <GreenIcon src={greenIcon}></GreenIcon>
                <AdditionalDescription>
                  More secure than a traditional SSO (single sign on)
                </AdditionalDescription>
              </HorizontalBox>
            </verticalBox>
          </Horizontal>
        </verticalBox>
      </Container>
    </Box>
  )
}
export default SmartIDCard
