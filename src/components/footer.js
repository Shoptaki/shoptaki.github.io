import React from 'react';
import facebookicon from "../images/facebook.svg"
import twittericon from "../images/twitter.svg"
import linkedinicon from "../images/linkedin.svg"
import styled from "styled-components"
import {theme} from "../theme/GlobalStyles.js"
import {Link} from "gatsby"

const Mainfooter = styled.div`
    color:white;
    align-items: center;
    top:100%;
    font-size:.889rem;
    position: sticky;
    left:0;
    bottom:0;
    right:0;
    
    overflow:hidden;
`
const Title = styled.div`
    margin-bottom:0.3em;
    margin-top:1em;
    color:white;
    font-size:25px;
    @media (max-width: ${theme.mobile}){
        margin-bottom:0.5em;
    }
`

const Container= styled.div`
    width:100%;
    padding-left:30px;
    padding-right:20px;
    padding-bottom:20px;
    padding-top: 20px;
    background-color: black;  
 `
const Row=styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: ${theme.mobile}){
        flex-direction: column;
        line-height: 1.5em
    } 
`
const Box=styled.div`
    margin: 10px;
    padding: 5px;
    font-size: 20px;
    flex-basis:30%;  
    @media (max-width: ${theme.mobile}){
        margin: 0px;
        padding: 0px;
        font-size: 22px;
        flex-basis:30%; 
        margin-top: 0.5em;
    } 
    
`
const ListUnstyled=styled.ul`
    list-style: none;
    margin: 0%;
    padding: 0%;
    font-size: 30px;
    margin-bottom: 0;
    @media (max-width: ${theme.mobile}){
        font-size: 40px;
        line-height: 0.5em;
    }
`
const List =styled(Link)`
    color: grey;
    font-size: 18px;
    line-height: 1.8em;
    text-decoration:underline;
    text-decoration-color: black;
    &:hover{
        text-decoration:underline;
        text-decoration-color: grey;
    }
`

const Icon=styled.div`
    height: 10px;
    display: flex;
    flex-direction:row;
`
const Iconbox =styled.div`
    margin: 10px;
    padding: 5px;
    flex-basis:3%;  
    @media (max-width: ${theme.mobile}){
        padding: 0px;
        margin-left: 0;
        font-size: 20px;
        margin-top: 1em;
        flex-basis:10%; 
        margin-bottom: 1em;
}
`

const Social =styled.img`
    width:110%;
    &:hover{
        opacity: 0.6;
    }
    @media (max-width: ${theme.mobile}){
        width:80%; 
    }
`

const FooterBottom =styled.div`
    color:grey;
    margin:10px;
    padding: 5px;
    line-height: 0em;
    margin-top: 60px;
    @media (max-width: ${theme.mobile}){
        margin: 0px;
        padding: 0px;
        font-size: 15px;
        margin-top: 20%;
    }
`
const FooterLinks=[
        {
          title: "About Us",
          subLinks: [
            {
              title: "Our Mission",
              link: "/our-mission"
            }
          ]
        },
        {
          title: "Smartchain",
          subLinks: [
            {
              title: "What is Smartchain?",
              link: "/What-is-smartchain"
            }
          ]
        },
        {
          title: "Our Solutions",
          subLinks: [
            {
              title: "Use Cases",
              link: "/use-cases"
            },
            {
              title: "Products",
              link: "/products"
            }
          ]
        }, 
        {
            title: "Support",
            subLinks: [
              {
                title: "Contact Us",
                link: "/contact-us"
              }
            ]
          }, 

    ]

function Footer () {
    
    return (
        <Mainfooter>
        <Container>        
        <Row> 
        {
            FooterLinks.map(column=>
                <Box>
                    <Title>{column.title}</Title>
                    {
                        column.subLinks.map(link=>
                            <ListUnstyled>
                                <li ><List to={link.link}>{link.title}</List></li> 
                            </ListUnstyled>

                        )
                    }
                    
                </Box>
             )
        }
     
        </Row>
        <Icon>
        <Iconbox>
            <a href="https://www.facebook.com/shoptaki/" target="blank">
            <Social src={facebookicon}></Social></a>
        </Iconbox>
        <Iconbox>
            <a href="https://twitter.com/shoptaki?lang=en"><Social className="social" src={twittericon}></Social></a>
        </Iconbox>
        <Iconbox>
            <a href="https://www.linkedin.com/company-beta/10899440?pathWildcard=10899440"><Social className="social" src={linkedinicon}></Social></a>
        </Iconbox>
        </Icon>

        {/* Footer Bottom */}
        <FooterBottom>
            <p>
            <h7>&copy; {(new Date().getFullYear())} Shoptaki, All Rights Reserved</h7>
            </p>
        </FooterBottom>
        </Container>
        </Mainfooter >           
    )
    }
export default Footer;