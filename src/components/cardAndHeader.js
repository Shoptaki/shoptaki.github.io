import React from "react"
import styled from "styled-components";
import CardHeader from "../components/CardHeader"
import Card from "../components/Cards"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
