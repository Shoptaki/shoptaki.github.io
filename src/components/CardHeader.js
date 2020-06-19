import React from "react"
import bar from "../../bar.png"
import styled from "styled-components"
import {theme} from "../theme/GlobalStyles.js"

const HeaderTitle = styled.div`
text-align: center;
font-family: "Myriad Pro Light";
font-size: 50px;
margin-bottom: 0.75em;
@media (max-width: ${theme.mobile}){
    font-size: 35px;
}
`


const CardHeader = (props) => (
    <div>
    <HeaderTitle>What do we promise?</HeaderTitle>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingRight: 20
      }}>
        <img src={bar} alt="bar image" />
        </div>
        </div>
  )

  export default CardHeader