import React from "react"
import bar from "../../bar.png"
import styled from "styled-components"
import {theme} from "../theme/GlobalStyles.js"

const HeaderTitle = styled.div`
text-align: center;
font-family: "Myriad Pro Light";
font-size: 50px;
margin-bottom: 0.75em;
padding-top: 5rem;
@media (max-width: ${theme.mobile}){
    font-size: 35px;
}
`
const BarContainer = styled.div`
margin-bottom: 2em;
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
          <BarContainer>
        <img src={bar} alt="bar image" />
        </BarContainer>
        </div>
        </div>
  )

  export default CardHeader