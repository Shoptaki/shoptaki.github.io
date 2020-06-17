import React from "react"

import Card from "../components/Cards"
import bar from "../../bar.png"
//import styled from "styled-components"

const CardAndHeader = (props) => (
    <div
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <div>
      <h1 style={{
        textAlign: 'center'
    }}>
        What do we promise?
      </h1>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <img src={bar} alt="bar image" />
      </div>
    <Card></Card>
    </div>
    </div>
)

export default CardAndHeader