import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"

import "./styles.css" // from React Transition Group

import greenIcon from "../images/greenicon.svg"
import financialImage from "../images/financialimage.svg"
import underlinerBlue from "../images/underliner-blue.svg"

const Box = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  margin-top: 20em;
  margin-bottom: 25em;
  margin-left: 14%;
  margin-right: 14%;
  height: 63em;
`

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: "row";
  position: relative;
  height: 63rem;
  padding-bottom: 3rem;
  padding-right: 1rem;
`
const verticalBox = styled.div`
  display: flex;
  flex-direction: "column";
  padding-bottom: 3rem;
`
const SmartTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-left: 1.8em;
  margin-top: 3em;
  margin-bottom: 0.5em;
`
const FinancialLiner = styled.img`
  width: 300px;
  margin-left: 1.3em;
`

const SmartDescription1 = styled.div`
  margin-left: 2.4em;
  font-weight: bold;
`
const SmartDescription2 = styled.div`
  margin-left: 2.4em;
  margin-top: 1em;
`
const HorizontalBox = styled.div`
  display: flex;
  flex-direction: "row";
`

const BenefitsTitle = styled.div`
  margin-top: 2.5rem;
  margin-left: 2.4em;
  font-weight: bold;
`
const BenefitsDescriptions = styled.div`
  margin-top: 0.5rem;
  margin-left: 2.5em;
`
const AdditionalDescription = styled.div`
  margin-top: 2.5em;
`
const GreenIcon = styled.img`
  margin-top: 2.5em;
  width: 1.2rem;
  margin-left: 2.4em;
  margin-right: 0.2rem;
  @media (max-width: ${theme.tablet}) {
    width: 5%;
    margin-bottom: 0rem;
  }
`
const FinancialImage = styled.img`
  width: 80%;
  margin-top: 2.5em;
  padding-left: 3em;
  padding-right: 2rem;
  padding-bottom: 5rem;
  @media (max-width: ${theme.tablet}) {
    width: 100%;
    margin-top: 3em;
    padding-left: 2.5em;
    padding-right: 2rem;
    padding-bottom: 1.5rem;
  }
`
function FinancialPlatformCard(props) {
  return (
    <Box id="financialBox">
      <Container>
        <verticalBox>
          <SmartTitle>Financial Platform</SmartTitle>
          <FinancialLiner src={underlinerBlue}></FinancialLiner>
          <SmartDescription1>
            Finance Smartchain ID allows for transactional communication to be
            secure by being decentralized.
          </SmartDescription1>
          <SmartDescription2>
            Smartchain tracks data across different ecosystems to prevent fraud
            and automate certain processes.{" "}
          </SmartDescription2>
          <BenefitsTitle>Benefits</BenefitsTitle>
          <BenefitsDescriptions>- Limit Volume of Data </BenefitsDescriptions>
          <BenefitsDescriptions>- Reduce Redundancy </BenefitsDescriptions>
          <BenefitsDescriptions>
            - Verify Validity of Users{" "}
          </BenefitsDescriptions>
          <BenefitsDescriptions>
            - Streamline transactions while automating KYC, AML, and regulation
            and compliance.{" "}
          </BenefitsDescriptions>
          <BenefitsDescriptions>
            - Embeds each transaction with the SmartID to track transaction
            origins, prevent money laundering, etc…
          </BenefitsDescriptions>
          <HorizontalBox>
            <GreenIcon src={greenIcon}></GreenIcon>
            <AdditionalDescription>
              More secure than a traditional SSO (single sign on)
            </AdditionalDescription>
          </HorizontalBox>

          <FinancialImage src={financialImage}></FinancialImage>
        </verticalBox>
      </Container>
    </Box>
  )
}
export default FinancialPlatformCard
