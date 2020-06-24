import React from 'react';
import recog1 from "../images/recog1.svg"
import recog2 from "../images/recog2.svg"
import recog3 from "../images/recog3.svg"
import styled from "styled-components"
import {theme} from "../theme/GlobalStyles.js"
import RecogBorder from "../images/RecognizeBorder.svg"

const Recog = styled.div`
    left:0;
    right:0;
    background-image: url(${RecogBorder});
    background-size:cover;
    position: relative;
    max-height: 80rem;
    padding-bottom:2em;
    padding-top:6em;
    margin-bottom:0em;
    margin-top:50%;
    
    @media (max-width: ${theme.mobile}){
        margin-bottom:0em;
    }

`

const RecogContainer= styled.div`
    /* background:#F8F8F8; */
    height:350px;
    width:100%;
    position: sticky;
    margin-bottom:0em;
    margin-top:5em;
    @media (max-width: ${theme.mobile}){
        padding-top:10em;
        height:100%;
        margin-top:-2.3em;
        margin-bottom:0em;
        padding-bottom:0em;
    }
`

const RecogTitle=styled.div`
    color: black;
    text-align: center;
    font-family: "Helvetica Neue";
    font-weight:140;
    font-size: 27px;
    margin-bottom: 2.5em;
    padding-top: 2.5em;
    @media (max-width: ${theme.mobile}){
        font-size: 33px;
        padding-top: 9em;
        font-weight:145;
        text-align: center;
    }
`
const RecogImageBox=styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom:3em;
    @media (max-width: ${theme.mobile}){
         display: flex;
         flex-direction: column;
         text-align: center;
         margin-bottom:0em;
         padding-bottom:0em;
    } 
    
`
const SubRecogImagebox=styled.div`
   width:100%;
   text-align:center;
   padding-bottom:0;
   margin-bottom:1%;
    @media (max-width: ${theme.mobile}){
        margin-bottom:1%;
        padding-bottom:0;
    }
`
const RecogImage1 =styled.img`
    width: 62%;
    margin-top:5%;
    padding-bottom:0em;
    @media (max-width: ${theme.mobile}){
        padding-bottom:0;
        width: 50%;
        margin-left:-3%;
    }
`
const RecogImage2 =styled.img`
    width: 70%;
    margin-top:11%;
    padding-bottom:0em;
    @media (max-width: ${theme.mobile}){
        width: 50%;
        padding-bottom:0;
        margin-left:-3%;
    }
`
const RecogImage3=styled.img`
    width: 45%;
    margin-top:-2.5%;
    padding-bottom:0em;
    @media (max-width: ${theme.mobile}){
        width: 40%;
        margin-top: 5em;
        padding-bottom:0;
        margin-left:-6%;
    }
    
`

function Recognize () {
    return (
       <Recog> 
            {/* <Border src={RecogBorder}/> */}
            <RecogContainer>
                <RecogTitle>Recognized By</RecogTitle>
                <RecogImageBox>
                <SubRecogImagebox>
                    <RecogImage1 src={recog1}/>
                </SubRecogImagebox>
                <SubRecogImagebox>
                    <RecogImage2 src={recog2}/>
                </SubRecogImagebox>
                <SubRecogImagebox>
                    <RecogImage3 src={recog3}/>
                </SubRecogImagebox>
                </RecogImageBox>
            </RecogContainer>
        </Recog>
    )
}
export default Recognize