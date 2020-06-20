import React from 'react';
import styled from "styled-components"

const UpBg = styled.div`
    margin-top: 100%;
    margin-bottom: 200%;
    left:0;
    right:0;
    position: sticky;
    overflow:hidden;
    transform: rotateY(180deg);
`
const UpperBgcontainer= styled.div`
    background:#F8F8F8;
    height:220px;
    width:100%;
    position: sticky;
    padding-top: 25%; 
    background: linear-gradient( 7deg, #F8F8F8 0%, #F8F8F8 70% ,white 71%);
    transform: rotateX(180deg);
`

const SubUpperBg= styled.div`
    height:120px;
    width: 260%;
    margin-left: -10%;
    margin-top: -9%; 
    margin-bottom: 1em;
    background: linear-gradient(-3.5deg, #F8F8F8 0%, #F8F8F8 68%,#93D4EF 90%); 
    transform: rotate(6deg);
 `

function UpperBg () {
    return (
       
       <UpBg> 
            <UpperBgcontainer>
                <SubUpperBg></SubUpperBg>
            </UpperBgcontainer>
        </UpBg>
    )
}
export default UpperBg
      