import React from "react";
import styled from "styled-components";
import { theme } from "../theme/GlobalStyles"


import TitleLiner from "../components/TitleLiner"
import greenIcon from "../images/products_verified.svg"
import financialImage from "../images/products_financial.png"


const Box = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  width: 50rem;
  margin: 5rem auto;
  @media (max-width: ${theme.mobile}) {
    width: 100%;
    margin-left: 0rem;
  }
`;


const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 63rem;
  padding: 3rem 3rem;
`
const Title = styled.div`
  font-weight: bold;
  font-size: 25px;
`
const Description = styled.div`
  margin-top: 2rem;
`
const BenefitsTitle = styled.div`
  margin-top: 2.5rem;
  margin-left: 2em;
  font-family: 'Myriad Pro Semibold';
  @media (max-width: ${theme.mobile}) {
    margin-left: 0rem;
  }
`
const BenefitsDescriptions = styled.div`
  margin-top: 0.5rem;
  margin-left: 2rem;
  @media (max-width: ${theme.mobile}) {
    margin-left: 0rem;
  }
`
const AdditionalDescription = styled.div`
  margin-top: 2.5em;
  margin-right: 2.4em;
`
const GreenIcon = styled.img`
  width: 1.2rem;
  margin-right: 0.2rem;
`
const FinancialImage = styled.img`
  width: 100%;
  margin-top: 2.5em;
`
function FinancialPlatformCard() {
  return (
    <Box id="financialBox">
      <Container>
     
          <Title>
            Financial Platform
            <TitleLiner />
          </Title>
          
          <Description>
            <p>Finance Smartchain ID allows for transactional communication to be
            secure by being decentralized.</p>
            <p>Smartchain tracks data across different ecosystems to prevent fraud
            and automate certain processes.</p>
          </Description>

          <BenefitsTitle>Benefits</BenefitsTitle>
          <BenefitsDescriptions>
            <li>Limit Volume of Data </li>
            <li>Reduce Redundancy</li>
            <li>Verify Validity of Users</li>
            <li>Streamline transactions while automating KYC, AML, and regulation
              and compliance.</li>
            <li>Embeds each transaction with the SmartID to track transaction
              origins, prevent money laundering, etc…</li>
          </BenefitsDescriptions>

          <AdditionalDescription>
            <GreenIcon src={greenIcon}></GreenIcon>
            More secure than a traditional SSO (single sign on)
          </AdditionalDescription>

          <FinancialImage src={financialImage} alt="financialPlatform"></FinancialImage>

   
      </Container>
    </Box>
  )
}
export default FinancialPlatformCard
