import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Service from '../components/Service';
import mobile from '../images/service/mobile.jpg';
import hireDedicatedDevelopers from '../images/service/hireDedicatedDevelopers.jpg';
import ai from '../images/service/ai.jpg';
import iot from '../images/service/iot.jpg';
import ui from '../images/service/uiux.jpg'
import webDeveloper from '../images/service/webDeveloper.jpg'
import styled from "styled-components";

const ServiceFluid = styled.div`
    padding: 0 0 50px 0;
`
const serviceData = [
    {
        image: ai,
        title: "AI & ML",
        discribe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa dignissimos asperiores quos officiis suscipit nihil officia at nisi libero laborum laudantium consequuntur, veniam saepe? Nesciunt dolores sint autem temporibus magnam quidem reiciendis hic expedita facilis dolor officiis dicta, "
    },
    {
        image: iot,
        title: "IoT",
        discribe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa dignissimos asperiores quos officiis suscipit nihil officia at nisi libero laborum laudantium"
    },
    {
        image: webDeveloper,
        title: "Web Development",
        discribe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa dignissimos asperiores quos officiis suscipit nihil officia at nisi libero laborum laudantium consequuntur, veniam saepe? Nesciunt dolores sint autem temporibus magnam quidem reiciendis hic expedita facilis dolor officiis dicta, "
    },
    {
        image: mobile,
        title: "Mobile Development",
        discribe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa dignissimos asperiores quos officiis suscipit nihil officia at nisi libero laborum laudantium"
    },
    {
        image: ui,
        title: "UI / UX Designing",
        discribe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa dignissimos asperiores quos officiis suscipit nihil officia at nisi libero laborum laudantium consequuntur, veniam saepe? Nesciunt dolores sint autem temporibus magnam quidem reiciendis hic expedita facilis dolor officiis dicta, "
    },
    {
        image: hireDedicatedDevelopers,
        title: "Hire Dedicated Developers",
        discribe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa dignissimos asperiores quos officiis suscipit nihil officia at nisi libero laborum laudantium"
    },
];

const Mission = () => (
    <Layout>
        <SEO title="Service" />
        <ServiceFluid>
        {
            serviceData?.map((element, index) => {
                return (
                    <Service
                        key={index}
                        image={element.image}
                        format={index % 2 !== 0 ? 'reverse' : ''}
                        title={element.title}
                        subContent={element.subContent}
                        discribe={element.discribe}
                    />
                )
            }
            )
        }
        </ServiceFluid>
    </Layout>
)

export default Mission;