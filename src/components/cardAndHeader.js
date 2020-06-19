import React from "react"
import CardHeader from "../components/CardHeader"
import Card from "../components/Cards"



const CardAndHeader = (props) => (
    <div>
      <div>
        <CardHeader></CardHeader>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
    <Card></Card>
    </div>
    </div>
)

export default CardAndHeader