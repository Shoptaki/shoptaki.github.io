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
    <div>
      <CardHeader />

      <Container>
        <Card />
      </Container>
    </div>
)

export default CardAndHeader
