import React from "react";
import styled from "styled-components";
import { theme } from "../theme/GlobalStyles"


import greenIcon from "../images/greenicon.svg"
import financialImage from "../images/financialimage.svg"

const Box = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  margin: auto;
  margin-top:10em;
  margin-bottom:20em;
  margin-left: 14%;
  margin-right: 14%;
  @media (max-width: ${theme.tablet}) {
    height: 73rem;
    margin-left: 9%;
    margin-right: 8%;
  }
`;


const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: "row";
  position: relative;
  height: 68rem;
  padding-bottom: 3rem;
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
const FinancialLiner = styled.div`
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
  font-weight: bold;
  margin-right: 2.4em;
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

const BenefitsTitle = styled.div`
  margin-top: 2.5rem;
  margin-left: 2.4em;
  font-weight: bold;
`
const BenefitsDescriptions = styled.div`
  margin-top: 0.5rem;
  margin-left: 2.5em;
  margin-right: 2.4em;
`
const AdditionalDescription = styled.div`
  margin-top: 2.5em;
  margin-right: 2.4em;
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
          <FinancialLiner color="blue" size={"26rem"}></FinancialLiner>
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
