import React from 'react';
import recog1 from "../images/recog1.svg"
import recog2 from "../images/recog2.svg"
import recog3 from "../images/recog3.svg"
import styled from "styled-components"
import {theme} from "../theme/GlobalStyles.js"

const Recog = styled.div`
    margin-top: 200%;
    left:0;
    right:0;
    position: sticky;
    overflow:hidden;
`
const RecogContainer= styled.div`
    background:#F8F8F8;
    height:220px;
    width:100%;
    position: sticky;
    padding-top: 25%; 
    background: linear-gradient( -7deg, #F8F8F8 0%, #F8F8F8 70% ,white 71%);
    @media (max-width: ${theme.mobile}){
        background:#F8F8F8;
        height:480px;
        background: linear-gradient( -7deg, #F8F8F8 0%, #F8F8F8 70% ,white 80%);
    }
`

const Subcontainer= styled.div`
    
    height:120px;
    width: 260%;
    margin-left: -10%;
    margin-top: -27%; 
    margin-bottom: 1em;
    background: linear-gradient( -3.5deg, #F8F8F8 0%, #F8F8F8 68%,#93D4EF 90%); 
    transform: rotate(-6deg);
    @media (max-width: ${theme.mobile}){
    background: linear-gradient( -5deg, #F8F8F8 0%, #F8F8F8 68%,#93D4EF 90%); 
    } 
 `
const RecogTitle=styled.div`
    color: black;
    text-align: center;
    font-family: "Helvetica Neue";
    font-weight:100;
    font-size: 27px;
    margin-bottom: 0.5em;
    margin-top:6.5em;
    @media (max-width: ${theme.mobile}){
        margin-top:1.2em;
    } 
`
const RecogImageBox=styled.div`

    display: flex;
    flex-direction: row;
    align-items: baseline;

    @media (max-width: ${theme.mobile}){
         display: flex;
         flex-direction: column;
    } 
    
`
const SubRecogImagebox=styled.div`
    margin: 10px;
    padding: 5px;
    padding-left: 5%;
    padding-right: 5%;
    @media (max-width: ${theme.mobile}){
        margin: 0px;
        padding: 0px;
        line-height: 3em;
        margin-left: 27%;
        margin-top:10%;
    }
`
const RecogImage =styled.img`
    width: 70%;
`

const RecogImage3=styled.img`
    width: 70%;
    margin-bottom: -15%;
    @media (max-width: ${theme.mobile}){
        width: 60%;
        margin-top: -10%;
        margin-left: 5%;
    }
    
`

function Recognize () {
    return (
       <Recog>  
            <RecogContainer>
                <Subcontainer></Subcontainer>
                <RecogTitle>Recognized By</RecogTitle>
                <RecogImageBox>
                <SubRecogImagebox>
                    <RecogImage className="recog-image" src={recog1}/>
                </SubRecogImagebox>
                <SubRecogImagebox>
                    <RecogImage className="recog-image" src={recog2}/>
                </SubRecogImagebox>
                <SubRecogImagebox>
                    <RecogImage3 className="recog-image3" src={recog3}/>
                </SubRecogImagebox>
                </RecogImageBox>
            </RecogContainer>
        </Recog>
    )
}
export default Recognize
      