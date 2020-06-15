<<<<<<< HEAD
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
=======
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import logoimage from "../images/logo_vertical.png";
import arrowimage from "../images/downarrow.png";
import hamburgerimage from "../images/icons8-menu-50.png";
import Popup from "reactjs-popup";
import './layout.css';
import { zoomIn } from "react-animations";
import { keyframes } from "styled-components";

const ZoomIn = styled.div`animation: 2s ${keyframes`${zoomIn}`}`
>>>>>>> 76d916849e86f7aa1ca1b55f3a4baeab415539ea

const Container = styled.header`
  margin-bottom: 1.45rem;
  padding: 1.45rem 1.0875rem;
<<<<<<< HEAD
  box-shadow: 0 2px 2px #888888; 
`;

const Logo = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <Container>
    <h1 style={{ margin: 0 }}>
      <Logo to="/">
        {siteTitle}
      </Logo>
    </h1>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
=======
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
  margin-right: 10px
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
        <Popup contentStyle={{width: 110, border: "none"}} trigger={
          <button style={{border: "none", fontSize: 15, backgroundColor: "white", height: 25, outline: "none"}}>
            About Us
            <img src={arrowimage} style={{height: 30, width: 30, verticalAlign: "top"}}/>
          </button>
        } position="bottom center">
          <ZoomIn>
            <div style={{textAlign: "center"}}>
              <Link style={{color: "black", textDecoration: "none"}} to="/about">About</Link>
            </div>
            <div style={{textAlign: "center"}}>
              <Link style={{color: "black", textDecoration: "none"}} to="/smartchain">Smartchain</Link>
            </div>
          </ZoomIn>
        </Popup>
        <NavButton>
          <Link
            to="/applications"
            style={{ color: "black", textDecoration: "none"}}
          >
            Products + Solutions
          </Link>
        </NavButton>

        <NavButton>
          <Link
            to="/smartchain"
            style={{ color: "black", textDecoration:"none"}}
          >
            Contact Us
          </Link>
        </NavButton>
      </MenuDiv>
      <MenuDiv className={"HamburgerMenu"}>
        <Popup contentStyle={{width: 110, border: "none"}} trigger={
          <button style={{border: "none", fontSize: 15, backgroundColor: "white"}}>
            <img src={hamburgerimage} style={{height: 30, width: 30, verticalAlign: "top"}}/>
          </button>
        } position="bottom center">
          <ZoomIn>
            <div style={{textAlign: "center"}}>
              <Link style={{color: "black", textDecoration: "none"}} to="/about">About</Link>
            </div>
            <div style={{textAlign: "center"}}>
              <Link style={{color: "black", textDecoration: "none"}} to="/smartchain">Smartchain</Link>
            </div>
            <div style={{textAlign: "center"}}>
              <Link style={{color: "black", textDecoration: "none"}} to="/applications">Products + Solutions</Link>
            </div>
          </ZoomIn>
        </Popup>
      </MenuDiv>
    </Container>
  </header>
)

export default Header


>>>>>>> 76d916849e86f7aa1ca1b55f3a4baeab415539ea
