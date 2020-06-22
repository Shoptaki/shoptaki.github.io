import React from 'react';
import styled from "styled-components"
import CustomLink from "./customlink"
import {theme} from "../theme/GlobalStyles.js"

const Contactcontainer= styled.div`
    margin-top: 250%;
    left:0;
    right:0;
    position: relative;
    width: 100%;
    height:300px;
    margin-left: 0;
    margin-bottom: 0;
    background: linear-gradient( to right,#BFE6F7,#1DA7E3 45%,#BFE6F7); 
    overflow:hidden;
`
const ContactTitle = styled.div`
    color : white;
    font-size : 30px;
    margin-left:39%;
    font-weight:100;
    font-size: 27px;
    margin-bottom: 0.5em;
    margin-top:3em;
    @media (max-width: ${theme.mobile}){
        margin-left:10%;
    } 
`
const Button = styled.button`
    margin-left:44%;
    margin-bottom: 0.5em;
    margin-top:3em;
    position:relative;
    background-color:white;
    border:none;
    border-radius: 5px;
    height:45px;
    font-size:18px;
    font-weight:bold;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    @media (max-width: ${theme.mobile}){
        margin-left:10%;
        width:32%;
        height:45px;
    } 
`
const ContactLink=[
    {
      title: "Contact Us",
      link:"/contact-us",
      color:"#2E50B9"
    },

]
function Contact() {
    
    return (
        <Contactcontainer>
            <ContactTitle>Become part of the future.</ContactTitle>
            <Button>
                {
                ContactLink.map(col=>
                <CustomLink
                    to={col.link}
                    displayText={col.title}
                    linkColor={col.color}
                    arrow
                />
                    )

                }
        
      </Button>
        </Contactcontainer>     
               
    )
    }
export default Contact;