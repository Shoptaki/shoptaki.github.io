import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import TitleLiner from "./titleliner"

const Container = styled.div`
  margin: auto;
  text-align: center;
`

const Title = styled.h1`
  font-style: italic;
`

const Description = styled.p`
  margin: auto;
  text-align: center;
  width: 30rem;
  font-size: 1.2rem;
  word-break: break-all;
  white-space: normal;
`

const Slogan = ({ title, description, color }) => (
  <Container>
    <Title>{title}</Title>
    <TitleLiner color={color} />
    <p marginTop="2rem"> </p>
    <Description>{description}</Description>
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
