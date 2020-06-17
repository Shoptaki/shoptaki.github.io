import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import TitleLiner from "./titleliner"

const Container = styled.div`
  background: #f8f8f8;
  text-align: center;
  padding: 3rem 3rem;
  flex: 1;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

const Title = styled.h1`
  font-weight: lighter;
  font-style: italic;
  font-size: 1.5rem;
  flexwrap: wrap;
`

const Description = styled.p`
  max-width: 30rem;
  font-size: 1.2rem;
  white-space: normal;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
  flexwrap: wrap;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`

const Slogan = ({ title, description, color }) => (
  <Container>
    <center>
      <Title>{title}</Title>
    </center>
    <TitleLiner color={color} />
    <center>
      <Description>{description}</Description>
    </center>
  </Container>
)

Slogan.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  color: PropTypes.string,
}

Slogan.defaultProps = {
  description: ``,
  color: `blue`,
}

export default Slogan
