import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import logoimage from "../images/logo_vertical.png";
import Popup from "reactjs-popup";
import './header.css';
import { fadeInDown } from "react-animations";
import { keyframes } from "styled-components";
import CustomLink from "./customlink"
import links from "../../gatsby-config";

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
  margin-bottom: 1.45rem;
  padding: 1.45rem 1.0875rem;
  display: flex;
`;

const MenuDiv = styled.div`
  text-align: right;  
  margin-top: 20px;
  `
const HomeDiv = styled.div`
  text-align: left;
  width: 10%;
  position: absolute;
`
const HomeButton = styled(Link)`
  color: black;
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
`;

const NavButton = styled(Link)`
  color: black;
  text-decoration: none;
  margin-left: 100px;
  margin-right: 10px;
`;



const Header = () => (
  <header>
    <Container>
      <HomeDiv>
        <HomeButton>
          <Link
            to="/"
            style={{color:"black", height: 60, width: 70}}>
            <img className={"HomeLogo"} src={logoimage}/>
          </Link>
        </HomeButton>
      </HomeDiv>
      <MenuDiv className="MenuDivider" style={{width: 1500}}>
        <ul className= "ItemsList">
          <li style={{textAlign: "left", width: 120}}
               className="dropdown">
            <button style={{fontSize: 25,
              fontWeight: "bold",
              background: "none",
              border: "none"}}
                    className="dropbtn">About Us</button>
            <div style={{borderRadius: 10}} className="dropdown-content">
              <CustomLink
                to={aboutLink.link}
                displayText={aboutLink.title}
                linkColor="black"
              />
            </div>
          </li>

          <li style={{marginRight: 80}}>
            <NavButton style={{fontsize: 25, fontweight: "bold"}}>
              <Link
                to={smartchainLink.link}
                style={{ color: "black", textDecoration: "none", fontSize: 25, fontWeight: "bold"}}
              >
                {smartchainLink.title}
              </Link>
            </NavButton>
          </li>

          <li style={{marginRight: 150}}>
            <div style={{textAlign: "center", width: 170, position: "absolute"}}
                 className="dropdown">
              <button style={{fontSize: 25,
                fontWeight: "bold",
                background: "none",
                border: "none"}}
                      className="dropbtn">Our Solution</button>
              <div style={{borderRadius: 10}} className="dropdown-content">
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
              </div>
            </div>
          </li>

          <li>
            <NavButton>
              <Link className="ContactLink"
                    style={{borderRadius: 10,
                      textDecoration: "none",
                      fontSize: 25,
                      fontWeight: "bold",
                      color: "black"}}
                    to="/contact-us"
              >
                Contact Us
              </Link>
            </NavButton>
          </li>
        </ul>
      </MenuDiv>

      <MenuDiv className="HamburgerMenu">
        <Popup contentStyle={{width: 300,
          border: "none",
          borderRadius: 10,
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 0px"}}
               trigger={
                 <button  className="HamburgerButton" style={{border: "none", fontSize: 15, backgroundColor: "white"}}>
                   <svg viewBox="0 0 100 80" width="40" height="40">
                     <rect width="100" height="20"></rect>
                     <rect y="30" width="100" height="20"></rect>
                     <rect y="60" width="100" height="20"></rect>
                   </svg>
                 </button>
               } position="bottom right">
          <FadeIn>
            <div style={{textAlign: "center"}}>
              <Link style={{color: "black", textDecoration: "none", fontSize: 20}}
                    to="/">Home</Link>
              <hr/>
            </div>

            <div style={{textAlign: "center"}}>
              <Link style={{color: "black", textDecoration: "none", fontSize: 20}}
                    to={aboutLink.link}>{aboutLink.title}</Link>
              <hr/>
            </div>

            <div style={{textAlign: "center"}}>
              <Link style={{color: "black", textDecoration: "none", fontSize: 20}}
                    to={smartchainLink.link}>{smartchainLink.title}</Link>
              <hr/>
            </div>

            <div style={{textAlign: "center"}}>
              <Link style={{color: "black", textDecoration: "none", fontSize: 20}}
                    to={usecaseLink.link}>{usecaseLink.title}</Link>
              <hr/>
            </div>

            <div style={{textAlign: "center"}}>
              <Link style={{color: "black", textDecoration: "none", fontSize: 20}}
                    to={productsLink.link}>{productsLink.title}</Link>
              <hr/>
            </div>

            <div style={{textAlign: "center"}}>
              <Link style={{color: "black", textDecoration: "none", fontSize: 20}}
                    to="contact-us">Contact Us</Link>
              <hr/>
            </div>
          </FadeIn>
        </Popup>
      </MenuDiv>
    </Container>
  </header>
)

export default Header


