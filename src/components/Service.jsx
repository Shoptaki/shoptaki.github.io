import React from 'react';
import styled from "styled-components";
import { theme } from '../theme/GlobalStyles';
const Service = ({image, format, title, subContent, discribe}) => {
let reverse = 'reverse';
const ServiceContainer = styled.div`
  padding: 2rem;
`;
const ServiceInnerContainer = styled.div`
  width: 100%;
  display:flex;
  margin: auto;
  flex-direction: ${
    format === reverse 
    ? 'row-reverse;' 
      : 'row;'
  }
  justify-content: center;
  align-items: center;
  // border: 2px solid red; 
  @media (max-width: ${theme.tablet}){
    flex-direction: column;
    box-shadow: 0.2rem 0.2rem 0.5rem #999999;
    padding: 2.5em;
    box-sizing: border-box;
  }
`;
const ImageCon = styled.div`
  max-width: 20rem;
  box-sizing: border-box;
  display: flex;
  // border: 2px solid red;
  margin-right:${
    format === reverse 
    ? '0rem;' 
      : '3rem;'
  }
  margin-left:${
    format === reverse 
    ? '3rem;' 
      : '0rem;'
  }
  @media (max-width: ${theme.tablet}){
    width: 100%;
    margin: 0;
  }
`;
const ContentContainer = styled.div`
  width: 45%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  @media (max-width: ${theme.tablet}){
    width: 100%;
    padding: 3rem 0 0;
    box-shadow: none;
  }
`;
const CoverImage = styled.div`
  width: 100%; height: 100%;
  overflow: hidden;
  position: relative;
`;
const ServiceImage = styled.img`
  width: 100%;
`;
const Title = styled.div`
  margin-bottom: 7px;
  font-size: 1.75rem;
  font-weight; 400;
`;
const Discription = styled.p`
  maring: 1em 0;
  padding-top: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;
const Divider = styled.div`
  width: 100%;
  height: 4px;
  margin: auto;
  background: rgb(8,77,161);
  background: linear-gradient(90deg,#084DA1 0%,#0E99D3 54%,#fff 100%);
`
  return (
    <ServiceContainer>
      <ServiceInnerContainer>
        <ImageCon>
          <CoverImage>
            <ServiceImage src={image} alt="" />
          </CoverImage>
        </ImageCon>
        <ContentContainer>
          <Title>{title}</Title>
          <Divider></Divider>
          <div>
            <Discription>{discribe}</Discription>
          </div>
        </ContentContainer>
      </ServiceInnerContainer>
    </ServiceContainer>
  )
}

export default Service