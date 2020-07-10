import React from "react"
import TitleLiner from "./titleliner"
import styled from "styled-components"
import {theme} from "../theme/GlobalStyles.js"

const HeaderTitle = styled.div`
  text-align: center;
  font-family: "Myriad Pro Light";
  font-size: 50px;
  
  margin-top: 10rem;
  @media (max-width: ${theme.mobile}){
      font-size: 35px;
  }
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20;
  margin-bottom: 4rem;
  
`

const CardHeader = () => (
  <div>
    <HeaderTitle>What do we promise?</HeaderTitle>
    <Line>
      <TitleLiner color="orange" />
    </Line>
  </div>
)


export default CardHeader
