import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const cardContainer = styled.div
'color: #333BFF'

const Card = (props) => (
    <cardContainer>
        <h2> Become part of the future.  </h2>
        <Link to="/ContactUs/"> Contact Us ▶</Link>
    </cardContainer>
)

export default Card 