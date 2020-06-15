import React from "react"

import Card from "../components/Cards"
import bar from "../../bar.png"
//import styled from "styled-components"

const CardAndHeader = (props) => (
    <div
    style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
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