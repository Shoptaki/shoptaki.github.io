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
    background-size: cover;
    position: sticky;
    overflow:hidden;
    max-height: 100em;
    padding-bottom:2em;
    padding-top:5em;
`

const RecogContainer= styled.div`
    /* background:#F8F8F8; */
    height:280px;
    width:100%;
    position: sticky;
    margin-bottom:1em;
    margin-top:5em;
    @media (max-width: ${theme.mobile}){
        height:40em;
        margin-bottom:5em;
    }
`

const RecogTitle=styled.div`
    color: black;
    text-align: center;
    font-family: "Helvetica Neue";
    font-weight:140;
    font-size: 27px;
    margin-bottom: 1.5em;
    padding-top: 1.5em;
    @media (max-width: ${theme.mobile}){
        padding-top: 7em;
    }
`
const RecogImageBox=styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom:2em;
    @media (max-width: ${theme.mobile}){
         display: flex;
         flex-direction: column;
         text-align: center;
         color:black;
    } 
    
`
const SubRecogImagebox=styled.div`
    margin: 10px;
    padding: 5px;
    padding-left: 5%;
    padding-right: 5%;
    @media (max-width: ${theme.mobile}){
        padding: 0px;
        line-height: 3em;
        margin-bottom: 0;
    }
`
const RecogImage =styled.img`
    width: 70%;
    margin-top:10%;
    padding-bottom:50em;
    @media (max-width: ${theme.mobile}){
        width: 50%;
        margin-bottom:-50em;
        margin-left:-3%;
    }
`

const RecogImage3=styled.img`
    width: 70%;
    margin-top:10%;
    margin-bottom:20%;
    @media (max-width: ${theme.mobile}){
        width: 40%;
        margin-top: 3em;
        margin-bottom:5em;
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
      