import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import logoImage from "../images/logo_horizontal.png";
import Popup from "reactjs-popup";
import { fadeInDown } from "react-animations";
import { keyframes } from "styled-components";
import CustomLink from "./customlink"
import links from "../../gatsby-config";
import {theme} from "../theme/GlobalStyles"
// import { useStaticQuery, graphql } from 'gatsby'

const FadeIn = styled.div`animation: 2.5s ${keyframes`${fadeInDown}`};`

const aboutLink =  {
  link: links.siteMetadata.menuLinks[0].subLinks[0].link,
  title: links.siteMetadata.menuLinks[0].subLinks[0].title
}

const smartchainLink =  {
  link: links.siteMetadata.menuLinks[1].subLinks[0].link,
  title: links.siteMetadata.menuLinks[1].title
}

const usecaseLink = {
  link: links.siteMetadata.menuLinks[2].subLinks[0].link,
  title: links.siteMetadata.menuLinks[2].subLinks[0].title
}

const productsLink = {
  link: links.siteMetadata.menuLinks[2].subLinks[1].link,
  title: links.siteMetadata.menuLinks[2].subLinks[1].title
}

const Container = styled.header`
  background-color: transparent;
  
  padding: 1.45rem 1.0875rem;
  padding-bottom: 0;
  display: flex;
`
const MenuDiv = styled.div`
  text-align: right;  
  width: 100%;
  @media (max-width: ${theme.tablet}) {
    display: none;
  }
`
const HamburgerDiv = styled.div`
  text-align: right;  
  width: 100%;
  display: none;
  @media (max-width: ${theme.tablet}) {
    display: block;
  }
`
const HomeButton = styled(Link)`
  margin-left: 10px;
  margin-right: 10px;
`;
const Logo = styled.img`
  width: 10rem;
`
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 4rem;
  font-size: 1rem;
  font-weight: normal;
  width: 8rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 0.75rem 0.5rem;
  text-align: left;
  border-radius: 10px;
`
const Tab = styled.div`
  display: inline-flex;
  margin: 0rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  &:hover ${DropdownContent} {
    display: block;
  }
`
const ContactLink = styled(Link)`
  border: solid;
  border-color: ${theme.fontDarkBlue};
  border-radius: 10px;
  border-width: 2px;
  padding: 10px;
  color: #000;
  &:hover {
    background-color: ${theme.fontDarkBlue};
    color: #fff;
  }
`
const MobileLink = styled(Link)`
  color: black;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  border-top: 0.05rem solid #999;
  padding: 1rem 0rem;
  &:first-child {
    border-top: none;
  }
`
const HamburgerIcon = () => (
  <svg viewBox="0 0 100 80" width="25" height="25">
    <rect width="100" height="15" rx="15" ry="15"></rect>
    <rect y="30" width="100" height="15" rx="15" ry="15"></rect>
    <rect y="60" width="100" height="15" rx="15" ry="15"></rect>
  </svg>
);

const Header = () => (
      <Container>
        
        <HomeButton to="/">           
            <Logo src={logoImage}/>
        </HomeButton>
        
        <MenuDiv >  
        
            
            <Tab>
                About Us
                <DropdownContent>
                  <CustomLink
                    to={aboutLink.link}
                    displayText={aboutLink.title}
                    linkColor="black"
                  />
                </DropdownContent>
            </Tab>

            <Tab>
                <Link
                  to={smartchainLink.link}
                  style={{ color: "black", textDecoration: "none"}}
                >
                  {smartchainLink.title}
                </Link>
            </Tab>

            <Tab>
                  Our Solution
                  <DropdownContent>
                    <CustomLink
                      to={usecaseLink.link}
                      displayText={usecaseLink.title}
                      linkColor="black"
                    />
                    <CustomLink
                      to={productsLink.link}
                      displayText={productsLink.title}
                      linkColor="black"
                    />
                  </DropdownContent>
            </Tab>

            <Tab>
                <ContactLink to="/contact-us">
                  Contact Us
                </ContactLink>
            </Tab>

         
        </MenuDiv>

        <HamburgerDiv >
          <Popup contentStyle={{width: "15rem"}}
                trigger={
                  <span> <HamburgerIcon /> </span>
                } 
                position="bottom right" >
            <FadeIn>
              
                <MobileLink to="/"> Home </MobileLink>

                <MobileLink to={aboutLink.link}> {aboutLink.title} </MobileLink>

                <MobileLink to={smartchainLink.link}> {smartchainLink.title} </MobileLink>
              
                <MobileLink to={usecaseLink.link}> {usecaseLink.title} </MobileLink>

                <MobileLink to={productsLink.link}> {productsLink.title} </MobileLink>

                <MobileLink to="contact-us"> Contact Us </MobileLink>

            </FadeIn>
          </Popup>
        </HamburgerDiv>

      </Container>
)

export default Header


