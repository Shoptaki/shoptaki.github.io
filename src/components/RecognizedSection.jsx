import React from "react"
import global_logo from "../images/homepage_global_logo.svg"
import remtech_logo from "../images/homepage_remtech_logo.svg"
import cc_logo from "../images/homepage_cc_logo.svg"
import airoxa from "../images/airoxa2.png"
import nvidia from "../images/nvidia.jpg"
import oracle from "../images/oracle.png"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles.js"
import lowerbg from "../images/lower_background.svg"

const Recog = styled.div`
    left:0;
    right:0;
    background-image: url(${lowerbg});
    background-size:cover;
    position: relative;
    padding: 6em 0em 6rem;
    margin-bottom: 0em;
    
    @media (max-width: ${theme.mobile}){
        padding-top: 0em;
    }
`;


const RecogContainer= styled.div`
    min-height: 350px;
    width: 100%;
    margin: 5em auto 0em auto;
    @media (max-width: ${theme.mobile}){
        padding-top:5em;
        height:100%;
        width: 70%;
        margin-top:-12em;
        margin-bottom:0em;
        padding-bottom:0em;
    }
`

const RecogTitle = styled.div`
    text-align: center;
    font-weight:140;
    font-size: 27px;
    margin-bottom: 1.5em;
    padding-top: 2.5em;
    @media (max-width: ${theme.mobile}){
        padding-top: 10em;
        margin-bottom: 2.5em;
    }
`
const RecogImageBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  @media (max-width: ${theme.mobile}) {
         display: flex;
         flex-direction: column;
         align-items: center;
         text-align: center;
         margin-bottom:0em;
         padding-bottom:0em;
    } 
    
`
const SubRecogImagebox=styled.div`
   max-width: 500px;
   width: 100%;
   height: 200px;
   text-align:center;
   margin-bottom:1%;
   display: flex;
   justify-content: center;
   align-items: flex-end;
    @media (max-width: 1360px){
        height: auto;
        margin: 30px 0;
    }
`
const RecogImage1 =styled.img`
    width: 70%;
    margin-bottom: -21px;
    @media (max-width: ${theme.mobile}){
        width: 50%;
    }
`
const RecogImage2 =styled.img`
    width: 75%;
    margin-bottom: -10px;
    @media (max-width: ${theme.mobile}){
        width: 50%;
    }
`
const RecogImage3=styled.img`
    width: 50%;
    margin-bottom: -21%;
    @media (max-width: ${theme.mobile}){
        width: 40%;
        margin-bottom: oem;
    }
`;
const RecogImage4=styled.img`
    width: 27%;
    margin-top: 0.7%;
    @media (max-width: ${theme.mobile}){
        width: 23%;
        margin-top: 16px;
    }
`;
const RecogImage5=styled.img`
    width: 65%;
    margin-bottom: -5.3%;
    @media (max-width: ${theme.mobile}){
        width: 45%;
        margin-bottom: 0;
    }
`;
const RecogImage6=styled.img`
    width: 75%;
    @media (max-width: ${theme.mobile}){
        width: 45%;
        margin-top: -7px;
    }
`;

const Recognizers = [
    {
        src: global_logo,
        alt: "Recognized by Global Startup Systems",
        Component: RecogImage1
    },
    {
        src: remtech_logo,
        alt: "Recognized by Remtech Awards",
        Component: RecogImage2
    },
    {
        src: cc_logo,
        alt: "Recognized by Currency Cloud",
        Component: RecogImage3
    },
    {
        src: airoxa,
        alt: "Recognized by Airoxa",
        Component: RecogImage4
    },
    {
        src: oracle,
        alt: "Recognized by Oracle",
        Component: RecogImage5
    },
    {
        src: nvidia,
        alt: "Recognized by Nvidia",
        Component: RecogImage6
    }
]

console.log(RecogImage1);

function Recognize() {
    return (
       <Recog> 
            <RecogContainer>
                <RecogTitle>Recognized By</RecogTitle>
                <RecogImageBox>
                    {
                        Recognizers.map(({src, alt, Component})=>{
                            return(
                                <SubRecogImagebox>
                                  <Component src={src} alt={alt} />
                                </SubRecogImagebox>
                            );
                        })
                    }
                </RecogImageBox>
            </RecogContainer>
        </Recog>
    )
}
export default Recognize
