import React from "react"
import styled from "styled-components";
import CardHeader from "../components/CardHeader"
import Card from "../components/Cards"
import {theme} from "../theme/GlobalStyles.js"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6em;

  @media (max-width: ${theme.mobile}){
    margin-bottom: 0;
  } 
`;

const CardAndHeader = () => (
    <>
      <CardHeader />
      <Container>
        <Card />
      </Container>
    </>
)

export default CardAndHeader
