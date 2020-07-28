import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { theme } from "../theme/GlobalStyles"

import bubbledata from "../components/bubbledata"

const PageContainer = styled.div`
  height: 100%;
  margin-top: 2rem;
  padding: 3rem;
  justify-content: center;
  align-items: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (max-width: ${theme.phone}) {
    margin-top: 1rem;
  }
`
const Container = styled.div`
  height: 100%;
  max-width: 80rem;
  display: flex;
  margin-top: 1rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis: 10%;
  flex-wrap: wrap;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (max-width: ${theme.phone}) {
    flex-direction: column;
    margin-top: 1rem;
    max-width: 30rem;
  }
`
const Title = styled.div`
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 25px;
  margin-top: 1rem;
  margin-bottom: 0.5em;
`

const Description = styled.div`
  margin-top: 1rem;
  font-size: 16px;
  height: 8rem;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;

  @media (max-width: ${theme.mobile}) {
    margin-top: 2rem;
  }
`
const CardContainer = styled.div`
  width: 20rem;
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 2rem;
  margin-top: 2rem;
  padding: 2rem;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  @media (max-width: ${theme.tablet}) {
    margin-left: 1rem;
    width: 18rem;
  }

  @media (max-width: ${theme.phone}) {
    margin-left: 0rem;
    width: 18rem;
  }
`
const LineBreaker = styled.div`
  flex-basis: 100%;
  height: 0;
`
const Item = ({ node }) => (
  <CardContainer>
    <img src={node.icon} width="90px" height="90px" marginTop="5rem" />
    <LineBreaker />
    <Title>{node.title}</Title>
    <Description>{node.description}</Description>
  </CardContainer>
)

Item.propTypes = {
  node: PropTypes.any.isRequired,
}

const PageTitle = styled.h1`
  margin-top: 3rem;
  //margin-left: 15rem;
  white-space: nowrap;
  @media (max-width: ${theme.tablet}) {
    margin-top: 0rem;
    text-align: center;
  }
`
const UsecaseCard = () => (
  <PageContainer>
    <PageTitle>Use Cases</PageTitle>
    <Container>
      {bubbledata.map(node => (
        <Item node={node} />
      ))}
    </Container>
  </PageContainer>
)

export default UsecaseCard
