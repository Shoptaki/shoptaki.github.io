import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import logoimage from "../images/logo_vertical.png";
import hamburgerimage from "../images/icons8-menu-50.png";
import Popup from "reactjs-popup";
import './layout.css';
import { fadeInDown } from "react-animations";
import { keyframes } from "styled-components";
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
        <Popup className="AboutPopup"
               contentStyle={{width: 110, border: "none", borderRadius: 10, padding: 10,
                 boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 0px"}}
               trigger={
                 <button
                   style={{
                     border: "none",
                     fontSize: 25,
                     backgroundColor: "white",
                     height: 25,
                     outline: "none",
                     fontWeight: "bold"}}>
                   About Us
                 </button>
               }
               position="bottom center">
          <FadeIn>
            <div style={{width: 110,
              textAlign: "center",
              border: "solid",
              borderWidth: 2,
              borderColor: "lightgray",
              borderRadius: 5,
              boxShadow: "rgba(0, 0, 0, 0.2) 5px 5px 5px"}}>
              <Link
                style={{color: "black", textDecoration: "none", fontWeight: "bold"}}
                to={aboutLink.link}>{aboutLink.title}</Link>
            </div>
          </FadeIn>
        </Popup>
        <NavButton>
          <Link
            to={smartchainLink.link}
            style={{ color: "black", textDecoration: "none", fontSize: 25, fontWeight: "bold"}}
          >
            {smartchainLink.title}
          </Link>
        </NavButton>

        <Popup
          contentStyle={{width: 110,
            border: "none",
            borderRadius: 10,
            padding: 10,
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 0px"}}
          trigger={
            <button
              style={{border: "none", fontSize: 25,
                backgroundColor: "white", height: 25,
                outline: "none", marginLeft: 100, fontWeight: "bold"}}>
              Our Solution
            </button>
          } position="bottom center">
          <FadeIn>
            <div style={{textAlign: "center",
              border: "solid",
              borderColor: "lightgray",
              borderWidth: 2,
              borderBottom: "none",
              borderTopRightRadius:5,
              borderTopLeftRadius: 5}}>
              <Link
                style={{color: "black", textDecoration: "none", fontWeight: "bold"}}
                to={usecaseLink.link}>{usecaseLink.title}
              </Link>
            </div>
            <div style={{textAlign: "center",
              border: "solid",
              borderColor: "lightgray",
              borderWidth: 2,
              borderTop: "none",
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              boxShadow: "rgba(0, 0, 0, 0.2) 5px 5px 5px"}}>
              <Link
                style={{color: "black", textDecoration: "none", fontWeight: "bold"}}
                to={productsLink.link}>{productsLink.title}
              </Link>
            </div>
          </FadeIn>
        </Popup>

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
      </MenuDiv>
      <MenuDiv className="HamburgerMenu">
        <Popup contentStyle={{width: 300,
          border: "none",
          borderRadius: 10,
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 0px"}}
               trigger={
                 <button style={{border: "none", fontSize: 15, backgroundColor: "white"}}>
                   <img src={hamburgerimage} style={{height: 30, width: 30, verticalAlign: "top"}}/>
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


