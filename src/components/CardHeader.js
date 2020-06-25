import React from "react"
import TitleLiner from "./titleliner"
import styled from "styled-components"
import {theme} from "../theme/GlobalStyles.js"

const HeaderTitle = styled.div`
    text-align: center;
    font-family: "Myriad Pro Light";
    font-size: 50px;
    margin-bottom: 0.75em;
    margin-top: 10rem;
    @media (max-width: ${theme.mobile}){
        font-size: 35px;
}
`;




const CardHeader = (props) => (
    <>
    <HeaderTitle>What do we promise?</HeaderTitle>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingRight: 20
      }}>
       <TitleLiner color="orange" /> 
        </div>
    </>
  )

  export default CardHeader