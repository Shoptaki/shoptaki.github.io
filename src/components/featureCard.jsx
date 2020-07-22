import React, {useState} from "react"
import styled from "styled-components"
import TitleLiner from "./TitleLiner"
import lowerbg from "../images/lower_background.svg"
import {theme} from "../theme/GlobalStyles.js"

const BgContainer = styled.div`
    background-image: url(${lowerbg});
`
const Container = styled.div`
    width: 80%;
    margin: auto;
    justify-content: center;
    text-align: center;
    padding: 6rem 0rem;
   
`
const Title = styled.h4`
    font-family: "Myriad Pro Light";
    font-size: 1.75em;
`
// Desktop Styles
const DesktopDiv = styled.div`
    display: none;
    @media (min-width: ${theme.tablet}) {
        display: block;
    }
`
const GridDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 2rem;
    padding-top: 2rem;
`
const DesktopCard = styled.div`
    box-shadow: 0.2rem 0.2rem 0.5rem #999999;
    background-color: #fff;
    text-align: left;
    padding: 2rem 2rem;
`
// Mobile Styles
const MobileDiv = styled.div`
    @media (min-width: ${theme.tablet}) {
        display: none;
    }
`
const MobileCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    cursor: pointer;
    padding-left: 15%;
    &:hover {
        background-color: #ededed;
    }
`
const Number = styled.p`
    font-size: 3rem;
    font-weight: bold;
    padding-right: 2rem;
    color: ${theme.fontDarkBlue};
`
const Box = styled.div`
    background-color: #fff;
    box-shadow: 0.2rem 0.2rem 0.5rem #999999;
    padding: 2rem;
`
const TextBox = styled.div`
    box-shadow: 0.2rem 0.2rem 0.5rem #999999;
    height: 12rem;
    display: flex;
    align-items: center;
`
const Text = styled.p`
    padding: 1rem 2rem;
`
const FeatureCard = () => {
    const text = [
        {
            title: "Heightened Security.",
            description: "We use Quantum resistance security for a more multilayer encryption approach unlike blockchain, which only uses one layered encryption.",
        },
        {
            title: "Truly Intelligent System.",
            description: "Each collaborative AI agent is doing different tasks; hence, the data is verifiable across multiple ecosystems. This entails that the entity will have a holistic overview of where their data is being used and control of that data.",
        },
        {
            title: "Always Automated. Always Updated.",
            description: "The Smartchain will automatically ensure full legal and regulatory compliance from end-to-end. This automation will allow each transaction with fewer frictions and delays that would normally happen with currently existing processes.",
        },
    ]

    const [index, setIndex] = useState(0);
    const defaultState = text.map((item, index) => (index === 0 ? true : false));
    const [isActive, setIsActive] = useState(defaultState);

    const mobileNumbers = text.map( (item, index) => (
        <MobileCard  
            active={isActive[index]}
            key={index}
            onClick={() => setIndex(index)}
            >
                <Number>{index+1}</Number>
                <p>{item.title}</p>
        </MobileCard>
    ))
    
    const mobileDescription = text[index].description;

    const desktopCards = text.map( (item, index) => (
        <DesktopCard>
            <h5>{item.title}</h5>
            <TitleLiner color="blue" />
            <p style={{paddingTop: "2rem"}}>{item.description}</p>
        </DesktopCard>
    ))
    return (
        <BgContainer>
            <Container>
                <MobileDiv>
                    <Box>
                        <Title>What are our features?</Title>
                        <TitleLiner color="orange" size="16rem"/>
                        {mobileNumbers}
                        <TextBox>
                            <Text>{mobileDescription}</Text>
                        </TextBox>
                    </Box>
                </MobileDiv>

                
                <DesktopDiv>
                    <Title>What are our features?</Title>
                    <TitleLiner color="orange" size="16rem"/>
                    <GridDiv>
                        {desktopCards}
                    </GridDiv>
                </DesktopDiv>
                
             </Container>
        </BgContainer>
    )

}

export default FeatureCard